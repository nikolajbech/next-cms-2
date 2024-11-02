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
                secondLabel='7'
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
                  'Two Column',
                  'News Preview',
                  'Full Width',
                  'Image',
                  'Grid',
                ]}
                activeValue='Two Column'
                footer={
                  <ColumnButton label='Add new block' icon={<Plus />} subtle />
                }
              />
            </Column>
            <Column title='Two Column'></Column>
            <Column title='Text'></Column>
            <Column title=''></Column>
            <Column title=''></Column>
          </div>
        </div>
      </main>
    </HydrateClient>
  )
}
