import { TextInput } from '@mantine/core'
import React from 'react'
export interface inputProps{
label?:string
onChange?:any
placeholder?:string
className?:string
value?:string

}

function Input({
label,
onChange,
placeholder,
className,
value
}:inputProps) {
  return (
    <div className={`leading-8 ${className}`}>
    
    
    <label className='text-dark text-xl max-md:text-sm lg:text-xl' >
{label}
    </label>
    <input 
    
    onChange={onChange}
    value={value}
 className='min-h-[3.25rem] min-w-full p-2 border border-grey-4 w-full rounded mb-3'
  placeholder={placeholder} />
   </div>
  )
}

export default Input