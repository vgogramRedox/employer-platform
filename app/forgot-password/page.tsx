"use client"
import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React, { useState } from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';


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
       

          <p className="leading-[1.2rem] font-bold  text-dark text-5xl mt-11">Forgot password </p>
          <p className="leading-[1/75rem] text-dark-100 font-normal text-xl w-[38%] mt-10">Kindly enter the email that you used when creating your account and we will send you a reset code to recover your password</p>

          <form action="" className="mt-8 p-2 w-[38%]">
        <Input label='Email' placeholder='Enter your email'
    />
    <PrimaryButton title="Reset Password" className=' bg-primary-blue-2 mt-10'/>
          </form>
        </div>
      </main>
    </div>
  );
}

export default page;
