import { Dock, Menu, Newspaper, Plus, StickyNote, Tag } from 'lucide-react'
import allModels from 'src/data/models-backup.json'
import allRecords from 'src/data/records-backup.json'

import { Column } from '@/components/column'
import { ColumnButton } from '@/components/column-button'
import { DataField } from '@/components/data-field'
import { SideBar } from '@/components/side-bar'
import { Tabs } from '@/components/tabs'
import { HydrateClient } from '@/trpc/server'

export default async function Home() {
  const models = allModels
    .filter((m) => m.modular_block === false)
    .sort((a, b) => a.name.localeCompare(b.name))

  const pages = allRecords
    .filter((r) => r.item_type.id === 'eu0mPOpeQfCSoD9wPWUm_g')
    .sort((a, b) => a.title.da.localeCompare(b.title.da))

  console.log(
    'models',
    models.map((m) => m.name),
  )

  return (
    <HydrateClient>
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
                  isActive={model.name === 'Page'}
                  hasNextLevel
                />
              ))}
              {/* <ColumnButton
                label='News'
                secondLabel='17'
                icon={<Newspaper />}
                hasNextLevel
              />
              <ColumnButton
                label='Menu'
                secondLabel='7'
                icon={<Menu />}
                hasNextLevel
              />
              <ColumnButton
                label='Footer'
                secondLabel='7'
                icon={<Dock />}
                hasNextLevel
              />
              <ColumnButton
                label='Tags'
                secondLabel='7'
                icon={<Tag />}
                hasNextLevel
              /> */}
            </Column>
            <Column title='Pages'>
              {pages.map((page, i) => (
                <ColumnButton key={i} label={page.title.da} hasNextLevel />
              ))}
              {/* <ColumnButton label='About Us' hasNextLevel />
               <ColumnButton label='Products' hasNextLevel />
               <ColumnButton label='Features' hasNextLevel isActive />
               <ColumnButton label='Careers' hasNextLevel />
               <ColumnButton label='Out History' hasNextLevel /> */}
              <div className='h-2' />
              <ColumnButton label='Add new page' icon={<Plus />} subtle />
            </Column>
            <Column title='Page'>
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
            </Column>
            <Column title='Column Layout'>
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
                    {/* <InlineWrapper>
                      <DataField
                        type={'blocks'}
                        label='Content'
                        value={[
                          'Text, This is an example of some...',
                          'Image, Image with text',
                        ]}
                        activeIndex={0}
                        footer={
                          <ColumnButton
                            label='Add new content'
                            icon={<Plus />}
                            subtle
                          />
                        }
                      />
                    </InlineWrapper> */}
                    <ColumnButton
                      label='Add new column'
                      icon={<Plus />}
                      subtle
                    />
                  </>
                }
              />
            </Column>
            <Column title='Column'>
              <DataField
                type={'blocks'}
                label='Content'
                value={[
                  'Text, This is an example of some...',
                  'Image, Image with text',
                ]}
                activeIndex={0}
                footer={
                  <ColumnButton
                    label='Add new content'
                    icon={<Plus />}
                    subtle
                  />
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
            <Column title=''></Column>
          </div>
        </div>
      </main>
    </HydrateClient>
  )
}
