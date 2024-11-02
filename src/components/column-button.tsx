import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

export const ColumnButton = (p: {
  label: string
  secondLabel?: string
  icon?: React.ReactNode
  isActive?: boolean
  hasNextLevel?: boolean
  subtle?: boolean
}) => {
  return (
    <Button
      className={cn(
        'w-full justify-between gap-2 rounded-none text-start',
        p.subtle && 'text-foreground/30',
      )}
      variant={p.isActive ? 'selected' : 'ghost'}
    >
      <div className='flex items-center gap-2'>
        <span className='opacity-90'>{p.icon}</span>
        <span className='opacity-100'>{p.label}</span>
        <span className={cn('opacity-15', p.isActive && 'opacity-40')}>
          {p.secondLabel}
        </span>
      </div>
      {p.hasNextLevel && (
        <span className={cn(!p.isActive && 'opacity-25')}>
          <ChevronRight />
        </span>
      )}
    </Button>
  )
}
