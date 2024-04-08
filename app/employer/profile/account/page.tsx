'use client';
import { UserContext } from '@/context/EmployerContext';
import SlideInAnimation from '@/context/Motion';
import { Box, Group, Image, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

function page() {
  const router = useRouter();
  const {setVerifyModalOpened,setConfirmLogoutModal } = useContext(UserContext);
  return (
    <Box>
      <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[5.7rem] flex items-center shadow">
        <Group className="max-lg:justify-between lg:hidden flex max-md:w-[100%] items-center">
          <IconChevronLeft
            className="text-3xl"
            onClick={() => {
              router.back();
            }}
          />
          <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">
          Account
          </Text>
          <IconChevronLeft className="text-3xl opacity-0" />
        </Group>
      </div>
      <Box className=" lg:hidden">
        <SlideInAnimation>
          <Box 
       
        onClick={()=>{
            router.push("/employer/teams")
        }}
       
          className="border-b  w-full flex items-center max-lg:pb-3 cursor-pointer ps-3 pe-3 min-h-[4.18rem]">
            <div  className="flex justify-between  items-center   font-light lg:text-lg text-black w-full">
            <Box className="flex gap-x-3 text-[1rem] items-center">
            <Image src="/svgs/userGroupMobile.svg"/>
              Team Management  
                </Box> 

                <IconChevronRight className="cursor-pointer " />
            </div>
          </Box>
        </SlideInAnimation>

        <SlideInAnimation>
          <Box 
        onClick={()=>{
            setVerifyModalOpened(true)
        }}
          className="border-b  w-full flex items-center max-lg:pb-3 cursor-pointer ps-3 pe-3 min-h-[4.18rem]">
            <div className="flex justify-between  items-center   font-light lg:text-lg text-black w-full">
            <Box className="flex gap-x-3 text-[1rem] items-center">
            <Image src="/svgs/checkMobile.svg"/>
             Account Verification 
                </Box>
                 <IconChevronRight className="cursor-pointer " />
            </div>
          </Box>
        </SlideInAnimation>

        <SlideInAnimation>
          <Box 
            onClick={()=>{
                router.push("/employer/settings")
            }}
          className="border-b  w-full flex items-center max-lg:pb-3 cursor-pointer ps-3 pe-3 min-h-[4.18rem]">
            <div className="flex justify-between  items-center   font-light lg:text-lg text-black w-full ">
            <Box className="flex gap-x-3 text-[1rem] items-center">
            <Image src="/svgs/settingsMobile.svg"/>
              Settings  
                </Box> 
                <IconChevronRight className="cursor-pointer " />
            </div>
          </Box>
        </SlideInAnimation>

        <SlideInAnimation>
          <Box
           onClick={()=>{
            router.push("/help-support")
        }}
          className="border-b  w-full flex items-center max-lg:pb-3 cursor-pointer ps-3 pe-3 min-h-[4.18rem]">
            <div className="flex justify-between  items-center   font-light lg:text-lg text-black w-full  ">
            <Box className="flex gap-x-3 text-[1rem] items-center">
            <Image src="/svgs/headphonesMobile.svg"/>
              Help & Support  
                </Box> <IconChevronRight className="cursor-pointer " />
            </div>
          </Box>
        </SlideInAnimation>

        <SlideInAnimation>
          <Box
            onClick={()=>{
                setConfirmLogoutModal(true)
            }}
          className="border-b  w-full flex items-center max-lg:pb-3 cursor-pointer ps-3 pe-3 min-h-[4.18rem]">
            <div className="flex justify-between  items-center   font-light lg:text-lg text-black w-full ">
            <Box className="flex gap-x-3 text-[1rem] items-center">
            <Image src="/svgs/logout.svg"/>
            Logout
                </Box> <IconChevronRight className="cursor-pointer " />
            </div>
          </Box>
        </SlideInAnimation>

       
      </Box>
    </Box>
  );
}

export default page;
