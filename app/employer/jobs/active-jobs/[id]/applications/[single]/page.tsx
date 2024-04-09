"use client"
import React from 'react'
import {BackgroundImage, Box, Divider, Group, Image, Paper, Text,rem} from '@mantine/core'
import {  VidThumbNailType } from '@/app/components/Employer/VidThumbNail'
import PrimaryButton from '@/app/components/Button'
import { IconBookmark, IconMail, IconMapPin } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { IconChevronLeft } from '@tabler/icons-react'
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav'


const VidThumbNail=({bg,
  className,job="Product Designer",name="Tolu Ogunnipe",
  thumbnailImg="/svgs/thumbnail1.svg",onClick
  
}:VidThumbNailType)=>(
   
  <section  className=""
  onClick={onClick}
  >
    
    <div className={`mx-auto text-center lg:min-w-[98%]  lg:pt-[1.61rem] ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:full lg:gap-10 lg:min-h-[16.11313rem] md:w-[75%] pt-3 ${className}  max-md:w-[90%] max-md:h-[13rem] md:min-h-[16.11313rem] `}>
    <BackgroundImage
      src={thumbnailImg}
      className="lg:max-w-[80%] lg:min-h-[9.23556rem] max-md:w-[80%] md:w-[80%]
      hover:cursor-pointer focus-within:cursor-pointer
      rounded-[0.625rem]  max-md:h-[ 6.92669rem] md:min-h-[10.77906rem]
      h-[7.15rem]   min-h-[7.15rem] pt-1 max-lg:mt-[5%]  mx-auto  flex items-center justify-center"
    >
      {/* <Image src={"/svgs/thumbnail1.svg"} className=" " /> */}
      <Image src="/svgs/playGreyBg.svg" w={rem(40) } className="absolute max-md:static" />
    </BackgroundImage>
    
    <p className=' text-dark lg:text-lg font-normal mt-2 max-lg:text-sm '>{name}</p>
    <p className="max-lg:text-sm lg:text-sm lg:mt-3  font-light ">{job} </p>
    </div>
  
    </section>

)

function page() {
  const router=useRouter()
  const items=[
    {
      title:"Active Jobs",
      href:"/employer/jobs/active-jobs"
    },
    {
      title:"Product Designer",
      href:"/employer/jobs/active-jobs/params"
    },
{
  title:"Applications",
  href:"/employer/jobs/active-jobs/params/applications/1"
}
    
  ]





    return (
    
        <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg  mb-5">
    
    <div className='max-lg:border-b shadow '>
      <Group className="max-lg:justify-between lg:hidden flex max-md:w-[100%] items-center max-lg:p-4">
        <IconChevronLeft
        className='text-3xl'
          onClick={() => {
            router.back();
          }}
        />
        <Text className=" text-dark text-lg  font-semibold   ">
          Applications
        </Text>
        <IconChevronLeft
        className='text-3xl opacity-0'
          
        />
      </Group>
      </div>
      <BreadCrumbsNav reverse={true} items={items} className='mt-10 max-lg:hidden'/>
       <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-10  max-lg:hidden">Applications</p>
          <Box className="mt-20 mb-5">
            <div  className=" lg:max-w-[20.5rem] ">
              <VidThumbNail  />
              
            
            </div>
          </Box>
    
    
    <Divider/>
    
    <div className='mt-3.5 max-lg:p-4'>
    <Box className='flex items-center gap-x-14 max-lg:gap-x-4 '>
 <Image src="/svgs/person.svg" className='min-w-[8.6rem] max-lg:w-[7.6rem] min-h-[8.6rem]'/>
 <PrimaryButton
 onClick={()=>{
  router.push("/employer/jobs/1")
 }}
 className='bg-primary-blue lg:w-[17.5rem] 
 md:w-[40%]
 max-lg:text-sm max-lg:rounded-xl max-lg:font-light max-lg:h-12 ' title=" View Profile"/>
    </Box>
<div className='flex gap-x-4 items-center mt-[0.81rem]'>

<Box className=' flex-col gap-y-5'>

<Text className='font-bold lg:text-[1.5rem] text-lg text-black'>
Tolu Ogunnipe
</Text>
<Text className='text-sm lg:text-[1.1rem] font-light  text-black '>
  Product Designer
</Text>
<Text className='lg:text-[1.1rem] font-light flex gap-x-2   text-black'>
 <IconMapPin/> Lagos,Nigeria
</Text>
    </Box>

    <Box className='gap-2 flex'>

<IconMail className='rounded-full p-3 border w-16 h-16 text-black border-black'  />

<IconBookmark className='rounded-full p-3 border w-16 h-16 text-black border-black '/>
    </Box>
</div>
    
    </div>
   <div className='max-lg:p-4'>
          
    {/* <Paper shadow="xs"  bg={'primary.10'} className="lg:w-[25.5rem] max-lg:w-full min-h-[14.125rem] mt-[2.06rem] mb-[30%]  lg:pb-10">
      <Text className='font-bold  border-b text-center lg:p-5 lg:text-xl max-lg:p-5  '>Education</Text>

      <Box className='flex gap-x-3  lg:p-2 text-black'>
      <Image src="/svgs/graduateCap.svg" className='w-10 h-10'/>
      <Box>
        <Text component='h1' className='text-[1rem]' >B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light m'>
        University of Illorin
        
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>
      <Box className='flex gap-x-3 p-7 lg:p-2 text-black'>
      <Image src="/svgs/graduateCap.svg" className='w-10 h-10'/>
      <Box>
        <Text component='h1' className='text-[1rem]' >B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light m'>
        University of Illorin
        
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>
      
      
    </Paper> */}
     <Paper
          shadow="xs"
          bg={'primary.10'}
          className=" max-lg:w-full min-h-[14.125rem]   lg:p-5 max-lg:p-5 lg:w-[25.5rem]  mt-[2.06rem] mb-[30%] "
        >
          <Text className="font-bold  border-b text-center ">Education</Text>

          <Box className='flex gap-x-3 lg:p-2 text-black mt-2'>
      <Image src="/svgs/graduateCap.svg" className='w-10 h-10'/>
      <Box>
        <Text component='h1' className='text-[1rem]' >B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light m'>
        University of Illorin
        
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>

      <Box className='flex gap-x-3 lg:p-2 text-black mt-2'>
      <Image src="/svgs/graduateCap.svg" className='w-10 h-10'/>
      <Box>
        <Text component='h1' className='text-[1rem]' >B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light m'>
        University of Illorin
        
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>
        </Paper>
    </div>
          </Box>
     
      )
}

export default page