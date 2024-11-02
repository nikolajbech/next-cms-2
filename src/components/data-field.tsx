import { ChevronRight, Link, Menu } from 'lucide-react'

import { cn } from '@/lib/utils'

import { ColumnButton } from './column-button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { Textarea } from './ui/textarea'

export const DataField = (p: {
  label: string
  type:
    | 'text'
    | 'textarea'
    | 'number'
    | 'date'
    | 'boolean'
    | 'enum'
    | 'link'
    | 'blocks'
  value?: string | string[]
  footer?: React.ReactNode
  activeValue?: string
}) => {
  return (
    <div className={cn('w-full pb-4', p.type === 'boolean' && '-mt-2')}>
      {p.type !== 'boolean' && (
        <div className='mx-3 px-1 text-sm opacity-30'>{p.label}</div>
      )}
      {p.type === 'text' && (
        <Input
          className='mx-2'
          placeholder={`Add ${p.label} here`}
          value={p.value}
          readOnly
        />
      )}
      {p.type === 'textarea' && (
        <Textarea
          className='mx-2'
          placeholder={`Add ${p.label} here`}
          value={p.value}
          readOnly
        />
      )}
      {p.type === 'boolean' && (
        <div className='mx-2 mt-2 flex items-center space-x-2'>
          <Switch id={`switch-item-${p.label}`} />
          <Label htmlFor={`switch-item-${p.label}`}>{p.label}</Label>
        </div>
      )}

      {p.type === 'link' && (
        <div className='mt-1 flex flex-col gap-1'>
          {(typeof p.value === 'string' ? [p.value] : (p.value ?? [])).map(
            (v, i) => (
              <ColumnButton
                key={i}
                label={v}
                icon={<Link className='h-4 w-4 opacity-50' strokeWidth={1} />}
              />
            ),
          )}
        </div>
      )}

      {p.type === 'blocks' && (
        <div className='mt-1 flex flex-col gap-1'>
          {(typeof p.value === 'string' ? [p.value] : (p.value ?? [])).map(
            (v, i) => {
              const isActive = p.activeValue === v

              return (
                <ColumnButton
                  key={i}
                  label={v}
                  icon={<Menu className='h-4 w-4 opacity-50' strokeWidth={1} />}
                  hasNextLevel
                  isActive={isActive}
                />
              )
            },
          )}
        </div>
      )}
      <div className='w-full'>{p.footer}</div>
    </div>
  )
}
