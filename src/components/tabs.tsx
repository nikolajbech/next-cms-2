import { TabButton } from './tab-button'

export const Tabs = () => {
  return (
    <div className='flex h-12 w-full items-center justify-between border-b bg-muted/30'>
      <div className='-gap-[1px] flex'>
        <div className='flex items-center px-4 font-bold'>NextCMS</div>
        <TabButton
          isActive
          label='Features (not saved)'
          className='border-x'
          closable
        />
        <TabButton label='History' className='border-r' closable />
      </div>
      <div className='-gap-[1px] flex'>
        <TabButton label='Preview' className='border-l' />
        <TabButton label='Build' className='border-l' />
        <TabButton label='Settings' className='border-l' />
      </div>
    </div>
  )
}
