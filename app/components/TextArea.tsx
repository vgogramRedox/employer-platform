import { Textarea, TextInput } from '@mantine/core'
import React from 'react'
interface inputProps{
label?:string
onChange?:()=>void
placeholder?:string
className?:string

}

function TextArea({
label,
onChange,
placeholder,
className
}:inputProps) {
  return (
    <div className='leading-8'>
    
    
    <label className='text-dark text-xl max-md:text-sm' >
{label}
    </label>
    <Textarea
    onChange={onChange}
    autosize={true}
    minRows={10}
 className={`lg:min-h-[16.5rem] min-w-full   w-full rounded  ${className}`}
  placeholder={placeholder} />
   </div>
  )
}

export default TextArea