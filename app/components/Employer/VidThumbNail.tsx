"use client"
import { Grid, Image } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import { isMobile } from 'react-device-detect';
export interface VidThumbNailType{
  bg?:string,
  thumbnailImg?:any
  className?:string
  bookmarked?:boolean
  onClick?:()=>void
  onClickBookMark?:()=>void
}

export function VidThumbNail({bg,
  className,
  thumbnailImg="/svgs/thumbnail1.svg",
  
}:VidThumbNailType) {
  // console.log(isMobile)
  
  return (
  
      <section  className=" lg:max-w-[90%] " >
        
        <div className={`mx-auto text-center ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:w-[90%] lg:gap-10 lg:min-h-[16.11313rem] flex-shrink  pt-3 ${className}`}>
          <div className='relative'>
          <Image src={thumbnailImg} className='lg:max-w-[80%] max-md:w-[70%] mx-auto '/>
          <div className='bg-grey-3 rounded-full max-md:w-10 max-md:h-10 md:h-14 w-14 absolute max-md:top-[32.5%] lg:top-[35%] lg:left-[45%] max-lg:top-[35%] max-lg:left-[45%]  '>

          <IconPlayerPlay fill='true'strokeWidth='1.5' size={32}  className='z-10 outline-0 mx-auto  text-center mt-[22%] max-md:mt-[10%]    items-center '/>
          </div>
          
          </div>
        
        <p className=' text-dark lg:text-lg font-normal mt-2 '>Tolu Ogunnipe</p>
        <p className="max-lg:text-sm lg:text-sm  font-light pb-5">Product designer</p>
        </div>
      
        </section>
   
    
  );
}