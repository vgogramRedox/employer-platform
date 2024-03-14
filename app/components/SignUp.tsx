import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import SignUpSelector from '../components/SignUpSelector';


function SignUp() {
  return (
    <form action="" className="mt-10 p-2 max-md:mt-5">
    <Input label="Company Name" placeholder="Enter company name" />
    <Input label="Email" placeholder="Enter your email" />
    <Input label="Password" placeholder="Enter your password" />

    <CheckboxComp className='max-md:mt-5 lg:hidden ' label={
      <p className='font-light text-[0.61rem] my-auto  leading-[0.8rem]  text-dark'>
        I agree with Vgogram’s <Link href="" className='font-bold'>terms of service </Link> and <Link href="" className='font-bold'> privacy policy 
        </Link>
        
      </p>
    } />
    <PrimaryButton title="Sign Up" className="bg-primary-blue  mt-10" />
    <p className="text-dark font-medium text-lg text-center mt-3">Or</p>
    <PrimaryButton
      title={
        <div className="flex justify-center gap-x-3 items-center">
          <Image src="/images/googleIcon.svg" w={24} h={24} /> Sign Up With Google
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
      Already have an account?{' '}
      <Link href="/login" className="font-bold">
        {' '}
        Sign In
      </Link>{' '}
    </p>

    <div className="mx-auto mt-10 mb-5   ">
      <Link href="" className="font-bold flex justify-center lg:ms-3 gap-x-2 max-lg:hidden">
        {' '}
        <IconArrowLeft /> Back to homePage
      </Link>
    </div>
  </form>
  );
}

export default SignUp;