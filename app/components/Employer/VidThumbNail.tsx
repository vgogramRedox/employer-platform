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
  thumbnailImg="/svgs/thumbnail1.svg",onClick
  
}:VidThumbNailType) {
  // console.log(isMobile)
  
  return (
  
      <section  className=""
      onClick={onClick}
      >
        
        <div className={`mx-auto text-center lg:min-w-[98%]  lg:pt-[1.61rem] ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:full lg:gap-10 lg:min-h-[16.11313rem]  pt-3 ${className}  max-md:w-[11.42169rem] max-md:min-h-[12.08488rem] md:min-h-[16.11313rem] `}>
        <BackgroundImage
          src={thumbnailImg}
          className="lg:max-w-[80%] lg:min-h-[9.23556rem] md:w-[80%]
          hover:cursor-pointer focus-within:cursor-pointer
          rounded-[0.625rem] max-md:w-[9.13731rem] max-md:h-[ 6.92669rem] md:min-h-[10.77906rem]
          h-[7.15rem]   min-h-[7.15rem] pt-1 max-lg:mt-[5%]  mx-auto  flex items-center justify-center"
        >
          {/* <Image src={"/svgs/thumbnail1.svg"} className=" " /> */}
          <Image src="/svgs/playGreyBg.svg" w={rem(40) } className="absolute max-md:static" />
        </BackgroundImage>
        
        <p className=' text-dark lg:text-lg font-normal mt-2 max-lg:text-sm '>{name}</p>
        <p className="max-lg:text-sm lg:text-sm lg:mt-3  font-light ">{job} </p>
        </div>
      
        </section>
   
    
  );
}