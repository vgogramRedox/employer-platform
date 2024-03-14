"use client"
import React, { useState } from 'react'
import { Checkbox } from '@mantine/core'
import '@mantine/core'
import useIsMobile from '@/hooks/useIsMobile'

interface checkboxProps{
    checked?:boolean
    onChange?:()=>void
    label?: React.ReactNode
    className?:string
    size?:string
}
function CheckboxComp({
    checked,
    onChange,
    label,
    className,
    size
}:checkboxProps) {
    
  const isMobile=useIsMobile()

  return (
    <div className='text-dark text-3xl font-normal '>{
      isMobile?(
        <Checkbox  iconColor="dark.8" size={size||'md'}  label={label}   className={className} checked={checked} />
      ):(
        <Checkbox  iconColor="dark.8" size={size||'lg'}  label={label}   className={className} checked={checked} />
      )
    }
  
        </div>
    
  )
}

export default CheckboxComp