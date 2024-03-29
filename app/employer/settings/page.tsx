"use client"
import { Box, Text } from '@mantine/core'
import React from 'react'
import Tab from '@/app/components/Tab'
import SettingsTabs from '@/app/components/settings/SettingsTabs'
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav'

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
  return (
    <Box  className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">

      <BreadCrumbsNav items={links} className="lg:mt-20 " />
       

        <Box className='border rounded border-grey-8 min-h-screen  mt-5'>
      <Text className='text-dark-100 text-2xl font-bold lg:p-10'>Settings</Text>
<SettingsTabs className="mt-6"/>
</Box>
  
  </Box>
  )
}

export default page