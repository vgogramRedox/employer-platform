"use client"
import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React, { useState } from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import OTPInput from 'react-otp-input';

function page() {
  const[otp,setOtp]=useState<number|undefined>()
  return (
    <div className="flex min-h-screen">
      <Box component="aside" className="lg:min-w-[18.25rem] ">
        <BackgroundImage src="images/sidebar.svg" className="min-h-[105%]"></BackgroundImage>
      </Box>

      <main className="w-full">
        <div className="mt-8 ms-44 ">
          <Image src="/images/darkLogo.svg" w={93} h={93} />
          <Image src="/gif/envelope-gif.gif" className='mt-3' w={103} h={93} />

          <p className="leading-[1.2rem] font-bold  text-dark text-5xl mt-10">Verify your email </p>
          <p className="leading-[1/75rem] text-dark-100 font-normal text-xl w-[38%] mt-10">To verify your email we’ve sent a code to lolaoj@gmail.com. Enter the code to continue</p>

          <form action="" className="mt-8 p-2 w-[38%]">
          <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span className='p-2'>   </span>}
      renderInput={(props) => <input className='border border-grey-4 w-14 min-h-20 rounded'  />}
    />
    <PrimaryButton title="Continue" className='text-grey-5 bg-primary-blue-2 mt-10'/>
          </form>
        </div>
      </main>
    </div>
  );
}

export default page;
