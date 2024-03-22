"use client"
import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React, { useState } from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';


function page() {
  const[otp,setOtp]=useState<number|undefined>()
  return (
    <div className="flex min-h-screen">
      <Box component="aside" className="lg:min-w-[18.25rem]  max-md:hidden ">
        <BackgroundImage src="/svgs/sidebar.svg" className="min-h-[105%]"></BackgroundImage>
      </Box>

      <main className="w-full max-lg:p-3">
        <div className="mt-8 ms-44 lg:ms-44 max-lg:mx-auto">
        <section className='flex'>
            <IconChevronLeft className="lg:hidden max-lg:items-center max-lg:my-auto"/>
            <Image src="/svgs/darkLogo.svg"
          className='max-lg:items-center max-lg:mx-auto'
          w={93} h={93} />
          </section>
         

          <p className="leading-[1.2rem] font-bold  text-dark text-5xl mt-11       max-lg:text-[1.8rem] ">Reset password </p>
          <p className="leading-[1.75rem] text-dark-100 font-normal text-xl w-[38%] mt-10
          max-lg:text-[0.875rem] max-lg:w-full max-lg:leading-4 max-lg:mt-6
          ">Enter ypur new password to continue</p>

          <form action="" className="mt-8 p-2 w-[38%]
          max-lg:w-full max-lg:pb-40
          ">
        <Input label='New Password' placeholder='Enter your  new password'
    />
         <Input label='Re-enter New Password' placeholder='Re-Enter your  new password'
    />
    <PrimaryButton title="Re-enter New Password" className=' bg-primary-blue mt-10'/>
          </form>
        </div>
      </main>
    </div>
  );
}

export default page;
