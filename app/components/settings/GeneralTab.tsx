import { Box, Text } from '@mantine/core'
import React from 'react'
import SelectComp from '../Edit/SelectComp'
import SlideInAnimation from '@/context/Motion'

function GeneralTab() {

    const languages=[
        {
            value:"english",label:"English"
        }
    ]

    
    const timezones=[
        {
            value:"gmt",label:"GMT"
        }
    ]
  return (
   <Box>
    <SlideInAnimation>
    <Box>
<Text className="border-b p-1 text-[1.2rem] text-dark-100 font-bold mb-5">
    Language
</Text>

<SelectComp txtColor='#303237' label='Select Language' width='lg:w-[50%]' className='font-light' data={languages}/>
   </Box>

   <Box>
<Text className="border-b p-1 text-[1.2rem] text-dark-100 font-bold mb-5 mt-[8rem]">
    TimeZone
</Text>

<SelectComp txtColor='#303237' label='Set Timezone' width='lg:w-[50%]' className='font-light' data={timezones}/>
   </Box>
   </SlideInAnimation>
   </Box>
  )
}

export default GeneralTab