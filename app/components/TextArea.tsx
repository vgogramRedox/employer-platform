import { Textarea, TextInput } from '@mantine/core'
import React from 'react'
interface inputProps{
label?:string
onChange?:any
placeholder?:string
className?:string
value?:string

}

function TextArea({
label,
onChange,
placeholder,
className,
value
}:inputProps) {
  return (
    <div className='leading-8'>
    
    
    <label className='text-dark text-xl max-md:text-sm max-lg:font-light' >
{label}
    </label>
    <Textarea
    onChange={onChange}
    value={value}
    autosize={true}
    minRows={10}
 className={`lg:min-h-[16.5rem] min-w-full   w-full rounded  ${className} max-lg:font-light`}
  placeholder={placeholder} />
   </div>
  )
}

export default TextArea