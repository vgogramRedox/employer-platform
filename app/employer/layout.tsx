import React from 'react'
import { NavbarSimple } from '../components/Employer/sidebar'
import { Header } from '../components/Employer/Header'
import { MobileFooter } from '../components/Employer/MobileFooter'
import { isMobile } from 'react-device-detect'
import { MobileHeader } from '../components/Employer/MobileHeader'

function layout ({children}:{
 children: React.ReactNode
}) {
  
  return (
    <>
    <div className='lg:flex'>
      <div className='max-lg:hidden'>
      <NavbarSimple />
      </div>

     
    

    <main className='lg:ms-auto lg:min-w-[85%] lg:max-w-[85%] max-lg:w-full '>
<Header/>
<div className='lg:hidden'>
      <MobileHeader />
      </div>
{children}

<MobileFooter/>
    </main>
    </div>
    
{
  isMobile&&( <MobileFooter/>)
}

    </>
      
    
  )
}

export default  layout
