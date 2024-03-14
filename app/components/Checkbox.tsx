import React, { useState } from 'react'
import { Checkbox } from '@mantine/core'
import '@mantine/core'

interface checkboxProps{
    checked?:boolean
    onChange?:()=>void
    label?: string
}
function CheckboxComp({
    checked,
    onChange,
    label
}:checkboxProps) {
    

  return (
    <div className='text-dark text-3xl font-normal '>
        <Checkbox size='lg'  label={label}   className="text-4xl" checked={checked} />
        </div>
    
  )
}

export default CheckboxComp