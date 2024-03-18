import { BackgroundImage, Box, Container, Grid, Image } from '@mantine/core';
import React from 'react';
import { ProgressBar } from '../components/Employer/ProgressBar';
import PrimaryButton from '../components/Button';
import { VidThumbNail } from '../components/Employer/VidThumbNail';
import AblyPubSub from '../components/Employer/chat';
import { isMobile } from 'react-device-detect';

function page() {
  return (
    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">
      <p className="leading-[1.2rem] text-dark lg:text-2xl  font-semibold mt-20">
        Welcome {isMobile? "back":""}, Vincent
      </p>
      <p className="leading-[1rem] text-dark font-normal text-lg  max-lg:mt-5 text-start mt-10">
        Complete your profile
      </p>
      <div className="mt-5 relative ">
        <ProgressBar percent={40} className="w-[90%] max-lg:h-3 " />

        <p className="text-primary-blue lg:text-5xl absolute  font-bold left-[93%] bottom-[15%]"> 32%</p>
      </div>

      <Box className="lg:bg-sun-100 max-lg:bg-purple-100  max-lg:rounded lg:min-h-[14.375rem] flex max-lg:flex-col mt-10 max-lg:p-0 lg:p-4 ps-8 ">

      <BackgroundImage src="/images/colorfulBgMobile.svg" className="ms-auto lg:hidden w-full h-10 rounded-t-lg">
          {/* <Image src="/images/colorfulBgMobile.svg" className='h-[2.75931rem]'/> */}
        </BackgroundImage>
        <section className='max-lg:p-6'>
          <p className="leading-[1.2rem] text-dark  max-lg:text-[#070B25] lg:text-5xl font-semibold max-lg:mt-2 mt-20 max-lg:text-2xl">
            Create your first job post
          </p>
          <p className="leading-[1rem] text-dark font-normal text-[1rem] max-lg:text-sm  text-start lg:mt-10 max-lg:mt-2">
          
          {isMobile?"Find the best talent on Vgogram!":"Find the best talent on Vgogram, create your first job post"}  
          </p>
          <PrimaryButton
            variant="filled"
            fullWidth={false}
            className="bg-primary-blue rounded-3xl mt-5 mb-6"
            title={<>Post a Job</>}
          />
        </section>

        <section className="ms-auto max-lg:hidden">
          <Image src="/images/colorfulbg.svg" />
        </section>
      </Box>
      <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-10 ">Explore Talent</p>
      <Box className="mt-20">
        <div  className=" grid  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
        </div>
      </Box>
    </Box>
  );
}

export default page;
