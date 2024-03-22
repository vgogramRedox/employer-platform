'use client';
import { BadgeComp } from '@/app/components/BadgeComp';
import PrimaryButton from '@/app/components/Button';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';
import { Box, Group, Image, List, Pagination, Paper, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

function page() {
  const params = useParams();
  console.log(params);
  const [page, onChange] = useState(1);
  const [activePage, setPage] = useState(1);
  const router = useRouter();
  return (
    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg ">
      <div className='max-lg:border-b shadow max-lg:p-4'>
      <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
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
      {/* <Text className="leading-[1.2rem] text-dark lg:text-2xl  font-semibold mt-10 max-md:ms-auto ">
          Applications
        </Text> */}
      <Box className="md:mt-20 sm:mt-5 max-lg:p-0">
        <div className=" grid  lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-md:gap-y-4 md:gap-4 ">
          <Link href={'/employer/jobs/active-jobs/params/applications/1'}>
            <VidThumbNail />
          </Link>

          <Link href={'/employer/jobs/active-jobs/params/applications/1'}>
            <VidThumbNail />
          </Link>

          <Link href={'/employer/jobs/active-jobs/params/applications/1'}>
            <VidThumbNail />
          </Link>

          <Link href={'/employer/jobs/active-jobs/params/applications/1'}>
            <VidThumbNail />
          </Link>

          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
        </div>
      </Box>

      <Box className=" mt-10 flex max-lg:p-4 mb-[50%] max-lg:w-[90%] max-ms-auto">
        <Pagination 
        total={10}
        
         color='primary' radius={12} value={activePage} boundaries={2} className="ms-auto" onChange={setPage}  />
      </Box>
    </Box>
  );
}

export default page;