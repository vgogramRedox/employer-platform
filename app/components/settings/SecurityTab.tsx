import { Box, Group, Switch, Text } from '@mantine/core'
import React, { useContext, useState } from 'react'
import SelectComp from '../Edit/SelectComp'
import SlideInAnimation from '@/context/Motion'
import PrimaryButton from '../Button'
import TableCompSettings from './TableCompSettings'
import { useMediaQuery } from '@mantine/hooks'
import { UserContext } from '@/context/EmployerContext'

function SecurityTab() {

const [checked,setChecked]=useState<boolean>()
const breakpoint = useMediaQuery('(min-width: 56.25em)');
const {setEditPasswordModalOpened}=useContext(UserContext)
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
    <Box className='border rounded-lg max-lg:border max-lg:rounded max-lg:p-2 max-lg:text-sm max-lg:min-h-[15.6875rem] max-lg:mt-5  '>
<Text className="border-b  text-[1.2rem] text-dark font-normal mb-5 lg:ps-10 min-h-[4rem] flex items-center">
Password
</Text>
<Box className="flex justify-between min-h-[6.3rem] items-center">
    <Text className='text-dark lg:ps-10 max-lg:text-sm '>*********</Text>

    <PrimaryButton 
    fullWidth={false}
    onClick={()=>{
      setEditPasswordModalOpened(true)
    }}
    p={breakpoint?"sm":'0'}
    className='bg-white text-dark border-dark rounded border-1 hover:bg-black max-lg:w-[9rem] max-lg:text-sm hover:text-white me-5 lg:w-[12.625rem] lg:h-12' title={
    <Text className=' text-[1rem] font-normal'>
    Change Password
    </Text>
    }
    />
</Box>


   </Box>

   </SlideInAnimation>

   <SlideInAnimation>
    <Box className='border rounded-lg mt-[4.06rem] lg:mb-[10%] '>
<Text className="border-b  text-[1.2rem] text-dark font-normal mb-5 lg:ps-10 min-h-[4rem] flex items-center max-lg:hidden">
Devices
</Text>
<Box className=" min-h-[6.3rem] max-lg:hidden ">
    <Text className='text-black lg:ps-10  mb-10 text-[1rem] '>You are currently logged into Emdo on these devices</Text>

   <TableCompSettings elements={elements}/>
   
</Box>


   </Box>

   </SlideInAnimation>
   </Box>
  )
}

export default SecurityTab