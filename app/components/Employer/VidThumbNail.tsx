"use client"
import { BackgroundImage, Image,rem } from '@mantine/core';

export interface VidThumbNailType{
  bg?:string,
  thumbnailImg?:any
  className?:string
  bookmarked?:boolean
  name?:string
  job?:string
  onClick?:()=>void
  onClickBookMark?:()=>void
}

export function VidThumbNail({bg,
  className,job,
  thumbnailImg="/svgs/thumbnail1.svg",
  
}:VidThumbNailType) {
  // console.log(isMobile)
  
  return (
  
      <section  className=" lg:max-w-[90%] " >
        
        <div className={`mx-auto text-center  lg:pt-10 ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:w-[90%] lg:gap-10 lg:min-h-[16.11313rem] flex-shrink  pt-3 ${className}`}>
        <BackgroundImage
          src={thumbnailImg}
          className="lg:max-w-[80%] lg:h-[8rem]
          hover:cursor-pointer focus-within:cursor-pointer
          h-[7.15rem] max-lg:w-[80%]  min-h-[7.15rem] pt-1  mx-auto rounded-lg  flex items-center justify-center"
        >
          {/* <Image src={"/svgs/thumbnail1.svg"} className=" " /> */}
          <Image src="/svgs/playGreyBg.svg" w={rem(40) } className="absolute" />
        </BackgroundImage>
        
        <p className=' text-dark lg:text-lg font-normal mt-2 '>Tolu Ogunnipe</p>
        <p className="max-lg:text-sm lg:text-sm  font-light pb-3">{job}</p>
        </div>
      
        </section>
   
    
  );
}