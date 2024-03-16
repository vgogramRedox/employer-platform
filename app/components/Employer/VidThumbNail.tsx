"use client"
import { Grid, Image } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import { isMobile } from 'react-device-detect';

export function VidThumbNail() {
  console.log(isMobile)
  return (
  
      <section  className="" >
        
        <div className='mx-auto text-center bg-purple-200 rounded-lg lg:min-w-[15.22888rem] max-lg:w-[80%] lg:min-h-[16.11313rem] flex-shrink  pt-3'>
          <div className='relative'>
          <Image src="/images/thumbnail1.svg" className='max-w-[90%] mx-auto '/>
          <div className='bg-grey-3 rounded-full h-14 w-14 absolute  lg:top-[35%] lg:left-[45%] max-lg:top-[35%] max-lg:left-[35%]  '>

          <IconPlayerPlay fill='true'strokeWidth='1.5' size={32}  className='z-10 outline-0 mx-auto  text-center mt-[22%]    items-center '/>
          </div>
          
          </div>
        
        <p className=' text-dark lg:text-lg font-semibold mt-2'>Tolu Ogunnipe</p>
        <p className="text-sm">Product designer</p>
        </div>
      
        </section>
   
    
  );
}