'use client';
import { BackgroundImage, Box, Container, Grid, Group, Image, Portal, Text } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { ProgressBar } from '@/app/components/Employer/ProgressBar';
import PrimaryButton from '@/app/components/Button';


import { UserContext } from '@/context/EmployerContext';
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav';
import TableComp from '@/app/components/Employer/TableComp';
import { IconChevronLeft } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
const links = [
  {
    title: 'Account',
    href: '/employer/account',
  },
  {
    title: 'Teams',
    href: '/employer/teams',
  },
];
const elements = [
  {id:1,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
  {id:2,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
  {id:3,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
  {id:4,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
  {id:5,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
  {id:6,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
  {id:7,
    email:"uveghobamien@gmail.com", name:"vincent",status:"active",accessLevel:"administrator"
  },
];
function page() {
  
 
 const {appState,setAppState, setAddUserModalOpened} = useContext(UserContext);
 const breakpoint = useMediaQuery('(min-width: 56.25em)');
 const router=useRouter()
  return (
    <>
      <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg ">

      <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[5.7rem] flex items-center shadow">
                <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
                  <IconChevronLeft className="text-3xl" onClick={()=>{
                    router.back()
                  }} />
                  <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">Verify Your Account</Text>
                  <IconChevronLeft className="text-3xl opacity-0" />
                </Group>
              </div>
              <Box className=''>
        <Box className="mt-5 flex items-center max-lg:justify-end max-lg:p-4">
          <BreadCrumbsNav items={links} />
          <PrimaryButton
          onClick={()=>{
            setAppState({
              ...appState,
              addUser_mode: 'add',
           
            });
            setAddUserModalOpened(true)
          }}
          p= {!breakpoint?'':''}
            fullWidth={false}
            className="bg-primary-blue text-sm lg:min-w-[10.4rem] max-lg:min-h-7 max-lg:bg-white max-lg:w-[7.7rem] max-lg:text-primary-blue border-primary-blue max-lg:border max-lg:rounded-full max-lg:text-sm max-lg:px-2 "
            title={
              <Box className="flex gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className='max-lg:hidden'
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <svg className='lg:hidden' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0003 4.16602V15.8327M4.16699 9.99935H15.8337" stroke="#3B4BC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <Text> Add User </Text>
              </Box>
            }
          />
        </Box>
       
        <p className="leading-[1.2rem] text-[#515151] lg:text-2xl max-lg:text-lg font-bold lg:mt-5 max-lg:border-b max-lg:ps-4 ">
       {breakpoint?"Team management":"Users"}   
        </p>

        <Box>
          <TableComp elements={elements} className="lg:mt-9" />
        </Box>
        </Box>
      </Box>
    </>
  );
}

export default page;
