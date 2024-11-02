import { Settings, StickyNote, Users } from 'lucide-react'

import { Button } from './ui/button'

export const SideBar = () => {
  return (
    <div className='flex min-h-full min-w-12 max-w-12 grow flex-col border-r bg-muted/30'>
      {[
        {
          icon: <StickyNote />,
          active: true,
        },
        {
          icon: <Users />,
        },
        {
          icon: <Settings />,
        },
      ].map((b, i) => (
        <Button
          key={i}
          variant={b.active ? 'selected' : 'ghost'}
          className='h-12 rounded-none border-b border-border'
        >
          {b.icon}
        </Button>
      ))}
    </div>
  )
}
