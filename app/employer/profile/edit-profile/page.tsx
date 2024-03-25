'use client';
import React, { useState } from 'react';
import { Box, Divider, Group, Image, Paper, Tabs, Text } from '@mantine/core';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';
import PrimaryButton from '@/app/components/Button';
import { IconBookmark, IconMail, IconMapPin } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { IconChevronLeft } from '@tabler/icons-react';
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav';
import OrganizationalInfo from '@/app/components/Edit/OrganizationalInfo';
import PersonalInfo from '@/app/components/Edit/PersonalInfo';
function page() {
  const router = useRouter();
  const links = [
    {
      title: 'Profile',
      href: '/employer/profile',
    },
    {
      title: 'Edit Profile',
      href: '/employer/profile/edit-profile',
    },
  ];
  const [activeTab, setActiveTab] = useState<string | null>('personalInfo');
  return (
    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg  mb-5">
      <Box className="mt-[2%]">
        <BreadCrumbsNav items={links} />
      </Box>
      <div className="max-lg:border-b shadow ">
        <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center max-lg:p-4">
          <IconChevronLeft
            className="text-3xl"
            onClick={() => {
              router.back();
            }}
          />
          <Text className=" text-dark text-lg  font-semibold   ">Applications</Text>
          <IconChevronLeft className="text-3xl opacity-0" />
        </Group>
      </div>
      <Text className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-10  max-lg:hidden">
        Edit Info
      </Text>
      <Tabs
        value={activeTab}
        h={20}
        onChange={setActiveTab}
        color="primary"
        className="max-lg:text-sm"
      >
        <Tabs.List className="lg:min-w-[31rem] lg:w-[33rem] lg:max-w-[100%] max-md:min-w-full md:w-[90%] mb-10">
          <Tabs.Tab
            value="personalInfo"
            className={` lg:text-xl  lg:min-w-[10.46319rem] ${
              activeTab == 'active' ? 'text-primary-blue ' : 'text-grey-3'
            }`}
          >
          Personal Info 
          </Tabs.Tab>
          <Tabs.Tab
            value="organizationInfo"
            className={`lg:text-xl  lg:min-w-[10.46319rem] ${
              activeTab == 'completed' ? 'text-primary-blue ' : 'text-grey-3'
            }`}
          >
            Organization Info
          </Tabs.Tab>
         
        </Tabs.List>

        <Tabs.Panel value="personalInfo" className="w-full ">
         <PersonalInfo/>
        </Tabs.Panel>

        <Tabs.Panel value="organizationInfo">
      <OrganizationalInfo/>
        </Tabs.Panel>

       
      </Tabs>

    

      
    </Box>
  );
}

export default page;
