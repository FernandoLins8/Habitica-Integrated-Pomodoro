export function Button({ children, outline=true, ...buttonProps} ) {
  return (
    outline === true ?
    <button 
      {...buttonProps}
      className="px-4 h-10 inline-block rounded-md my-2 bg-indigo-500 text-white text-sm border hover:opacity-95 active:scale-105"
    >
      {children}
    </button>
    :
    <button 
      {...buttonProps}
      className="px-4 h-10 inline-block rounded-md my-2 bg-indigo-50 text-indigo-500 text-sm border border-indigo-300 active:scale-105"
    >
      {children}
    </button>
  )
}
