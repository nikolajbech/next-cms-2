export const Column = (p: { children?: React.ReactNode; title?: string }) => {
  return (
    <div className='flex min-h-full min-w-[340px] grow flex-col overflow-y-scroll border-r'>
      <div className='flex justify-center p-3 text-xs text-foreground/30'>
        {p.title}
      </div>
      {p.children}
    </div>
  )
}
