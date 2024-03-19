"use client"
import React from 'react'
import {Box, Divider, Group, Image, Paper, Text} from '@mantine/core'
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail'
import PrimaryButton from '@/app/components/Button'
import { IconBookmark, IconMail, IconMapPin } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { IconChevronLeft } from '@tabler/icons-react'
function page() {
  const router=useRouter()
    return (
    
        <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg  mb-5">
    
    <div className='max-lg:border-b shadow '>
      <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center max-lg:p-4">
        <IconChevronLeft
        className='text-3xl'
          onClick={() => {
            router.back();
          }}
        />
        <Text className=" text-dark text-lg  font-semibold   ">
          Applications
        </Text>
        <IconChevronLeft
        className='text-3xl opacity-0'
          
        />
      </Group>
      </div>
       <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-10  max-lg:hidden">Applications</p>
          <Box className="mt-20 mb-5">
            <div  className=" lg:max-w-[23.5rem] ">
              <VidThumbNail />
              
             
            </div>
          </Box>
    
    
    <Divider/>
    
    <div className='mt-3.5 max-lg:p-4'>
    <Box className='flex items-center gap-x-8 max-lg:gap-x-4'>
 <Image src="/images/person.svg" className='min-w-[8.6rem] max-lg:w-[7.6rem] min-h-[8.6rem]'/>
 <PrimaryButton
 onClick={()=>{
  router.push("/employer/jobs/1")
 }}
 className='bg-primary-blue lg:w-1/4  max-lg:text-sm max-lg:rounded-xl max-lg:font-light max-lg:h-6 ' title=" View Profile"/>
    </Box>
<div className='flex gap-x-4 items-center'>

<Box className=' flex-col gap-y-4'>

<Text className='font-bold text-lg'>
Tolu Ogunnipe
</Text>
<Text className='text-sm font-light'>
  Product Designer
</Text>
<Text className='text- flex gap-x-2 font-light'>
 <IconMapPin/> Lagos,Nigeria
</Text>
    </Box>

    <Box className='gap-2 flex'>

<IconMail className='rounded-full p-2 border w-14 h-14 '  />

<IconBookmark className='rounded-full p-2 border w-14 h-14 '/>
    </Box>
</div>
    
    </div>
   <div className='max-lg:p-4'>
          
    <Paper shadow="xs"  bg={'primary.10'} className="lg:w-[25.5rem] max-lg:w-full min-h-[14.125rem] mt-5 mb-[30%]">
      <Text className='font-bold  border-b text-center'>Education</Text>

      <Box className='flex gap-x-3 p-7 '>
      <Image src="/images/graduateCap.svg" className='w-10 h-10'/>
      <Box>
        <Text component='h1'>B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light m'>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>
      
      
    </Paper>
    </div>
          </Box>
     
      )
}

export default page