'use client';
import { BadgeComp } from '@/app/components/BadgeComp';
import PrimaryButton from '@/app/components/Button';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';
import {  Box, Group, Image, List, Pagination, Paper, Text } from '@mantine/core';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

function page() {
  const params = useParams();
  console.log(params);
  const [page, onChange] = useState(1);
const[activePage,setPage]=useState(1)
  return (

    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4">

   <p className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-10 ">Applications</p>
      <Box className="mt-20">
        <div  className=" grid  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href={'/jobs/1'}>
          <VidThumbNail />
          </Link>
         
          <Link href={'/jobs/1'}>
          <VidThumbNail />
          </Link>
         
          <Link href={'/jobs/1'}>
          <VidThumbNail />
          </Link>
         
          <Link href={'/jobs/1'}>
          <VidThumbNail />
          </Link>
         
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
        </div>
      </Box>




<Box className=' mt-10 flex'>
<Pagination value={activePage} className='ms-auto' onChange={setPage} total={10} />
</Box>
      
      </Box>
 
  );
}

export default page;
