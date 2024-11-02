import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export const DataField = (p: {
  label: string
  type: 'text' | 'textarea' | 'number' | 'date' | 'boolean' | 'enum'
}) => {
  return (
    <div className='px-2 pb-4'>
      <div className='px-1 text-sm opacity-30'>{p.label}</div>
      {p.type === 'text' && <Input placeholder={`Add ${p.label} here...`} />}
      {p.type === 'textarea' && (
        <Textarea placeholder={`Add ${p.label} here...`} />
      )}
    </div>
  )
}
