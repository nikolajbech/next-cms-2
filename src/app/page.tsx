'use client'

import { Plus, StickyNote } from 'lucide-react'
import { useState } from 'react'
import allModels from 'src/data/models-backup.json'
import allRecords from 'src/data/records-backup.json'

import { Column } from '@/components/column'
import { ColumnButton } from '@/components/column-button'
import { DataField } from '@/components/data-field'
import { SideBar } from '@/components/side-bar'
import { Tabs } from '@/components/tabs'

export default function Home() {
  const [activeModelId, setActiveModelId] = useState('')
  const [activeRecordId, setActiveRecordId] = useState('')
  const [secondLayerModelId, setSecondLayerModelId] = useState('')

  const models = allModels
    .filter((m) => m.modular_block === false)
    .sort((a, b) => a.name.localeCompare(b.name))

  const activeModel = models.find((m) => m.id === activeModelId)

  const activeModelFields = [
    ...(activeModel?.fieldsets
      .sort((a, b) => a.position - b.position)
      .flatMap((fs) =>
        activeModel.fields
          .filter((f) => f.fieldset?.id === fs.id)
          .sort((a, b) => a.position - b.position),
      ) ?? []),
    ...(activeModel?.fields.filter((f) => !f.fieldset?.id) ?? []).sort(
      (a, b) => a.position - b.position,
    ),
  ]

  const previewKey = activeModelFields.find((f) => f.field_type === 'string')

  const activeRecordNames = allRecords
    .filter((r) => r.item_type.id === activeModelId)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .map((r) => ({
      id: r.id,
      name: r[previewKey?.api_key]?.da ?? r[previewKey?.api_key] ?? r.id,
    }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <main className='flex w-full flex-col'>
      <Tabs />
      <div className='flex h-full grow'>
        <SideBar />
        <div className='flex overflow-x-scroll'>
          <Column title='Models'>
            {models.map((model, i) => (
              <ColumnButton
                key={i}
                label={model.name}
                // secondLabel='6'
                icon={<StickyNote />}
                isActive={model.id === activeModelId}
                hasNextLevel
                onClick={() => {
                  setActiveModelId(model.id)
                  setActiveRecordId('')
                }}
              />
            ))}
          </Column>
          <Column title={activeModel?.name}>
            {activeRecordNames.map((preview, i) => (
              <ColumnButton
                key={i}
                label={preview.name}
                hasNextLevel
                isActive={preview.id === activeRecordId}
                onClick={() => {
                  setActiveRecordId(preview.id)
                }}
              />
            ))}
            <div className='h-2' />
            <ColumnButton
              label={`Add new ${activeModel?.name.toLowerCase()}`}
              icon={<Plus />}
              subtle
            />
          </Column>

          {activeRecordId && (
            <Column title='Record'>
              {activeModelFields.map((field, i) => (
                // <pre>{JSON.stringify(field, null, 2)}</pre>
                <div key={i}>
                  {/* {field.api_key} ({field.field_type}) */}
                  {field.field_type === 'string' && (
                    <DataField
                      type={'text'}
                      label={field.label}
                      value={
                        allRecords.find((r) => r.id === activeRecordId)[
                          field.api_key
                        ].da
                      }
                    />
                  )}
                  {field.field_type === 'text' && (
                    <DataField
                      type={'textarea'}
                      label={field.label}
                      value={
                        allRecords.find((r) => r.id === activeRecordId)[
                          field.api_key
                        ].da
                      }
                    />
                  )}
                  {field.field_type === 'boolean' && (
                    <DataField
                      type={'boolean'}
                      label={field.label}
                      value={
                        allRecords.find((r) => r.id === activeRecordId)[
                          field.api_key
                        ]
                      }
                    />
                  )}
                  {field.field_type === 'link' && (
                    <DataField
                      type={'link'}
                      label={field.label}
                      value={
                        allRecords.find((r) => r.id === activeRecordId)[
                          field.api_key
                        ]
                      }
                    />
                  )}
                  {field.field_type === 'blocks' && (
                    <DataField
                      type={'blocks'}
                      label={field.label}
                      value={
                        allRecords.find((r) => r.id === activeRecordId)[
                          field.api_key
                        ]
                      }
                      footer={
                        <ColumnButton
                          label={`Add new ${field.label}`}
                          icon={<Plus />}
                        />
                      }
                    />
                  )}
                  {field.field_type === 'rich_text' && (
                    <DataField
                      type={'blocks'}
                      label={field.label}
                      onValueClick={(index) => {
                        setSecondLayerModelId(
                          allRecords.find((r) => r.id === activeRecordId)[
                            field.api_key
                          ][index].item_type.id,
                        )
                      }}
                      value={(
                        allRecords.find((r) => r.id === activeRecordId)[
                          field.api_key
                        ].da as string[]
                      ).map((blockId) => {
                        const block = allRecords.find((r) => r.id === blockId)
                        console.log('block?.item_type.id', block?.item_type.id)

                        const model = allModels.find(
                          (m) => m.id === block?.item_type.id,
                        )
                        console.log('model', model)
                        return model?.name ?? 'Not found'
                      })}
                      footer={
                        <ColumnButton
                          label={`Add new ${field.label}`}
                          icon={<Plus />}
                        />
                      }
                    />
                  )}
                  {field.field_type === 'links' && (
                    <DataField
                      type={'link'}
                      label={field.label}
                      value={allRecords
                        .find((r) => r.id === activeRecordId)
                        [field.api_key].map((link) => link.da)}
                      footer={
                        <ColumnButton
                          label={`Add new ${field.label}`}
                          icon={<Plus />}
                        />
                      }
                    />
                  )}
                </div>
              ))}
            </Column>
          )}

          {/* <Column title='Page'>
            <DataField
              type={'text'}
              label='Title'
              value='Features'
              secondLabel='EN'
            />
            <DataField type={'text'} label='Slug' />
            <DataField type={'boolean'} label='Is dynamic slug' />
            <DataField type={'textarea'} label='Excerpt' secondLabel='EN' />
            <DataField type={'link'} label='Parent page' value='Products' />
            <DataField
              type={'link'}
              label='Tags'
              value={['Technology', 'Compliecne']}
              footer={
                <ColumnButton label='Add new tag' icon={<Plus />} subtle />
              }
            />

            <DataField
              type={'blocks'}
              label='Blocks'
              value={[
                'Column Layout, 2 columns',
                'News Preview',
                'Full Width',
                'Image',
                'Grid',
              ]}
              activeIndex={0}
              footer={
                <ColumnButton label='Add new block' icon={<Plus />} subtle />
              }
            />
            <DataField type={'text'} label='Layout' />
            <DataField type={'boolean'} label='Require login' />
          </Column> */}
          {/* <Column title='Column Layout'>
            <DataField
              type={'blocks'}
              label='Columns'
              value={[
                'Column, Content w. Text & Image',
                'Column, Content w. Text',
              ]}
              activeIndex={1}
              footer={
                <>
                  <ColumnButton label='Add new column' icon={<Plus />} subtle />
                </>
              }
            />
          </Column> */}
          {/* <Column title='Column'>
            <DataField
              type={'blocks'}
              label='Content'
              value={[
                'Text, This is an example of some...',
                'Image, Image with text',
              ]}
              activeIndex={0}
              footer={
                <ColumnButton label='Add new content' icon={<Plus />} subtle />
              }
            />
          </Column>
          <Column title='Text'>
            <DataField
              type={'textarea'}
              label='Value'
              value='This is an example of some text. This field can contain multiple lines of text.'
            />
          </Column>
          <Column title=''></Column> */}
        </div>
      </div>
    </main>
  )
}
