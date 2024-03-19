'use client';
import { BadgeComp } from '@/app/components/BadgeComp';
import PrimaryButton from '@/app/components/Button';
import { Badge, Box, Group, Image, List, Paper, Text } from '@mantine/core';
import { IconArrowDownLeft } from '@tabler/icons-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

function page() {
  const params = useParams();
  console.log(params);
  const router=useRouter()
  return (<>
    
 
    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">
    
      <Paper
        shadow="xs"
      
        component="a"
        className={`$ w-full min-h-[8.9375rem] flex justify-evenly p-10 mt-5`}
        bg={'primary.10'}
        radius={'lg'}
      >
        <Group className="flex gap-y-2 relative w-[50%]">
          <Text className="font-bold text-5xl"> Product Designer</Text>
          <BadgeComp className='p-4 bg-sun-200 absolute  left-[65%] bottom-[70%] ' title={
   <Group className='  text-dark  ' flex={1}>
   <IconArrowDownLeft />
   <Text className=" text-2xl">23</Text>
 </Group>
}/>
        </Group>


       

        <Group>
          <PrimaryButton
          onClick={()=>{
            router.push("params/applications")
          }}
          title="View Applications" className='bg-primary-blue w-full min-w-[17.5rem]'/>
        </Group>
      </Paper>


      <section className='flex gap-x-4 mt-5'>
<BadgeComp title="Lagos" className='font-normal' size={'xl'}/>
<BadgeComp title="Remote" className='font-normal' size={'xl'}/>
<BadgeComp title="Lagos" className='font-normal' size={'xl'}/>



      </section>

      <Box className='lg:w-[80%] mt-10'>
      <Text className="font-bold text-lg"> Description:</Text>

        <Text>
        Lorem ipsum dolor sit amet consectetur. Tincidunt id magna commodo elementum in viverra eget. Massa bibendum sagittis dolor turpis turpis proin. Lorem tempor at elit cras eget velit elementum at senectus. Lectus purus gravida quis mauris. Semper odio morbi sagittis porta imperdiet magna ut. Sed orci quam hendrerit vitae arcu diam curabitur. Vestibulum quis mollis tincidunt.
        </Text>
      </Box>


      <Box className='lg:w-[80%] mt-10'>
      <Text className="font-bold text-lg"> Requirements:</Text>

       

        <List>
      <List.Item >Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
      </Box>

      <Box className='lg:w-[80%] mt-10'>
      <Text className="font-bold text-lg"> Skills:</Text>

        <Text>
        N15,000/h
        </Text>
      </Box>

      <section className='flex gap-x-4 mt-5'>
<BadgeComp title="Design" className='font-normal' size={'xl'}/>
<BadgeComp title="Figma" className='font-normal' size={'xl'}/>
<BadgeComp title="Lagos" className='font-normal' size={'xl'}/>



      </section>
      </Box>
      </>
 
  );
}

export default page;
