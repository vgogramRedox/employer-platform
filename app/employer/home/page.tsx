"use client"
import { BackgroundImage, Box, Container, Grid, Image, Portal } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { ProgressBar } from '@/app/components/Employer/ProgressBar';
import PrimaryButton from '@/app/components/Button';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';

import { isMobile } from 'react-device-detect';

import { UserContext } from '@/context/EmployerContext';
import { useRouter } from 'next/navigation';



function page() {
 
  const {setPostJobModalOpened}=useContext(UserContext)
const router=useRouter()

  return (

  
    <>
   
      
    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">
      <p className="leading-[1.2rem] text-dark lg:text-2xl  font-semibold mt-[3.19rem]">
        Welcome {isMobile? "back":""}, Vincent
      </p>
      <p className="leading-[1rem] text-dark font-normal text-[1rem] lg:font-light  max-lg:mt-5 text-start mt-10">
        Complete your profile
      </p>
      <div className="mt-5 relative ">
        <ProgressBar percent={40} className="w-[90%] max-lg:h-3 " />

        <p className="text-primary-blue lg:text-[1.25rem] absolute  font-bold left-[93%] bottom-[15%]"> 32%</p>
      </div>

      <Box className="lg:bg-sun-100 max-lg:bg-purple-100  max-lg:rounded lg:min-h-[14.375rem] flex max-lg:flex-col 
      lg:rounded
      mt-10 max-lg:p-0  ">

      <BackgroundImage src="/svgs/colorfulBgMobile.svg" className="ms-auto lg:hidden w-full h-10 rounded-t-lg ">
          {/* <Image src="/svgs/colorfulBgMobile.svg" className='h-[2.75931rem]'/> */}
        </BackgroundImage>
        <section className='max-lg:p-6 lg:ms-[2.7rem] lg:min-w-[24.625rem]'>
          <p className="leading-[1.2rem] text-dark  max-lg:text-[#070B25] lg:text-[2rem] font-semibold max-lg:mt-2 mt-[2.19rem] max-lg:text-2xl">
            Create your first job post
          </p>
          <p className="lg:leading-[1.37rem] max-lg:leading-[1rem] text-dark  text-[1rem] max-lg:text-[1rem] font-light  text-start lg:mt-5 max-lg:mt-2">
          
          {isMobile?"Find the best talent on Vgogram!":"Find the best talent on Vgogram, create your first job post"}  
          </p>
          <PrimaryButton
            variant="filled"
            fullWidth={false}
            onClick={()=>{
              setPostJobModalOpened(true)
            }}
            className="bg-primary-blue rounded-3xl mt-5 mb-6 lg:min-w-[10rem]"
            title={<>Post a Job</>}
          />
        </section>

        <section className="ms-auto max-lg:hidden">
          <Image src="/svgs/colorfulbg.svg" />
        </section>
      </Box>
      <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-[4.94rem] ">Explore Talent</p>
      <Box className="mt-5 mb-5 max-lg:mb-[25%] ">
        <div  className=" grid  lg:grid-cols-4 max-md:flex  max-md:overflow-x-scroll md:gap-x-6 md:grid-cols-3 max-lg:gap-4 lg:gap-4">
          <VidThumbNail className="/employer/jobs/1"
          onClick={()=>{
            router.push("/employer/jobs/1")
          }}
           />
          <VidThumbNail 
          onClick={()=>{
            router.push("/employer/jobs/1")
          }}
          name='Paul Williams' job='
          IT Officer'  thumbnailImg={"/svgs/et2.svg"} />
          <VidThumbNail 
          onClick={()=>{
            router.push("/employer/jobs/1")
          }}
          name="Henry Peter" thumbnailImg={"/svgs/et3.svg"} />
          <VidThumbNail
          onClick={()=>{
            router.push("/employer/jobs/1")
          }}
          name="Sarah David" thumbnailImg={"/svgs/et4.svg"} />
        </div>
      </Box>
    </Box>
    </>
  );
}

export default page;
