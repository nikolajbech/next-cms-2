import { Dock, Menu, Newspaper, Plus, StickyNote } from 'lucide-react'

import { Column } from '@/components/column'
import { ColumnButton } from '@/components/column-button'
import { DataField } from '@/components/data-field'
import { SideBar } from '@/components/side-bar'
import { Tabs } from '@/components/tabs'
import { HydrateClient } from '@/trpc/server'

export default async function Home() {
  return (
    <HydrateClient>
      <main className='flex min-h-screen w-full flex-col'>
        <Tabs />
        <div className='flex h-full grow'>
          <SideBar />
          <div className='flex overflow-x-scroll'>
            <Column title='Models'>
              <ColumnButton
                label='Pages'
                secondLabel='6'
                icon={<StickyNote />}
                isActive
                hasNextLevel
              />
              <ColumnButton
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
            </Column>
            <Column title='Pages'>
              <ColumnButton label='Frontpage' hasNextLevel />
              <ColumnButton label='About Us' hasNextLevel />
              <ColumnButton label='Products' hasNextLevel />
              <ColumnButton label='Features' hasNextLevel isActive />
              <ColumnButton label='Careers' hasNextLevel />
              <ColumnButton label='Out History' hasNextLevel />
              <div className='h-2' />
              <ColumnButton label='Add new page' icon={<Plus />} subtle />
            </Column>
            <Column title='Page'>
              <DataField type={'text'} label='Title' value='Features' />
              <DataField type={'text'} label='Slug' />
              <DataField type={'boolean'} label='Is dynamic slug' />
              <DataField type={'textarea'} label='Excerpt' />
              <DataField type={'link'} label='Parent page' value='Products' />
              <DataField
                type={'link'}
                label='Tags'
                value={['Technology', 'Compliene']}
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
                  <ColumnButton label='Add new column' icon={<Plus />} subtle />
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
            <Column title=''>
              <DataField
                type={'textarea'}
                label='Text'
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
