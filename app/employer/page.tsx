import { Box, Container, Grid, Image } from '@mantine/core'
import React from 'react'
import { Range } from '../components/Employer/Range'
import PrimaryButton from '../components/Button'
import { VidThumbNail } from '../components/Employer/VidThumbNail'

function page() {
  return (
    <Box className='w-[90%] mx-auto '>
<p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-20">Welcome back, Vincent</p>
<p className="leading-[1rem] text-dark font-normal text-lg  text-start mt-10">
            Complete your profile
            </p>
<div className="flex"> 
<p className='text-primary-blue text-4xl'> 32</p></div> <Range percent={40} className="mt-10"/>

            <Box className="bg-sun-100 min-h-[14.375rem] flex mt-10 p-4 ps-8 ">
<section>
<p className="leading-[1.2rem] text-dark lg:text-4xl font-semibold mt-20">Create your first job post</p>
<p className="leading-[1rem] text-dark font-normal text-[1rem]  text-start mt-10">
            Find the best talent on Vgogram, create your first job post
            </p>
            <PrimaryButton variant='filled' fullWidth={false} className='bg-primary-blue rounded-2xl mt-5 mb-6' title= {<>
             Post a Job
            </>}/>
</section>

<section className='ms-auto'>

  <Image src="/images/colorfulbg.svg"/>
</section>
            </Box>
            <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold ">Explore Talent</p>
            <Box className='mt-20'>
           
            <Grid justify='center' className=''>
            <VidThumbNail/>
            <VidThumbNail/>
            <VidThumbNail/>
            <VidThumbNail/>
            </Grid>


            </Box>
    </Box>
  )
}

export default page