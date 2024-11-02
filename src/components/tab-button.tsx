import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

export const TabButton = (p: {
  label: string
  className?: string
  closable?: boolean
}) => {
  return (
    <Button
      className={cn('h-12 gap-3 rounded-none', p.className)}
      variant='ghost'
    >
      {p.label}
      {p.closable && <X className='h-4 w-4' />}
    </Button>
  )
}
