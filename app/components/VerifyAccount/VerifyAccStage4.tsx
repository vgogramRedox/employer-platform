import React from 'react'

import { useMediaQuery } from '@mantine/hooks';
import { Box, Group, List, Text } from '@mantine/core';
import { DropZone } from '../DropZone';

function VerifyAccSelfie() {
    const breakpoint = useMediaQuery('(min-width: 56.25em)');
  return (
    <Box className="lg:p-5 ">
    <Text className='lg:leading-8 text-xl max-lg:text-sm max-lg:font-light lg:mx-auto '>
    Upload a photo holding a piece of paper with your name and today’s date clearly written on it
    </Text>
   
    <Box className="border-dashed border min-h-[10.31rem] flex items-center justify-center rounded mt-10">
          <DropZone lgWidth='120' className=' ' />
        </Box>
        <Text className='font-light text-sm text-[#7E8494] mt-2.5'>pdf,doc</Text>

  
  <Box className='mt-14'>
    <Text className='text-dark lg:text-2xl lg:font-bold'>Instructions: </Text>

    <List  listStyleType="disc" className='font-light text-lg mt-2.5'>
      <List.Item>Ensure that the document is an original</List.Item>
      <List.Item>Ensure that the photo is clear</List.Item>
     
    </List>
  </Box>
  </Box>
  )
}

export default VerifyAccSelfie