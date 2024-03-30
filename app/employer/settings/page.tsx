"use client"
import { Box, Group, Text } from '@mantine/core'
import React from 'react'
import Tab from '@/app/components/Tab'
import SettingsTabs from '@/app/components/settings/SettingsTabs'
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav'
import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

function page() {
    const links = [
        {
          title: 'Account',
          href: '/employer/account',
        },
        {
          title: 'settings',
          href: '/employer/settings',
        },
      ];
      const router=useRouter()
  return (
    <Box  className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg ">

      <BreadCrumbsNav items={links} className="lg:mt-20 " />
       

        <Box className='lg:border rounded lg:border-grey-8  min-h-screen mt-5 '>
      <Text className='text-dark-100 text-2xl font-bold lg:p-10 max-lg:hidden'>Settings</Text>
      <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[5.7rem] flex items-center shadow">
                <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
                  <IconChevronLeft className="text-3xl" onClick={()=>{
                    router.back()
                  }} />
                  <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">Settings</Text>
                  <IconChevronLeft className="text-3xl opacity-0" />
                </Group>
              </div>
<SettingsTabs className="mt-6 max-lg:mx-auto max-lg:p-4" />
</Box>
  
  </Box>
  )
}

export default page