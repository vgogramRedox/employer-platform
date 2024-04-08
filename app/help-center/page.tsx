'use client';
import { Autocomplete, BackgroundImage, Box, Image, rem, Text } from '@mantine/core';
import { IconChevronLeft, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { BadgeComp } from '../components/BadgeComp';
import { useRouter } from 'next/navigation';
import PrimaryButton from '../components/Button';
import { useMediaQuery } from '@mantine/hooks';

interface CardType {
  header: React.ReactNode;
  content: React.ReactNode;
}

const Card = ({ header, content }: CardType) => (
  <Box className=' '>
    <Box className="rounded-lg  border p-3 min-h-[28.3rem] lg:min-w-[23.5rem] max-md:w-full max-md:min-h-[14rem]  ">
      <header className="border-b text-2xl text-center sm:p-5 md:p-0 lg:p-5 max-lg:text-[1rem] max-lg:font-bold">{header}</header>
      <Box className="font-light  lg:text-xl p-5 max-lg:font-[400]  lg:font-light  max-md:text-sm md:text-lg">{content}</Box>
    </Box>
  </Box>
);

function page() {
  const router = useRouter();
  const midWidth=useMediaQuery('(max-width:668px)')

  return (
    <Box>
      <Box className="min-h-[14.3125rem]">
        <BackgroundImage src="/svgs/headerBg.svg" className="min-h-[14.3125rem] max-lg:w-full max-lg:p-5">
          <Box component="nav" className="flex items-center pt-10 lg:ms-[10%]  ">
            <IconChevronLeft
              onClick={() => {
                router.back();
              }}
              color="white"
              className="w-12 h-12 max-md:w-6  transition-all hover:scale-110 cursor-pointer hover:translate-x-[-10%]"
            />
            <BadgeComp
              className="bg-white p-1 max-md:hidden"
              title={<Text className="text-link-blue ">Help Center</Text>}
            />
          </Box>
          <Text className="text-white font-bold lg:text-[2rem] text-center max-lg:text-xl">
            What can we help you with?
          </Text>
          <Box className="mt-7">
            <Autocomplete 
            styles={{
              input:{borderRadius:midWidth? '1.25rem':"0.5rem"}
            }}
            placeholder='Search'
              className="min-h-[2.57rem] lg:w-[50%] mx-auto lg:rounded-lg max-lg:w-full max-lg:rounded-3xl"
              leftSection={<IconSearch />}
            />
          </Box>
        </BackgroundImage>
      </Box>

      <Box className="w-full">
        <Text component="h1" className="text-center text-[2rem] max-lg:text-2xl font-bold mt-5">
          Articles
        </Text>
        <Box className="flex justify-center gap-5 mt-5 max-md:flex-col max-md:p-5 md:p-5 ">
          <Card header="Getting Started" content="Creating your profile" />
          <Card
            header="Getting Started"
            content={
              <Box className="  ">
                <Text className="font-light  lg:text-xl  max-lg:font-[400]  lg:font-light  max-md:text-sm md:text-lg">How to Submit your documents</Text>
                <Text className="font-light  lg:text-xl  max-lg:font-[400]  lg:font-light  max-md:text-sm md:text-lg">
                  My Documents Have not been <br /> verified yet
                </Text>
              </Box>
            }
          />
          <Card header="Finding the right Job" content="Creating your profile" />
        </Box>

        <Box className="ms-auto flex justify-end  lg:w-[71.5%] mx-auto mt-10">
          <PrimaryButton
            className="rounded-full w-[15.8rem] h-min-[3.5rem] bg-primary-blue max-md:w-full max-md:text-center"
            title={
              <Text className="flex items-center gap-x-3 text-lg">
                <Image src="/svgs/headphones.svg" className="w-8 h-8" />
                Contact Support
              </Text>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default page;
