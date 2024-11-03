export const InlineWrapper = (p: { children?: React.ReactNode }) => {
  return (
    <div className='flex gap-2 py-2 pl-5'>
      <div className='w-[1px] bg-border' />
      <div className='py-2'>{p.children}</div>
    </div>
  )
}
