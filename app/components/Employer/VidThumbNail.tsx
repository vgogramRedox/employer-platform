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
  className,job="Product Designer",name="Tolu Ogunnipe",
  thumbnailImg="/svgs/thumbnail1.svg",
  
}:VidThumbNailType) {
  // console.log(isMobile)
  
  return (
  
      <section  className=" " >
        
        <div className={`mx-auto text-center  lg:pt-[1.61rem] ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:w-[10rem] lg:gap-10 lg:min-h-[16.11313rem] flex-shrink  pt-3 ${className}`}>
        <BackgroundImage
          src={thumbnailImg}
          className="lg:max-w-[80%] lg:min-h-[9.25rem]
          hover:cursor-pointer focus-within:cursor-pointer
          rounded-[0.625rem]
          h-[7.15rem] max-lg:w-[80%]  min-h-[7.15rem] pt-1 max-lg:mt-[1.61rem]  mx-auto  flex items-center justify-center"
        >
          {/* <Image src={"/svgs/thumbnail1.svg"} className=" " /> */}
          <Image src="/svgs/playGreyBg.svg" w={rem(40) } className="absolute" />
        </BackgroundImage>
        
        <p className=' text-dark lg:text-lg font-normal mt-2 max-lg:text-sm '>{name}</p>
        <p className="max-lg:text-sm lg:text-sm lg:mt-3  font-light ">{job} </p>
        </div>
      
        </section>
   
    
  );
}