'use client';
import { BadgeComp } from '@/app/components/BadgeComp';
import PrimaryButton from '@/app/components/Button';
import { VidThumbNailType } from '@/app/components/Employer/VidThumbNail';

import {
  Autocomplete,
  BackgroundImage,
  Box,
  Group,
  Image,
  Pagination,
  Paper,
  rem,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import {
  IconBookmark,
  IconChevronLeft,
  IconBookmarkOff,
  IconPlayerPlay,
  IconBookmarkFilled,
} from '@tabler/icons-react';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
const VidThumbNail = ({
  bg,
  className,
  thumbnailImg = '/svgs/thumbnail1.svg',
  bookmarked,
  onClick,
  onClickBookMark,
}: VidThumbNailType) => (
  <section className=" lg:max-w-[90%] max-md:w-[95%] ">
    <div
      className={`mx-auto text-center  lg:pt-[1.61rem] ${bg?bg:"bg-purple-200 "} rounded-lg lg:min-w-[15.22888rem] max-lg:full lg:gap-10 lg:min-h-[16.11313rem]   pt-3 ${className}  max-md:min-h-[12.08488rem] md:min-h-[16.11313rem] relative`}
    >
      <div className="max-lg:p-1">
        {
          bookmarked ? (
            <IconBookmarkFilled
              onClick={onClickBookMark}
              size={10}
              className="rounded-full p-2  w-11 h-11 max-lg:w-9  absolute  left-[78%] lg:bottom-[78%]  bg-white text-sm z-10"
            />
          ) : (
            <IconBookmark
              onClick={onClickBookMark}
              className="rounded-full p-2  w-11 h-11 max-lg:w-9 max-lg:h-9   absolute left-[80%] lg:bottom-[78%] lg:left-[78%] bg-white  z-10"
            />
          )
          // <IconBookmarkOff size={10} className="rounded-full p-2 border w-14 h-14 absolute  bottom-[75%] left-[80%] bg-white text-sm z-10" />
        }

        <BackgroundImage
          src="/svgs/thumbnail1.svg"
          className="lg:max-w-[80%] lg:min-h-[9.23556rem] md:w-[80%] 
          hover:cursor-pointer focus-within:cursor-pointer
          rounded-[0.625rem] max-md:w-[80%] max-md:h-[ 6.92669rem] md:min-h-[10.77906rem]
          h-[7.15rem]   min-h-[7.15rem] pt-1 max-lg:mt-[5%]  mx-auto  flex items-center justify-center"
        >
          {/* <Image src={"/svgs/thumbnail1.svg"} className=" " /> */}
          <Image src="/svgs/playGreyBg.svg" w={30} className="absolute" />
        </BackgroundImage>

        {/* <div className="bg-grey-3 rounded-full max-md:w-10 max-md:h-10 md:h-14 w-14 absolute max-md:top-[32.5%] lg:top-[35%] lg:left-[45%] max-lg:top-[35%] max-lg:left-[45%] flex justify-center items-center ">
          <IconPlayerPlay
            fill="true"
            strokeWidth="1.5"
          
            className="z-10 outline-0 mx-auto  text-center w-10 mt-[22%] max-md:mt-[10%]     items-center "
          />
        </div> */}
      </div>

      <p className=" text-dark lg:text-lg font-normal mt-2 max-lg:text-sm">Tolu Ogunnipe</p>
      <p className="max-lg:text-[0.7rem] lg:text-sm font-light pb-5 ">Product designer</p>
    </div>
  </section>
);

function page() {
  const params = useParams();
  //   console.log(params);

  const [activePage, setPage] = useState(1);
  const router = useRouter();
  const [bookmarked, setBookMarked] = useState(false);
  const toggleBookmark = () => {
    setBookMarked((prev) => !prev);
    // console.log(bookmarked);
  };
 
  const breakpoint=useMediaQuery('(min-width:56.25em)')

  return (
    <Box className="lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg  max-lg:p-4">
      <Group>
        <Autocomplete
          radius="xl"
          size="lg"
          className={` min-w-[2.4375rem] min-h-10 p-[0.5rem] rounded-[1.5rem] text-lg lg:hidden`}
          placeholder="Search Talent"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          data={['']}
        />
      </Group>
      <Box className="flex lg:justify-between p-4 max-lg:justify-end">
        <Text className="leading-[1.2rem] text-dark lg:text-2xl  font-semibold  max-md:ms-auto max-lg:hidden ">
          Explore Talent
        </Text>

        <div className="">
          <PrimaryButton
          
          p={breakpoint?"":"0"}
            fullWidth={false}
            onClick={() => {
              router.push('/employer/talent/saved');
            }}
            className="bg-white border-primary-blue hover:bg-primary-blue hover:text-white text-primary-blue focus-within:bg-primary-blue focus-within:text-white max-lg:rounded lg:w-[12.5rem]  max-lg:w-[8.805rem]
          "
            title={
              <Text className="leading-[1.2rem]  flex gap-3 items-center  lg:text-lg rounded-lg font-normal  ">
                <IconBookmark className="" />  <Text className='max-lg:text-sm'> Saved Search</Text>
              </Text>
            }
          />
        </div>
      </Box>
 {/* small only */}
 

      <div className="max-lg:border-b shadow max-lg:p-4 max-lg:hidden">
        <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
          <IconChevronLeft
            className="text-3xl"
            onClick={() => {
              router.back();
            }}
          />
          <Text className=" text-dark text-lg  font-semibold   ">Applications</Text>
          <IconChevronLeft className="text-3xl opacity-0" />
        </Group>
      </div>
      {/* <Text className="leading-[1.2rem] text-dark lg:text-2xl  font-semibold mt-10 max-md:ms-auto ">
          Applications
        </Text> */}
      <Box className=" sm:mt-5 max-lg:p-0">

      <Text className="leading-[1.2rem] text-dark   font-semibold   lg:hidden ">
          Explore Talent
        </Text>
        <div className=" grid  lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-md:gap-y-4 max-md:gap-x-2 md:gap-4 max-lg:mt-5 ">
          <Link href={''}>
            <VidThumbNail
              bookmarked={bookmarked}
                onClickBookMark={() => {
                  // e.preventDefault();
                  toggleBookmark();
                }}
            />
          </Link>

          <Link href={''}>
            <VidThumbNail />
          </Link>

          <Link href={''}>
            <VidThumbNail />
          </Link>

          <Link href={''}>
            <VidThumbNail />
          </Link>

          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
        </div>
      </Box>

      <Box className=" mt-10 flex max-lg:p-4 max-lg:[50%] lg:mb-10 max-lg:w-[90%] max-ms-auto max-lg:hidden">
        <Pagination
          total={10}
          color="primary"
          radius={12}
          value={activePage}
          boundaries={2}
          className="ms-auto"
          onChange={setPage}
        />
      </Box>
    </Box>
  );
}

export default page;
