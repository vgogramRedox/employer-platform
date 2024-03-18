import BreadCrumbsNav from '@/app/components/BreadCrumbsNav'
import React from 'react'

function layout({
    children
}:{
    children:React.ReactNode
}) {
  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ]
  return (
   
   <>
   <BreadCrumbsNav items={items}/>
   {children}
   </>
  )
}

export default layout