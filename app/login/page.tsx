"use client"
import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

function page() {
  const router=useRouter()
  return (
    <div className="flex min-h-screen">
      <Box component="aside" className="lg:min-w-[18.25rem]  max-md:hidden">
        <BackgroundImage src="images/sidebar.svg" className="min-h-[105%]"></BackgroundImage>
      </Box>

      <main className="w-full max-lg:p-3">
        <div className="mt-8 lg:ms-44 lg:w-[33%] max-lg:mx-auto ">
          <Image src="/svgs/darkLogo.svg" w={93} h={93} className='max-lg:items-center max-lg:mx-auto' />
          <p className="leading-[1.2rem] mt-3 text-dark lg:text-2xl font-semibold">Welcome back,</p>
          <p className="leading-[3rem] mt-3 font-bold text-5xl max-lg:text-[1.5rem]">Log In to continue</p>

          <form action="" className="mt-10 p-2">
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Password" placeholder="Enter your password" />
            <p className="text-dark font-medium text-end cursor-pointer"
            onClick={()=>{
              router.push("/forgot-password")
            }}
            >Forgot Password ?</p>
            <CheckboxComp className='max-md:mt-5 cursor-pointer ' label="Remember me?" />

            <PrimaryButton title="Log In" className="bg-primary-blue  mt-10 border hover:border-primary-blue hover:bg-white focus:text-primary-blue hover:text-primary-blue" />
            <p className="text-dark font-medium text-lg text-center mt-3">Or</p>
            <PrimaryButton
              title={
                <div className="flex justify-center gap-x-3 items-center">
                  <Image src="/svgs/googleIcon.svg" w={24} h={24} /> Log In With Google
                </div>
              }
              variant="Outline"
              className="text-primary-blue border mt-3
hover:bg-primary-blue transition hover:text-white
border-primary-blue bg-white  "
            />
            <PrimaryButton
              title={
                <div className="flex justify-center gap-x-3 items-center">Continue as Guest</div>
              }
              variant="Outline"
              className="text-primary-blue border mt-3
hover:bg-primary-blue transition hover:text-white
border-primary-blue bg-white "
            />

            <p className="text-dark font-light text-center mt-5">
              Dont have an account?{' '}
              <Link href="/signup" className="font-bold">
                {' '}
                Sign Up
              </Link>{' '}
            </p>
          </form>

          <div className="mx-auto mt-10 mb-5  ">
            <Link href="" className="font-bold flex justify-center lg:ms-3 gap-x-2 max-lg:hidden ">
              {' '}
              <IconArrowLeft /> Back to homePage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
