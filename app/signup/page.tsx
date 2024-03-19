"use client"
import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React, { useState } from 'react';
import Input from '../components/Input';
import CheckboxComp from '../components/Checkbox';
import PrimaryButton from '../components/Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import SignUpSelector from '../components/SignUpSelector';
import SignUp from '../components/SignUp';
import useIsMobile from '@/hooks/useIsMobile';
import { useRouter } from 'next/navigation';
const getStage=(stage:number)=>{
  switch(stage){
case 1:
  return<SignUpSelector/>

  case 2:
    return <SignUp/>

    default: return
  }
}

function page() {
  const [stage,setStage]=useState<number>(1)
  const isMobile=useIsMobile()
  // console.log(isMobile)
  const router=useRouter()


  return(

    <div className="flex min-h-screen">
      <Box component="aside" className="lg:min-w-[18.25rem]  max-md:hidden">
        <BackgroundImage src="images/sidebar.svg" className="min-h-[105%]"></BackgroundImage>
      </Box>

      <main className="w-full max-lg:p-3">
        <div className="mt-8 lg:ms-44 lg:w-[33%] max-lg:mx-auto  ">
        <section className='flex'>
            <IconChevronLeft className="lg:hidden max-lg:items-center max-lg:my-auto"
            onClick={()=>{
              stage==2?
              setStage(prev=>prev-1):router.push("/login")
            }}
            />
            <Image src="/svgs/darkLogo.svg"
          className='max-lg:items-center max-lg:mx-auto'
          w={93} h={93} />
          </section>
          
          <p className="leading-[1.2rem] mt-3 text-dark font-semibold  max-lg:hidden">Welcome back,</p>
          
          <p className={`leading-[3rem] mt-3 font-bold text-5xl max-lg:text-[1.2rem]  ${stage==1?"":"text-center"}`}>
            {stage==1?("What are you here for ?"):("Create an Employer Account")}
            </p>

{isMobile?(
<>
{getStage(stage)}
{
  stage==1?(<PrimaryButton title="Next" 
  onClick={()=>{
  setStage(2)
  }}
  className="bg-primary-blue  mt-24 mb-24" />):""
}

</>

):(
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
      <Image src="/svgs/googleIcon.svg" w={24} h={24} /> Sign Up With Google
    </div>
  }
  variant="Outline"
  className="text-primary-blue border mt-3
hover:bg-primary-blue transition hover:text-white
border-primary-blue bg-white "
/>
<PrimaryButton
  title={
    <div className="flex justify-center gap-x-3 items-center">Continue as Guest</div>
  }
  variant="Outline"
  className="text-primary-blue border mt-3
hover:bg-primary-blue transition hover:text-white
border-primary-blue bg-white  "
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

)}

          
        </div>
      </main>
    </div>
  )

}

export default page;
