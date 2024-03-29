import { Box, Group, Switch, Text } from '@mantine/core'
import React, { useState } from 'react'
import SelectComp from '../Edit/SelectComp'
import SlideInAnimation from '@/context/Motion'
import PrimaryButton from '../Button'
import TableCompSettings from './TableCompSettings'

function SecurityTab() {

const [checked,setChecked]=useState<boolean>()
    
const elements=[
    {
        id: 1,
      
        device: "Chrome,windows",
        dateLoggedIn: "16/05/2023",
        IPAddress: "105.112.121.62 Manchester"
      
      },

      {
        id: 2,
      
        device: "Chrome,windows",
        dateLoggedIn: "16/05/2023",
        IPAddress: "105.112.121.62 Manchester"
      
      },

      {
        id: 3,
      
        device: "Chrome,windows",
        dateLoggedIn: "16/05/2023",
        IPAddress: "105.112.121.62 Manchester"
      
      },
]

  return (
   <Box>
    <SlideInAnimation>
    <Box className='border-t border-b rounded-lg '>
<Text className="border-b  text-[1.2rem] text-dark font-normal mb-5 lg:ps-10 min-h-[4rem] flex items-center">
Password
</Text>
<Box className="flex justify-between min-h-[6.3rem] items-center">
    <Text className='text-dark lg:ps-10 '>*********</Text>

    <PrimaryButton 
    fullWidth={false}
    className='bg-white text-dark border-dark rounded border-1 hover:bg-black hover:text-white me-5' title={
    <Text className=' text-[1rem] font-normal'>
    Change Password
    </Text>
    }
    />
</Box>


   </Box>

   </SlideInAnimation>

   <SlideInAnimation>
    <Box className='border-t border-b rounded-lg '>
<Text className="border-b  text-[1.2rem] text-dark font-normal mb-5 lg:ps-10 min-h-[4rem] flex items-center">
Devices
</Text>
<Box className=" min-h-[6.3rem] ">
    <Text className='text-dark lg:ps-10 font-light mb-10 '>You are currently logged into Emdo on these devices</Text>

   <TableCompSettings elements={elements}/>
   
</Box>


   </Box>

   </SlideInAnimation>
   </Box>
  )
}

export default SecurityTab