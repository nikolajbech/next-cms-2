import { ArrowDownAZ, ExternalLink, Search } from 'lucide-react'

export const Column = (p: { children?: React.ReactNode; title?: string }) => {
  return (
    <div className='relative flex max-h-[calc(100vh-48px)] min-w-[340px] grow flex-col overflow-y-scroll border-r'>
      <div className='sticky top-0 z-50 mb-3 flex justify-center border-b bg-background/80 p-3 text-xs text-foreground/30 backdrop-blur-sm'>
        {p.title}
        <div className='absolute inset-0 right-auto flex items-center px-3 text-foreground'>
          <ArrowDownAZ size={14} />
        </div>
        <div className='absolute inset-0 left-auto flex items-center gap-3 px-3 text-foreground'>
          <ExternalLink size={14} />
          <Search size={14} />
        </div>
      </div>
      {p.children}
    </div>
  )
}
