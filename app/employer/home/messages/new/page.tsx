"use client"
import PrimaryButton from '@/app/components/Button'
import { Autocomplete, Box, Group, Image, px, rem, Text } from '@mantine/core'
import { IconCheck, IconSearch } from '@tabler/icons-react'
import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface UserMessagesProps {
    user?: string;
    message?: React.ReactNode;
    className?: string;
    active?: any;
    userPfp?: string;
    onClick?:()=>void
  }
const UserMessages = ({
    user,
    userPfp,
    message,
  
    active,
    onClick
  }: UserMessagesProps) => (
    <Box
   onClick={onClick}
      className={`flex    hover:border-0 cursor-pointer hover:rounded lg:min-w-[22.5rem] max-lg:w-full  min-h-[5rem]  gap-x-4 items-center hover:bg-grey-6 ${
        active ? 'bg-grey-6 rounded' : ''
      }  border-b rounded text-dark-100`}
    >
      <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" />
      {userPfp}
      <Box>
        <Text className=" text-dark-100 font-light text-sm">Tolu Olupe{user}</Text>
      
      </Box>
      <Box className="ms-auto ">
       <IconCheck color='#303237' className="w-6 h-6"/>
      </Box>
    </Box>
  );
function page() {
    const router=useRouter()
  return (
  
        <Box className="min-h-screen lg:hidden">
      <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[5.7rem] flex items-end shadow">
                <Group className="max-md:justify-between lg:hidden flex max-lg:w-[100%] items-center">
                  <IconChevronLeft className="text-3xl" onClick={()=>{
                    router.back()
                  }} />
                  <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">Messages</Text>
                  <IconChevronLeft className="text-3xl opacity-0" />
                </Group>
              </div>

              <Group>
         
          <Autocomplete 
    
            className={` max-lg:w-[95%] mx-auto min-h-10 p-[0.5rem] mt-[1.12rem] rounded-[0.5rem] text-lg text-grey-4 `} 
            // placeholder="Search"
            leftSectionWidth={"70%"}
            leftSection={
           <Box className="flex  items-center text-[1rem] text-dark-100 ms-[0.1rem]">
            <Text className="flex">To :</Text>
            <IconSearch style={{color:"#BDC0CE"}} className="w-6 h-6 text-grey-4 ms-[1.8rem]"stroke={1.5} /> <Text className="text-grey-4 ms-2">Search</Text>
           </Box>
            
            }
            data={['']}
           
          />
        </Group>

<Box className="min-h-[30%] p-5">
<UserMessages  onClick={()=>{
        router.push("/employer/messages/home/mobile")
    }}
    />
<UserMessages  onClick={()=>{
        router.push("/employer/messages/home/mobile")
    }}/>
<UserMessages  onClick={()=>{
        router.push("/employer/messages/home/mobile")
    }}/>
</Box>
<Box className='w-full'>
    
<PrimaryButton
fullWidth={false}
p="0"
className="max-lg:w-[95%]  h-12 bg-primary-blue text-lg mx-auto text-center"
title="Message"
/>
</Box>
      
              </Box>
  
  )
}

export default page