import { Box, Text } from '@mantine/core'
import React from 'react'
import SelectComp from '../Edit/SelectComp'
import SlideInAnimation from '@/context/Motion'
import PrimaryButton from '../Button'

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
    <Box className='max-lg:border max-lg:rounded max-lg:p-2 max-lg:text-sm max-lg:min-h-[15.6875rem]'>
<Text className="border-b p-1 text-[1.2rem] text-dark-100 font-bold max-lg:mb-1.5 mb-5 max-lg:text-sm">
    Language
</Text>

<SelectComp txtColor='#303237' label='Select Language' width='lg:w-[50%]' className='font-light' data={languages}/>
<Box className='w-full lg:hidden'>
    <PrimaryButton 
    p={'0'}
    className='ms-auto bg-grey-6 w-36 font-normal text-sm text-grey-3' title={"Save Changes"}/>
   </Box>
   </Box>

   <Box className="max-lg:border max-lg:rounded max-lg:p-2 max-lg:text-sm max-lg:min-h-[15.6875rem] max-lg:mt-5 ">
<Text className="border-b p-1 text-[1.2rem] text-dark-100 font-bold  mb-5 lg:mt-[8rem] max-lg:text-sm">
    TimeZone
</Text>

<SelectComp txtColor='#303237' label='Set Timezone' width='lg:w-[50%]' className='font-light' data={timezones}/>
<Box className='w-full lg:hidden mb-[30%]' >
    <PrimaryButton 
    p={'0'}
    className='ms-auto bg-grey-6 w-36 font-normal text-sm text-grey-3 max-lg:mb-[20%]' title={"Save Changes"}/>
   </Box>
   </Box>

   </SlideInAnimation>

  

   
   </Box>
  )
}

export default GeneralTab