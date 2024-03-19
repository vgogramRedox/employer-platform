"use client"
import React from 'react'
import {Box, Divider, Image, Paper, Text} from '@mantine/core'
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail'
import PrimaryButton from '@/app/components/Button'
import { IconBookmark, IconMail, IconMapPin } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
function page() {
  const router=useRouter()
    return (
    
        <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4 mb-5">
    
       <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-10 ">Applications</p>
          <Box className="mt-20 mb-5">
            <div  className=" lg:max-w-[23.5rem] ">
              <VidThumbNail />
              
             
            </div>
          </Box>
    
    
    <Divider/>
    
    <div className='mt-3.5'>
    <Box className='flex items-center gap-x-8'>
 <Image src="/images/person.svg" className='w-[8.6rem] h-[8.6rem]'/>
 <PrimaryButton
 onClick={()=>{
  router.push("/employer/jobs/1")
 }}
 className='bg-primary-blue w-1/4' title=" View Profile"/>
    </Box>
<div className='flex gap-x-4 items-center'>

<Box className=' flex-col gap-y-4'>

<Text className='font-bold text-lg'>
Tolu Ogunnipe
</Text>
<Text className='text-sm'>
  Product Designer
</Text>
<Text className='text- flex gap-x-2'>
 <IconMapPin/> Lagos,Nigeria
</Text>
    </Box>

    <Box className='gap-2 flex'>

<IconMail className='rounded-full p-2 border w-14 h-14 '  />

<IconBookmark className='rounded-full p-2 border w-14 h-14 '/>
    </Box>
</div>
    
    </div>
   
          
    <Paper shadow="xs" p="xl" bg={'primary.10'} className="w-[18.5rem] min-h-[14.125rem] mt-5">
      <Text className='font-bold  border-b text-center'>Education</Text>

      <Box className='flex gap-x-1'>
      <Image src="/images/graduateCap.svg" className='w-6 h-6'/>
      <Box>
        <Text component='h1'>B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light'>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>
      
      
    </Paper>
          </Box>
     
      )
}

export default page