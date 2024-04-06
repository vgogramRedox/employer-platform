
import { Button, Container, Image, rem, Text } from "@mantine/core";
import { VidThumbNailType } from "./VidThumbNail";
import { useState } from "react";

export const EmptyVidThumbNail=({bg,
    className,job,onClick

    
  }:VidThumbNailType) =>{
    // console.log(isMobile)
   
    return (
    
        <section  className="  " >
          
          <div className={`mx-auto text-center  lg:pt-[1.61rem] ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[98%] max-lg:full lg:gap-10 lg:min-h-[16.11313rem]  pt-3 ${className}  max-md:w-[11.42169rem] max-md:min-h-[12.08488rem] md:min-h-[16.11313rem]`}>
          <Container
          
            className="lg:max-w-[80%] lg:min-h-[9.23556rem] md:w-[80%]
            hover:cursor-pointer focus-within:cursor-pointer
            rounded-[0.625rem] max-md:w-[9.13731rem] max-md:h-[ 6.92669rem] md:min-h-[10.77906rem]
            h-[7.15rem]   min-h-[7.15rem] pt-1 max-lg:mt-[5%]  mx-auto  flex items-center justify-center bg-[#534747] max-lg:bg-[#00000033]"
          >
            {/* <Image src={"/svgs/thumbnail1.svg"} className=" " /> */}
           
            {/* <FileButton 
            
             onChange={setFile} >
                {(props)=> <Button 
               className="bg-[#B3ADAD] text-dark rounded-full absolute flex justify-center items-center text-lg w-14 h-14"
                {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 5V19M5 12H19" stroke="#303237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </Button>}
                  </FileButton> */}
 <Button 
 onClick={onClick}
              className="bg-[#B3ADAD] text-dark rounded-full l flex justify-center items-center text-lg w-14 h-14"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
 <path d="M12 5V19M5 12H19" stroke="#303237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               </Button>
              
          </Container>
          
          <p className=' text-dark lg:text-lg font-normal mt-2 max-lg:text-sm '>Add Video</p>
        
          </div>
        
          </section>
     
      
    );
  }