import React from 'react'
import { Button } from '@mantine/core'

interface BtnProps{
title:React.ReactNode
variant?:'filled'|'Outline'
onClick?:()=>void
className:string
fullWidth?:boolean

}
function PrimaryButton({title,variant,className,onClick,fullWidth=true}:BtnProps) {
  return (
   <Button variant={variant}  fullWidth={fullWidth} radius='lg'
   onClick={onClick}
   className={`${className} transition-all duration-200`}>
{title}
   </Button>
  )
}

export default PrimaryButton