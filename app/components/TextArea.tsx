import { Textarea, TextInput } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
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
  const midWith=useMediaQuery('(max-width:668px)')
  return (
    <div className='leading-8 '>
    
    
    <label className='text-dark text-xl max-md:text-sm max-lg:font-light' >
{label}
    </label>
    <Textarea
    onChange={onChange}
    value={value}
    autosize={true}
    styles={{
      input: {
        fontSize: midWith ? '0.875rem' : '1.2rem' 
      }
    }}
    
    minRows={10}
 className={`lg:min-h-[16.5rem] min-w-full    border-grey-4   w-full rounded  ${className}  font-light  `}
  placeholder={placeholder} />
   </div>
  )
}

export default TextArea