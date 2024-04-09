
import React from 'react'
import { NavbarSimple } from '../components/Employer/sidebar'
import { Header } from '../components/Employer/Header'
import { MobileFooter } from '../components/Employer/MobileFooter'
import { isMobile } from 'react-device-detect'
import { MobileHeader } from '../components/Employer/MobileHeader'
import { headers } from 'next/headers'
import { AuthContextProvider } from '@/context/AuthContext'



function layout ({children}:{
 children: React.ReactNode
}) {

const headersList=headers()
// console.log(headersList)
// const domain = headersList.get('host') || "";
//     const fullUrl = headersList.get('referer') || "";

    // console.log(fullUrl);
    // console.log(fullUrl?.includes("/jobs/active-jobs"||`/jobs/`))
  return (
   <>
      
    <div className='lg:flex'>
      <div className='max-lg:hidden'>
      <NavbarSimple />
      </div>

     
    

    <main className='lg:ms-auto lg:min-w-[85%] lg:max-w-[85%] max-lg:w-full '>
<Header/>
{/* <div className='lg:hidden'>{
  fullUrl?.includes("/jobs/active-jobs"||`/jobs/`)?(<MobileHeader />):""
}
      
      </div> */}
{children}
{

}
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
