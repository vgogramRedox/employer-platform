
import { Button, Container, Image, rem, Text } from "@mantine/core";
import { VidThumbNailType } from "./VidThumbNail";
import { useState } from "react";

export const EmptyVidThumbNail=({bg,
    className,job,onClick

    
  }:VidThumbNailType) =>{
    // console.log(isMobile)
   
    return (
    
        <section  className=" lg:max-w-[90%] max-lg:w-full" >
          
          <div className={`mx-auto text-center  lg:pt-10 ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:w-[10rem] lg:gap-10 lg:min-h-[16.11313rem] flex-shrink  pt-3 ${className}`}>
          <Container
          
            className="lg:max-w-[80%] lg:h-[8rem] bg-[#534747] max-lg:bg-[#00000033]
            hover:cursor-pointer focus-within:cursor-pointer
            h-[7.15rem] max-lg:w-[80%]  min-h-[7.15rem] pt-1  mx-auto rounded-lg  flex items-center justify-center"
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
              className="bg-[#B3ADAD] text-dark rounded-full absolute flex justify-center items-center text-lg w-14 h-14"
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