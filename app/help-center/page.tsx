"use client"
import { Autocomplete, BackgroundImage, Box, Image, rem, Text } from '@mantine/core'
import { IconChevronLeft, IconSearch } from '@tabler/icons-react'
import React from 'react'
import { BadgeComp } from '../components/BadgeComp'
import { useRouter } from 'next/navigation'
import PrimaryButton from '../components/Button'

interface CardType{
  header:React.ReactNode
  content:React.ReactNode
}

const Card=({
  header,
  content
}:CardType)=>(
<Box>
  <Box className='rounded-lg border p-3 min-h-[28.3rem] min-w-[23.5rem]'>
<header className='border-b text-2xl text-center p-5'>
{header}
</header>
<Box className='font-light  text-2xl p-5'>
  {content}
</Box>
  </Box>
  </Box>
)

function page() {
const router= useRouter()


  return (
    <Box>
        <Box className='min-h-[14.3125rem]'>
<BackgroundImage src="/svgs/headerBg.svg" className='min-h-[14.3125rem]'>
<Box component='nav' className='flex items-center pt-10 ms-[10%]  '>
<IconChevronLeft
onClick={()=>{
  router.back()
}} 
color='white' className='w-12 h-12  transition-all hover:scale-110 cursor-pointer hover:translate-x-[-10%]'/>
<BadgeComp className='bg-white p-1' title={<Text className="text-link-blue ">Help Center</Text>}/>
</Box>
<Text className='text-white font-bold lg:text-[2rem] text-center'>What can we help you with?</Text>
<Box className='mt-7'>
  <Autocomplete className='min-h-[2.57rem] w-[50%] mx-auto rounded-lg'   leftSection={<IconSearch/>}/>
</Box>

</BackgroundImage>

        </Box>



        <Box className='w-full'>
<Text component='h1' className="text-center text-[2rem] font-bold mt-5">Articles</Text>
<Box className='flex justify-center gap-5 mt-5'>
<Card header="Getting Started" content="Creating your profile"/>
<Card header="Getting Started" content={
<Box className='leading-10 '>
<Text className="font-light text-2xl">
How to Submit your documents
</Text>
<Text className="font-light text-2xl">
My Documents Have not been <br /> verified yet

</Text>
</Box>

}/>
<Card header="Finding the right Job" content="Creating your profile"/>
</Box>

<Box className='ms-auto flex justify-end  lg:w-[71.5%] mx-auto mt-10'>
  <PrimaryButton  className="rounded-full w-[15.8rem] h-min-[3.5rem] bg-primary-blue" title={
    <Text className='flex items-center gap-x-3 text-lg'>
      <Image src="/svgs/headphones.svg" className='w-8 h-8' />
      Contact Support
    </Text>
  }/>
</Box>

        </Box>
    </Box>
  )
}

export default page