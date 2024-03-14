import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

function page() {
  return (
    <div className="flex min-h-screen">
      <Box component="aside" className="lg:min-w-[18.25rem] ">
        <BackgroundImage src="images/sidebar.svg" className="min-h-[105%]"></BackgroundImage>
      </Box>

      <main className="w-full">
        <div className="mt-8 ms-44 w-[33%]">
          <Image src="/images/darkLogo.svg" w={93} h={93} />
          <p className="leading-[1.2rem] mt-3 text-dark font-semibold">Welcome back,</p>
          <p className="leading-[3rem] mt-3 font-bold text-5xl">Log In to continue</p>

          <form action="" className="mt-10 p-2">
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Password" placeholder="Enter your password" />
            <p className="text-dark font-medium text-end">Forgot Password ?</p>
            <CheckboxComp label="Remember me?" />

            <PrimaryButton title="Log In" className="bg-primary-blue  mt-10" />
            <p className="text-dark font-medium text-lg text-center mt-3">Or</p>
            <PrimaryButton
              title={
                <div className="flex justify-center gap-x-3 items-center">
                  <Image src="/images/googleIcon.svg" w={24} h={24} /> Log In With Google
                </div>
              }
              variant="Outline"
              className="text-primary-blue border mt-3
hover:bg-primary-blue transition hover:text-white
border-primary-blue  "
            />
            <PrimaryButton
              title={
                <div className="flex justify-center gap-x-3 items-center">Continue as Guest</div>
              }
              variant="Outline"
              className="text-primary-blue border mt-3
hover:bg-primary-blue transition hover:text-white
border-primary-blue  "
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
            <Link href="" className="font-bold flex justify-center lg:ms-3 gap-x-2">
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
