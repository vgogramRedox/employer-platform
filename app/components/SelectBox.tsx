import { CheckIcon, Image } from '@mantine/core'
import React from 'react'
import CheckboxComp from './Checkbox'


interface selectBoxProps{
icon?:React.ReactNode,
label:React.ReactNode,
checked?:boolean
}
function SelectBox({
    icon,
    label,
    checked
}:selectBoxProps) {
  return (
    <div className="bg-purple-100 rounded-lg min-h-20 min-w-[7.89356rem] p-2">
        <div className='ms-auto flex justify-end'>
        <CheckboxComp checked={checked} size='sm' className='rounded-lg'/>
        </div>

<section className='mx-auto my-auto'>
    {icon}

{label}

</section>
    </div>
  )
}

export default SelectBox