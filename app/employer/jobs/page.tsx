"use client"
import { Box, Text } from '@mantine/core'
import React from 'react'
import Tab from '@/app/components/Tab'

function page() {
  return (
    <Box  className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">
      <Text className="text-black text-2xl lg:hidden max-lg:mb-[2%] font-extrabold" >My Jobs</Text>
    <Tab/>
    
  
  </Box>
  )
}

export default page