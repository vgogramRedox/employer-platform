import React from 'react'
import { Button } from '@mantine/core'

interface BtnProps{
title:React.ReactNode
variant?:'filled'|'Outline'
onClick?:()=>void
className:string
fullWidth?:boolean
p?:string
radius?:string

}
function PrimaryButton({title,variant,className,onClick,fullWidth=true,p,radius="lg"}:BtnProps) {
  return (
   <Button variant={variant}  fullWidth={fullWidth} radius={radius} p={p}
   onClick={onClick}
   className={`${className} transition-all duration-200`}>
{title}
   </Button>
  )
}

export default PrimaryButton