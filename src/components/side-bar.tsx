import { Settings, StickyNote, Users } from 'lucide-react'

import { cn } from '@/lib/utils'

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
          variant={'ghost'}
          className={cn(
            'h-12 rounded-none border-b border-border',
            b.active && 'bg-background',
            !b.active && 'text-foreground/50',
          )}
        >
          {b.icon}
        </Button>
      ))}
    </div>
  )
}
