import React, { useContext } from 'react'

import { useMediaQuery } from '@mantine/hooks';
import { Box,  Text } from '@mantine/core';
import {  IconChevronRight } from '@tabler/icons-react';
import { UserContext } from '@/context/EmployerContext';
import SlideInAnimation from '@/context/Motion';

function VerifyAccStage1() {

  const { appState, setAppState } = useContext(UserContext);

  const { verifyAccStage } = appState;
    const breakpoint = useMediaQuery('(min-width: 56.25em)');
  return (
    <Box className="">
    <Text className='lg:leading-8 text-xl lg:p-5 max-lg:text-sm max-lg:font-light lg:mx-auto '>
    Completing up to 3 of the following verification methods earns you a Premium badge. This  shows our registered talent that they can trust you.
    </Text>
   
< Box className='mt-10'>
  <SlideInAnimation>
<Box className='border-b  w-full lg:p-5 max-lg:pb-3 cursor-pointer'
onClick={()=>{
  setAppState({
    ...appState,verifyAccStage:2
  })
}}
>
  
  <div className='flex justify-between  items-center lg:w-[90%]  font-light lg:text-lg '>
  {/* <IconCheck color='#F2AB1B' /> */}
  CAC <IconChevronRight className='cursor-pointer max-lg:hidden' onClick={()=>{
    setAppState({
      ...appState,verifyAccStage:2
    })
  }}/>
  </div>

</Box>

</SlideInAnimation>
<SlideInAnimation>
<Box className='border-b  w-full lg:p-5 max-lg:pb-3 max-lg:pt-3 cursor-pointer'
onClick={()=>{
  setAppState({
    ...appState,verifyAccStage:2
  })
}}
>
  <div className='flex justify-between  items-center lg:w-[90%]  font-light lg:text-lg  '>
  {/* <IconCheck color='#F2AB1B' /> */}
  Selfie  Verification <IconChevronRight className='cursor-pointer max-lg:hidden' onClick={()=>{
    setAppState({
      ...appState,verifyAccStage:2
    })
  }}/>
  </div>

</Box>
</SlideInAnimation>

<SlideInAnimation>
<Box className='border-b  w-full lg:p-5 max-lg:pb-3 max-lg:pt-3 cursor-pointer' >
  <div className='flex justify-between  items-center lg:w-[90%]  font-light lg:text-lg '
  onClick={()=>{
    setAppState({
      ...appState,verifyAccStage:2
    })
  }}
  >
    {/* <IconCheck color='#F2AB1B' /> */}
  National ID <IconChevronRight className='cursor-pointer max-lg:hidden' onClick={()=>{
    setAppState({
      ...appState,verifyAccStage:2
    })
  }}/>
  </div>

</Box>

</SlideInAnimation>

</Box>
    


  </Box>
  )
}

export default VerifyAccStage1