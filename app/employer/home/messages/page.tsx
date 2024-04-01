'use client';
import React, { useContext } from 'react';
import { Box, Image, Paper, Text, Container, Group, rem } from '@mantine/core';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';

import { IconEdit, IconMapPin, IconPaperclip, IconPlus, IconSend, IconStar, IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { EmptyVidThumbNail } from '@/app/components/Employer/EmptyVidThumbNail';
import PrimaryButton from '@/app/components/Button';
import { UserContext } from '@/context/EmployerContext';
import { useRouter } from 'next/navigation';

interface UserMessagesProps {
  user?: string;
  message?: React.ReactNode;
  className?: string;
  active?:any
  userPfp?:string

}

const UserMessages=({
    user,
    userPfp,
    message,
   
    active
        
}:UserMessagesProps)=>(
    <Box className={`flex px-[0.5rem] py-[0.5rem] min-w-[22.5rem] min-h-[5.5rem] gap-x-4 items-center ${active?"bg-grey":""}  border-b rounded text-dark-100`}>
        
<Image className='w-[2.5rem] h-[2.5rem]' src="/svgs/person.svg"/>{userPfp}
<Box>
<Text className='font-bold'>
    Vincent{user}
</Text>
<Text className='text-sm font-light text-grey-3'>
    sup my nigga{message}
</Text>


</Box>
<Box className="ms-auto">
<Text className='text-xs font-light text-grey-3 mb-1 '>
  0:00
</Text>
<Text className='text-sm w-5 min-h-5 rounded-full bg-red-600 text-white  ms-auto flex items-center justify-center'>

2
</Text>
</Box>

    </Box>
)

function page() {
  const { setAddVideoModalOpened,setVerifyModalOpened } = useContext(UserContext);
  const router=useRouter()
  return (
    <Box className='min-h-screen'>

      <Box className="  max-lg:bg-[#040513] max-lg:full max-lg:min-h-10 lg:hidden flex justify-between items-center text-[#FFFFFFD9] lg:p-5">
        <Link href=""
        onClick={(e)=>{
e.preventDefault()
setVerifyModalOpened(true)
        }}
        className="underline font-normal  ms-[10%] text-sm">
          Verify your profile
        </Link>
        <IconX className="w-6 h-6 me-[2%] cursor-pointer" />
      </Box>
   
      <Box className="lg:w-[90%] flex max-lg:block max-lg:text-lg mb-5 lg:p-5">
      

        <Box className=" w-[40%] max-lg:w-full max-lg:p-2 border-e gap-x-3 flex flex-col min-h-screen p-2">
            <Text className="rounded-lg px-[0.5rem] py-[1rem] w-[5.9rem] border border-primary-blue flex items-center h-[2.5rem] justify-center text-primary-blue hover:scale-125 transition cursor-pointer gap-x-2 hover:bg-primary-blue hover:text-white ms-auto group">
                <IconPlus className='text-primary-blue group-hover:text-white'/> New
            </Text>
        <UserMessages/>
        <UserMessages/>
        <UserMessages/>
        </Box>

        <Box className="w-full   overflow-y-auto relative">
<Box className="flex border-b p-4 text-dark-100 gap-x-2 items-center text-lg capitalize">
       
<Image className='w-[2.5rem] h-[2.5rem]' src="/svgs/person.svg"/> Vincent
</Box>
<Box className='flex flex-col content-evenly p-4'>

<Box className='flex me-auto min-h-24 mt-14 gap-x-5'>
<Image className='w-[2.5rem] h-[2.5rem] self-end' src="/svgs/person.svg"/>
    <Box className='bg-grey-9 min-w-[60%] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none p-4'>
    <Text className='text-[#141316] text-sm'>
Vincent
</Text>
<Text className='min-h-[2.25rem] text-[#141316] font-normal leading-[1.125rem]'>
yooo
</Text>
    </Box>

</Box>
<Box className='flex ms-auto min-h-24 mt-14 gap-x-5 '>

    <Box className='bg-primary-blue min-w-[60%] rounded-tl-lg rounded-tr-lg rounded-br-none rounded-bl-lg p-4 text-slate-200 '>
    <Text className='text-sm'>
Vincent
</Text>
<Text className='min-h-[2.25rem] font-light  leading-[1.125rem]'>
Thanks for downloading StencilUI design system. We hope you are enjoying it.
</Text>
    </Box>
    <Image className='w-[2.5rem] h-[2.5rem] self-end' src="/svgs/person.svg"/>
</Box>
</Box>
<Box className='flex gap-3 flex-row z-10 fixed bottom-0 w-[60%] ms-4 p-4 border-t'>
    <Box className='relative w-[95%]'>
    <input className='min-h-8 w-[95%]  text-dark-100 border border-dark-100 rounded-lg p-4' placeholder='Write a message'/>
<IconPaperclip className='absolute right-[7%] top-[15%] text-slate-400 hover:skew-x-2 transition'/>
    </Box>

<Box className='w-14 h-14 flex items-center bg-primary-blue justify-center group rounded-full' >
<IconSend className='text-white group-hover:rotate-180 transition-all scale-125 ' />
</Box>
</Box>

        </Box>
      </Box>
    </Box>
  );
}

export default page;
