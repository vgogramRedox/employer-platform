import React from 'react'
import { NavbarSimple } from '../components/Employer/sidebar'
import { Header } from '../components/Employer/Header'

function layout ({children}:{
 children: React.ReactNode
}) {
  return (
    <>
    <div className='flex'>
    <NavbarSimple />

    <main className='w-full'>
<Header/>
{children}
    </main>
    </div>
    


    </>
      
    
  )
}

export default  layout
