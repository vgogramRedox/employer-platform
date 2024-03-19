import React from 'react'
import { ActionIcon, Box, Button, FileInput, Group, Image, TextInput, Title, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderMenu } from './Navbar';
import { useInputState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { theme } from '@/theme/app';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx'
import classes from '@/styles/Demo.module.css'
import Link from 'next/link';
import PrimaryButton from './Button';
import Demo from './Carousel';
import { useRouter } from 'next/navigation';

export default function MobileLanding() {
    const images=["/svgs/mobileLand.svg","/svgs/mobileLand2.svg","/svgs/mobileLand3.svg"]
    const router=useRouter()
    return (
        <div className=" ">
        <Box  className=" p-[1.25rem]">
        
      <Demo slideItems={images} />
         
        <main className="">
          <div className="mt-8 text-center  ">
            
           
            <p className="leading-[3rem] mt-3 font-bold text-2xl">Find the right talent</p>
            <p className='text-black font-normal leading-[1.37rem] text-sm'>Lorem ipsum dolor sit amet consectetur.
             </p>
             <p className='text-black font-normal leading-[1.37rem] text-sm'> Feugiat elit mi iaculis.</p>
    
            <section  className="mt-10 p-2">
             
             
    
              <PrimaryButton title="Get Started" 
                onClick={()=>{
                  router.push("/signup")
                }}
              className="bg-primary-blue  mt-10" />
              
              <PrimaryButton
              onClick={()=>{
                router.push("/login")
              }}
                title={
                  <div className="flex justify-center gap-x-3 items-center">
                   Log In
                  </div>
                }
                variant="Outline"
                className="text-primary-blue border mt-3
    hover:bg-primary-blue transition hover:text-white
    border-primary-blue  "
              />
             
    
            
            </section>
    
          </div>
        </main>
        </Box>
      </div>
      );
}

