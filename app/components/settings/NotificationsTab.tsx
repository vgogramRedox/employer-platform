import { Box, Group, Switch, Text } from '@mantine/core'
import React, { useState } from 'react'
import SelectComp from '../Edit/SelectComp'
import SlideInAnimation from '@/context/Motion'

function NotificationsTab() {

const [checked,setChecked]=useState<boolean>()
    
  return (
   <Box>
    <SlideInAnimation>
    <Box>
<Text className="border-b p-1 text-[1.2rem] text-dark-100 font-bold mb-5">
   Email Notifications
</Text>

<Box>
    <Group className='flex gap-x-12 text-dark-100'>
    <Switch
          size="lg"
          className="max-lg:hidden"
          color="blue.9"
          checked={checked}
          onChange={(e)=>setChecked(e.currentTarget.checked)}
        />

        <Box>
            <Text className=' text-xl'>
                News and Updates
            </Text>
            <Text className='font-light text-lg'>
            Get notified about new features and updates
            </Text>
        </Box>
    </Group>
    <Group className='flex gap-x-12 text-dark-100 mt-6'>
    <Switch
          size="lg"
          className="max-lg:hidden"
          color="blue.9"
          checked={checked}
          onChange={(e)=>setChecked(e.currentTarget.checked)}
        />

        <Box>
            <Text className=' text-xl'>
                Weekly Newsletter
            </Text>
            <Text className='font-light text-lg'>
            Subscribe to our weekly insights.
            </Text>
        </Box>
    </Group>
</Box>
   </Box>

   <Box>
<Text className="border-b p-1 text-[1.2rem] text-dark-100 font-bold mb-5 mt-[1rem]">
    Push Notifications
</Text>

<Box>
<Group className='flex gap-x-12 text-dark-100'>
    

        <Box>
         
            <Group className='flex gap-x-12 text-dark-100'>
    <Switch
          size="lg"
          className="max-lg:hidden"
          color="blue.9"
          checked={checked}
          onChange={(e)=>setChecked(e.currentTarget.checked)}
        />

        <Box>
            <Text className=' text-xl'>
            Job Applications
            </Text>
            <Text className='font-light text-lg'>
            Get notified when a jobseeker applies for a job
            </Text>
        </Box>
    </Group>
            
          
        </Box>
    </Group>
</Box>
   </Box>
   </SlideInAnimation>
   </Box>
  )
}

export default NotificationsTab