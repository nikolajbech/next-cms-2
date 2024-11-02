import { Link } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Input } from './ui/input'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { Textarea } from './ui/textarea'

export const DataField = (p: {
  label: string
  type: 'text' | 'textarea' | 'number' | 'date' | 'boolean' | 'enum' | 'link'
  value?: string
}) => {
  return (
    <div className={cn('px-2 pb-4', p.type === 'boolean' && '-mt-2')}>
      {p.type !== 'boolean' && (
        <div className='px-1 text-sm opacity-30'>{p.label}</div>
      )}
      {p.type === 'text' && <Input placeholder={`Add ${p.label} here...`} />}
      {p.type === 'textarea' && (
        <Textarea placeholder={`Add ${p.label} here...`} />
      )}
      {p.type === 'boolean' && (
        <div className='mt-2 flex items-center space-x-2'>
          <Switch id={`switch-item-${p.label}`} />
          <Label htmlFor={`switch-item-${p.label}`}>{p.label}</Label>
        </div>
      )}
      {p.type === 'link' && (
        <div className='flex h-9 w-full items-center gap-2 rounded-md border-input bg-muted/50 px-3 py-1 text-sm shadow-sm transition-colors'>
          <Link className='h-4 w-4 opacity-50' />
          {p.value}
        </div>
      )}
    </div>
  )
}
