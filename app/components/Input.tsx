import { TextInput } from '@mantine/core'
import React from 'react'
interface inputProps{
label?:string
onChange?:()=>void
placeholder?:string
className?:string

}

function Input({
label,
onChange,
placeholder,
className
}:inputProps) {
  return (
    <div className='leading-8'>
    
    
    <label className='text-dark text-xl' >
{label}
    </label>
    <input 
    onChange={onChange}
 className='min-h-[3.25rem] min-w-full p-2 border border-grey-4 w-full rounded mb-3'
  placeholder={placeholder} />
   </div>
  )
}

export default Input