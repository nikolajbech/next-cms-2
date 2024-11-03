import { Link, Menu } from 'lucide-react'

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
  activeIndex?: number
  useInlineNesting?: boolean
  secondLabel?: string
  onValueClick?: (index: number) => void
}) => {
  return (
    <div className={cn('w-full pb-4', p.type === 'boolean' && '-mt-2')}>
      {p.type !== 'boolean' && (
        <div className='mx-4 flex justify-between px-1 text-sm opacity-30'>
          {p.label}
          {p.secondLabel && <span className='text-xs'>{p.secondLabel}</span>}
        </div>
      )}
      {p.type === 'text' && (
        <div className='px-3'>
          <Input placeholder={`Add ${p.label} here`} value={p.value} readOnly />
        </div>
      )}
      {p.type === 'textarea' && (
        <div className='px-3'>
          <Textarea
            placeholder={`Add ${p.label} here`}
            value={p.value}
            readOnly
          />
        </div>
      )}
      {p.type === 'boolean' && (
        <div className='mx-3 mt-2 flex items-center space-x-2'>
          <Switch id={`switch-item-${p.label}`} />
          <Label htmlFor={`switch-item-${p.label}`}>{p.label}</Label>
        </div>
      )}

      {p.type === 'link' && (
        <div className='mt-1 flex flex-col'>
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
        <div className='mt-1 flex flex-col'>
          {(typeof p.value === 'string' ? [p.value] : (p.value ?? [])).map(
            (v, i) => {
              const isActive = p.activeIndex === i

              return (
                <ColumnButton
                  key={i}
                  label={v.split(',')[0] ?? ''}
                  secondLabel={v.split(',')[1]}
                  icon={<Menu className='h-4 w-4 opacity-50' strokeWidth={1} />}
                  hasNextLevel
                  isActive={!p.useInlineNesting && isActive}
                  rotateChevron={isActive && p.useInlineNesting}
                  onClick={() => {
                    p.onValueClick?.(i)
                  }}
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
