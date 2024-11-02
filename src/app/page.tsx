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
              <ColumnButton label='Features' hasNextLevel isActive />
              <ColumnButton label='Careers' hasNextLevel />
              <ColumnButton label='Out History' hasNextLevel />
              <ColumnButton label='Products' hasNextLevel />
              <div className='h-2' />
              <ColumnButton label='Add new page' icon={<Plus />} subtle />
            </Column>
            <Column title='Page'>
              <DataField type={'text'} label='Title' />
              <DataField type={'text'} label='Slug' />
              <DataField type={'textarea'} label='Excerpt' />
            </Column>
            <Column title='Two Column'></Column>
            <Column title='Text'></Column>
          </div>
        </div>
      </main>
    </HydrateClient>
  )
}
