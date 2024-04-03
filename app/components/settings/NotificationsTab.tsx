import { Box, Group, Switch, Text } from '@mantine/core'
import React, { useState } from 'react'
import SelectComp from '../Edit/SelectComp'
import SlideInAnimation from '@/context/Motion'
import { useMediaQuery } from '@mantine/hooks'

function NotificationsTab() {

// const [checked,setChecked]=useState<boolean>()
const breakpoint = useMediaQuery('(min-width: 56.25em)');

  return (
   <Box>
    <SlideInAnimation>
    <Box className="max-lg:border max-lg:rounded max-lg:p-2 max-lg:text-sm max-lg:min-h-[15.6875rem] max-lg:mt-5 ">
<Text className="border-b p-1 lg:text-[1.2rem] text-dark-100 font-bold mb-5">
   Email Notifications
</Text>

<Box>
    <Group className='flex lg:gap-x-12 max-md:gap-x-2  max-lg:justify-between  text-dark-100'>
    <Switch
             size= {breakpoint?"lg":'sm'}
          className=" max-lg:w-[10%] "
          color="blue.9"
        //   checked={checked}
        //   onChange={(e)=>setChecked(e.currentTarget.checked)}
        />

        <Box   className=" max-lg:w-[80%] max-lg:mx-auto">
            <Text className=' lg:text-xl'>
                News and Updates
            </Text>
            <Text className='font-light lg:text-lg max-lg:text-xs max-lg:w-full'>
            Get notified about new features and updates
            </Text>
        </Box>
    </Group>
    <Group className='flex lg:gap-x-12 max-md:gap-x-2  mt-5 max-lg:justify-between  text-dark-100'>
    <Switch
             size= {breakpoint?"lg":'sm'}
          className=" max-lg:w-[10%] "
          color="blue.9"
        //   checked={checked}
        //   onChange={(e)=>setChecked(e.currentTarget.checked)}
        />

        <Box   className=" max-lg:w-[80%] max-lg:mx-auto">
            <Text className=' lg:text-xl'>
            Weekly Newsletter
            </Text>
            <Text className='font-light lg:text-lg max-lg:text-xs max-lg:w-full'>
            Subscribe to our weekly newsletter
            </Text>
        </Box>
    </Group>
</Box>
   </Box>

   <Box className="max-lg:border max-lg:rounded max-lg:p-2 max-lg:text-sm max-lg:min-h-[15.6875rem] max-lg:mt-5 ">
<Text className="border-b p-1 lg:text-[1.2rem] text-dark-100 font-bold mb-5 mt-[1rem]">
    Push Notifications
</Text>

<Box>
<Group className='flex lg:gap-x-12 max-md:gap-x-2  max-lg:justify-between  text-dark-100'>
    <Switch
             size= {breakpoint?"lg":'sm'}
          className=" max-lg:w-[10%] "
          color="blue.9"
        //   checked={checked}
        //   onChange={(e)=>setChecked(e.currentTarget.checked)}
        />

        <Box   className=" max-lg:w-[80%] max-lg:mx-auto">
            <Text className=' lg:text-xl'>
            Job Applications
            </Text>
            <Text className='font-light lg:text-lg max-lg:text-xs max-lg:w-full'>
            Get notified when a jobseeker applies for a job
            </Text>
        </Box>
    </Group>
</Box>
   </Box>
   </SlideInAnimation>
   </Box>
  )
}

export default NotificationsTab