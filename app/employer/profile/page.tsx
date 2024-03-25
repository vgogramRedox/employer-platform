import React from 'react';
import { Box,  Image, Paper, Text, Container, Group,  rem } from '@mantine/core';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';

import {
 
  IconEdit,

  IconMapPin,
  IconStar,
  IconX,
} from '@tabler/icons-react';
import Link from 'next/link';


import { EmptyVidThumbNail } from '@/app/components/Employer/Page';
import PrimaryButton from '@/app/components/Button';

interface CandidateInfoProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  borderB?: string;
  p?: string;
}
const CandidateInfo = ({
  header,
  content,
  className,
  p = 'sm',
  borderB = 'border-b',
}: CandidateInfoProps) => (
  <Paper
    shadow="xs"
    p={p}
    bg={'primary.10'}
    className={`min-h-32 lg:max-w-[90%] mt-14 ${className}`}
  >
    <header className={`text-center font-bold  ${borderB}`}>{header}</header>

    {content}
  </Paper>
);




function page() {
  return (
    <Box>
        <div className="min-h-[4rem] h-[4rem] min-w-full bg-[#D3D7F1] font-light flex items-center justify-between ">
            <Box className='ms-[10%]'>
            Verify your profile to attract the best talent. <Link href="" className='underline font-normal'>Verify your profile</Link>
            </Box>
   
   <IconX className='w-6 h-6 me-[2%] cursor-pointer'/>

     
      </div>
    <Box className="lg:w-[90%] flex max-lg:block max-lg:text-lg mb-5 lg:p-5">
      <div className="min-h-[8rem] h-[8rem] min-w-full bg-[#D3D7F1] lg:hidden"></div>
      
      <Box className=" w-[40%] max-lg:w-full  max-lg:p-4  ">
        <div className="mt-3.5 max-lg:mb-20 max-lg:top-[10%] max-lg:absolute   ">
          <Box className="flex items-center gap-x-8 relative  w-[8.6rem] h-[8.6rem] lg:mx-auto ">
            <Image src="/svgs/person.svg" className="w-[8.6rem] h-[8.6rem] " />
            <Image
              src="/svgs/verifiedCheck.svg"
              className="w-[1.6rem] h-[1.6rem] absolute top-[10%] left-[80%]"
            />
          </Box>
          <div className="flex gap-x-4 items-center  lg:justify-center">
            <Box className=" flex-col gap-y-4">
              <Text className="font-bold text-lg">Tolu Ogunnipe</Text>

              <Text className="text- flex gap-x-2 font-light">
                <IconMapPin /> Lagos,Nigeria
              </Text>
            </Box>
          </div>
          <Box className="gap-2 flex lg:justify-center">
            <Image src="/svgs/globe.svg" className="min-w-10 min-h-10" />

            <Image src="/svgs/linkedIn.svg" className="min-w-10 min-h-10" />
          </Box>
        </div>

        {/* for large screen */}
        <CandidateInfo
          borderB=""
          className="max-lg:hidden"
          content={
            <Box className="mt-5 ">
              <Text className="font-bold flex items-center gap-x-3 ">
                <Image src="/svgs/diamondYellow.svg" className="min-w-10 min-h-10" /> Premium <PrimaryButton className='font-light bg-primary-blue rounded-2xl h-[2rem]' title={
                 <>
                 Upgrade
                 </>   
                }
                    />
              </Text>
            </Box>
          }
        />
        {/* for large screen */}
        <Group className="flex  justify-center min-h-32 lg:max-w-[90%]">
          <CandidateInfo
            borderB=""
            p=""
            className="max-lg:hidden rounded-lg"
            content={
              <Box className="mt-5 text-center">
                <Container className="w-[80%]">
                  <Text className="">Jobs Completed</Text>
                  <Text className="font-bold text-3xl">20</Text>
                </Container>
              </Box>
            }
          />

          <CandidateInfo
            p=""
            borderB=""
            className="max-lg:hidden rounded-lg"
            content={
              <Box className="mt-5 text-center">
                <Container className="w-[80%]">
                  <Text className="">Jobs Completed</Text>
                  <Text className="font-bold text-3xl">20</Text>
                </Container>
              </Box>
            }
          />
        </Group>
        {/* for small screen */}
        <CandidateInfo
          className="lg:hidden"
          header={<Text className="text center font-bold ">Bio</Text>}
          content={
            <div className="max-w-[80%] m-auto mt-3">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum, doloribus
                incidunt quos vero non eveniet eum debitis quae aliquam totam blanditiis quasi,
                nobis minus. Est aut nisi libero repudiandae!
              </Text>
            </div>
          }
        />

        
      
      </Box>

      <Box className="w-full  max-lg:p-4  ">
        <Box className="flex text-bold justify-between items-center text-2xl lg:w-[75%]">
          <IconEdit className="opacity-0" />
          About Ovidigo <IconEdit />
        </Box>
        <div className=" grid  lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-lg:hidden lg:w-[80%] mt-2.5">
          <EmptyVidThumbNail />
          <VidThumbNail />
        </div>
        {/* for large screen */}
        <CandidateInfo
          className="max-lg:hidden"
          header={

            <Box className="flex text-bold justify-between items-center  ">
          <IconEdit className="opacity-0" />
          About Ovidigo <IconEdit />
        </Box>
          }
          content={
            <div className="max-w-[80%] m-auto mt-3 ">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum, doloribus
                incidunt quos vero non eveniet eum debitis quae aliquam totam blanditiis quasi,
                nobis minus. Est aut nisi libero repudiandae!
              </Text>
            </div>
          }
        />

       
     {/* larger screen */}
     <CandidateInfo
className='max-lg:hidden '
          header={<Text className="text center font-bold">Reviews</Text>}
          content={
            <div className="mt-5">
              <Text className=" flex h-10 items-center gap-5 my-auto">
                <IconStar
                  className="w-10 h-10 border rounded-full p-2"
                  style={{ color: '#B71A34' }}
                />{' '}
                <Group className='block'>
                <Text className='font-bold'>
                David Osas
                </Text>
                <Text>Tolu is amazing to work with.</Text>
                </Group>
                
              </Text>
              
            </div>
          }
        />

        {/* for smaller screen */}
        <CandidateInfo
          className="lg:hidden"
          header={<Text className="text center ">REVIEWS</Text>}
          content={
            <div className="">
              <Text className=" flex h-10 items-center gap-5 my-auto">
                <IconStar
                  className="w-10 h-10 border rounded-full p-2"
                  style={{ color: '#B71A34' }}
                />{' '}
                David Osas
              </Text>
              <Text>Tolu is amazing to work with.</Text>
            </div>
          }
        />
       
      </Box>
    </Box>
    </Box>
  );
}

export default page;
