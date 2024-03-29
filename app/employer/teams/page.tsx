'use client';
import { BackgroundImage, Box, Container, Grid, Image, Portal, Text } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { ProgressBar } from '@/app/components/Employer/ProgressBar';
import PrimaryButton from '@/app/components/Button';


import { UserContext } from '@/context/EmployerContext';
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav';
import TableComp from '@/app/components/Employer/TableComp';

function page() {
  
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
 const {addUserModalOpened, setAddUserModalOpened} = useContext(UserContext);
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
  return (
    <>
      <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">
        <Box className="mt-5 flex items-center">
          <BreadCrumbsNav items={links} />
          <PrimaryButton
          onClick={()=>{
            setAddUserModalOpened(true)
          }}
            fullWidth={false}
            className="bg-primary-blue text-sm min-w-[10.4rem] "
            title={
              <Box className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Text> Add User </Text>
              </Box>
            }
          />
        </Box>

        <p className="leading-[1.2rem] text-[#515151] lg:text-2xl  font-bold mt-5">
          Team Management
        </p>

        <Box>
          <TableComp elements={elements} />
        </Box>
      </Box>
    </>
  );
}

export default page;
