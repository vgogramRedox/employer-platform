"use client"
import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React, { useState } from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import OTPInput from 'react-otp-input';
import useIsMobile from '@/hooks/useIsMobile';

function page() {
  const[otp,setOtp]=useState<number|undefined>()
  const isMobile=useIsMobile()
  return (
    <div className="flex min-h-screen">
      <Box component="aside" className="lg:min-w-[18.25rem]  max-md:hidden ">
        <BackgroundImage src="/svgs/sidebar.svg" className="min-h-[105%]"></BackgroundImage>
      </Box>

      <main className="w-full max-lg:p-3">
        <div className="mt-8 lg:ms-44 ">
          <Image src="/svgs/darkLogo.svg" w={93} h={93} className='max-lg:items-center max-lg:mx-auto ' />
          <Image src="/gif/envelope-gif.gif" className='mt-3 max-lg:items-center max-lg:mx-auto ' w={103} h={93} />

          <p className=" font-bold  text-dark text-5xl mt-10 max-lg:text-[1.2rem] max-lg:text-center  ">Verify your  {
          isMobile?"account":"email"
          } </p>
         
            
            {
          isMobile? ( 
            <p className="leading-[1rem] text-dark-200 font-normal text-xl lg:w-[48%] mt-10 max-lg:w-full max-lg:text-[0.875rem] text-center">
            A code was sent to maryblessign@gmail.com, enter the code continue
            </p>

          )
          
          :

          <p className="leading-[1.75rem] text-dark-200 font-normal text-2xl w-[44%] mt-10 max-lg:w-full max-lg:text-[0.875rem] ">
           To verify your email we’ve sent a code to <br/> lolaoj@gmail.com. Enter the code to continue
          </p>
         
          }

          <form action="" className="mt-8 p-2 lg:w-[38%] max-lg:mx-auto max-lg:text-center max-lg:w-full ">
          <OTPInput
          //@ts-ignore
      value={otp}
      //@ts-ignore
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span className='p-2'>   </span>}
      renderInput={(props) => <input className='border border-grey-4 w-14 min-h-20 rounded'  />}
    />
       <PrimaryButton title="Continue" fullWidth={true} className='text-grey-5 bg-primary-blue-2 mt-10 max-lg:w-full text-center max-lg:mx-auto'/>
    
          </form>
       
        </div>
      </main>
    </div>
  );
}

export default page;
