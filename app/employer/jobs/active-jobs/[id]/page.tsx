'use client';
import { BadgeComp } from '@/app/components/BadgeComp';
import PrimaryButton from '@/app/components/Button';
import { Badge, Box, Group, Image, List, Paper, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { IconArrowDownLeft } from '@tabler/icons-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

function page() {
  const params = useParams();
  // console.log(params);
  const router = useRouter();
  return (
    <>
      <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg md:p-4 lg:p-0">
        <Paper
          shadow="xs"
          component="a"
          className={`$ w-full min-h-[8.9375rem] max-md:p-4 flex justify-evenly md:p-10 mt-5 max-md:rounded-none md:rounded-lg`}
          bg={'primary.10'}
        >
          <Group className="flex max-md:block gap-y-2 relative lg:w-[50%] max-lg:w-full max-lg:text-sm">
            <Group className="max-md:justify-between max-lg:hidden flex">
              <IconChevronLeft  onClick={()=>{
                router.back()
              }}/>
              <BadgeComp
                className=" bg-sun-200 absolute  left-[65%] bottom-[70%] "
                title={
                  <Group className="  text-dark  " flex={1}>
                    <IconArrowDownLeft />
                    <Text className=" text-2xl">23</Text>
                  </Group>
                }
              />
            </Group>

            <Text className="font-bold  max-lg:text-xl text-5xl max-md:mt-5"> Product Designer</Text>
            <BadgeComp
            p={'0'}
              className=" bg-sun-200 absolute  w-20 h-8 left-[65%] bottom-[83.5%] "
              title={
                <Box className="  text-dark max-md:text-lg items-center justify-center flex">
                  <IconArrowDownLeft  className='w-6 h-6'/>
                  <Text className=" text-[1rem] max-md:text-lg">23</Text>
                </Box>
              }
            />
          </Group>

          <Group className="max-md:hidden">
            <PrimaryButton
              onClick={() => {
                router.push('params/applications');
              }}
              title="View Applications"
              className="bg-primary-blue md:text-lg lg:w-full lg:min-w-[17.5rem]"
            />
          </Group>
        </Paper>

        <section className="flex gap-x-4 mt-5 max-md:p-4 ">
          <BadgeComp title="Lagos" className="font-normal max-lg:text-[1rem] max-lg:bg-[#E0E7EB] max-lg:text-dark" size={'xl'} />
          <BadgeComp title="Remote" className="font-normal max-lg:text-[1rem] max-lg:bg-[#E0E7EB] max-lg:text-dark" size={'xl'} />
          <BadgeComp title="Lagos" className="font-normal max-lg:text-[1rem] max-lg:bg-[#E0E7EB] max-lg:text-dark" size={'xl'} />
        </section>

        <Box className="lg:w-[80%] mt-10 max-md:p-4 ">
          <Text className="font-bold text-lg"> Description:</Text>

          <Text className='font-light'>
            Lorem ipsum dolor sit amet consectetur. Tincidunt id magna commodo elementum in viverra
            eget. Massa bibendum sagittis dolor turpis turpis proin. Lorem tempor at elit cras eget
            velit elementum at senectus. Lectus purus gravida quis mauris. Semper odio morbi
            sagittis porta imperdiet magna ut. Sed orci quam hendrerit vitae arcu diam curabitur.
            Vestibulum quis mollis tincidunt.
          </Text>
        </Box>

        <Box className="lg:w-[80%] mt-10 max-md:p-4 lg:text-lg ">
          <Text className="font-bold  text-xl"> Requirements:</Text>

          <List className='font-light'>
            <List.Item className='mb-3'><span className=''>1.</span> Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
           <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Box>

        <Box className="lg:w-[80%] mt-10 max-md:p-4 ">
          <Text className="font-bold text-lg"> Renumerations:</Text>

          <Text>N15,000/h</Text>
          <Text className="font-bold text-lg mt-5"> Skills:</Text>
        </Box>
        
        <section className="flex gap-x-4 mt-2 max-md:p-4  ">
          <BadgeComp title="Design" className="font-normal max-lg:text-[1rem] max-lg:bg-[#E0E7EB] max-lg:text-dark" size={'xl'} />
          <BadgeComp title="Figma" className="font-normal max-lg:text-[1rem] max-lg:bg-[#E0E7EB] max-lg:text-dark" size={'xl'} />
          <BadgeComp title="Lagos" className="font-normal max-lg:text-[1rem] max-lg:bg-[#E0E7EB] max-lg:text-dark" size={'xl'} />
        </section>

        <Group className="md:hidden max-md:mb-[50%] max-md:p-4">
            <PrimaryButton
              onClick={() => {
                router.push('params/applications');
              }}
              title="View Applications"
              className="bg-primary-blue md:text-lg lg:w-full lg:min-w-[17.5rem]"
            />
          </Group>
      </Box>
    </>
  );
}

export default page;
