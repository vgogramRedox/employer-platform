"use client"
import { Box, Group, Text } from '@mantine/core'
import React from 'react'
import Tab from '@/app/components/Tab'
import SettingsTabs from '@/app/components/settings/SettingsTabs'
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav'
import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@mantine/hooks'

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
      const [settingsTab,setSettingsTab]=useLocalStorage({
        key:"settingsTab",
       
          })
      
  return (
    <Box  className={`lg:w-[90%]   max-lg:w-full mx-auto max-lg:text-lg` }>

      <BreadCrumbsNav items={links} className="lg:mt-20 " />
       

        <Box className={` min-h-screen mt-5 `}>
      <Text className='text-dark-100 text-2xl font-bold lg:p-10 max-lg:hidden'>Settings</Text>
      <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[4rem] flex items-end shadow">
                <Group className="max-lg:justify-between lg:hidden flex max-lg:w-[100%] items-end">
                  <IconChevronLeft className="text-3xl" onClick={()=>{
                    router.back()
                  }} />
                  <Text className="  text-lg  font-semibold  max-lg:text-[1rem] text-[#303237]  ">Settings</Text>
                  <IconChevronLeft className="text-3xl opacity-0" />
                </Group>
              </div>
<SettingsTabs className="mt-6 lg:mt-0 max-lg:mx-auto max-lg:p-4" />
</Box>
  
  </Box>
  )
}

export default page