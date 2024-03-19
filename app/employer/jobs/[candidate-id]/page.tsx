import React from 'react';
import { Box, Divider, Image, Paper, Text, Container, Group } from '@mantine/core';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';
import PrimaryButton from '@/app/components/Button';
import {
  IconAward,
  IconBookmark,
  IconFolder,
  IconMail,
  IconMapPin,
  IconStar,
} from '@tabler/icons-react';
import Link from 'next/link';
import PaperComp from '@/app/components/Paper';
import { ProjectCard } from '@/app/components/ProjectCard';
import AccordionComp from '@/app/components/AccordionComp';

interface CandidateInfoProps {
  header: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}
const CandidateInfo = ({ header, content, className }: CandidateInfoProps) => (
  <Paper
    shadow="xs"
    p={'sm'}
    bg={'primary.10'}
    className={`min-h-32 lg:max-w-[90%] mt-14 ${className}`}
  >
    <header className="text-center font-bold  border-b">{header}</header>

    {content}
  </Paper>
);

function page() {
  return (
    <Box className="lg:w-[90%] flex max-lg:block max-lg:text-lg mb-5 lg:p-5">
      <div className="min-h-[8rem] h-[8rem] min-w-full bg-[#D3D7F1] lg:hidden"></div>
      <Box className=" w-[40%] max-lg:w-full  max-lg:p-4  ">
        <div className="mt-3.5 max-lg:mb-20 max-lg:top-[10%] max-lg:absolute ">
          <Box className="flex items-center gap-x-8">
            <Image src="/svgs/person.svg" className="w-[8.6rem] h-[8.6rem]" />
          </Box>
          <div className="flex gap-x-4 items-center">
            <Box className=" flex-col gap-y-4">
              <Text className="font-bold text-lg">Tolu Ogunnipe</Text>
              <Text className="text-sm font-light">Product Designer</Text>
              <Text className="text- flex gap-x-2 font-light">
                <IconMapPin /> Lagos,Nigeria
              </Text>
            </Box>

            <Box className="gap-2 flex">
              <IconMail className="rounded-full p-2 border w-14 h-14 " />

              <IconBookmark className="rounded-full p-2 border w-14 h-14 " />
            </Box>
          </div>
        </div>

        <Text className="font-bold text-center lg:hidden mt-[60%]">About me</Text>
        <div className=" grid  lg:hidden  max-lg:grid-cols-2  mt-5">
          <VidThumbNail />
          <VidThumbNail />
        </div>
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

{/* for small screen */}
<Paper shadow="xs"  bg={'primary.10'} className="lg:max-w-[90%] max-lg:w-full min-h-[14.125rem] mt-5 mb-[30%]">
      <Text className='font-bold  border-b text-center'>Education</Text>

      <Box className='flex gap-x-3 p-7 '>
      <Image src="/svgs/graduateCap.svg" className='w-10 h-10'/>
      <Box>
        <Text component='h1'>B.Sc Computer Engineering</Text>
        <Text className='text-sm font-light m'>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
      <Text className='text-sm font-light '>
        2018
      </Text>
      </Box>
      </Box>
      
      
    </Paper>


{/* for small screen */}
<Text className='lg:hidden text-center '>Job History</Text>
<AccordionComp
className="lg:hidden"
          key="1"
          title="product Designer"
          description="Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing.Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing."
        />
{/* for large screen */}
        <CandidateInfo
          header={<Text className="text center">CV</Text>}
          content={
            <div className="mt-5">
              <Link href="" className="underline flex h-10 items-center gap-5 ">
                <IconFolder className="w-10 h-10 border rounded-full p-2 bg-[#E0E7EB]" /> View CV
              </Link>
            </div>
          }
        />

{/* for large screen */}
        <CandidateInfo
          header={<Text className="text center">Certification</Text>}
          content={
            <div className="my-auto">
              <Group className=" flex h-10 items-center gap-5 ">
                <IconAward
                  className="w-10 h-10 border rounded-full p-2 bg-[#E0E7EB] "
                  style={{ color: '#F2AB1B' }}
                />{' '}
                <Text>
                  Fundamentals of UI Design
                  <br />
                  <Text className="font-light">DATE</Text>
                </Text>
              </Group>
            </div>
          }
        />
{/* larger screen */}
        <CandidateInfo
className='max-lg:hidden'
          header={<Text className="text center">REVIEWS</Text>}
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

      <Box className="w-full  max-lg:p-4 ">
        <div className=" grid  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 max-lg:hidden">
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
          <VidThumbNail />
        </div>
{/* for large screen */}
        <CandidateInfo
          className="max-lg:hidden"
          header={<Text className="text center font-bold ">Bio</Text>}
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



{/* for both screens */}
        <div className="">
          <CandidateInfo
            header={<Text className="text center font-bold">Projects</Text>}
            content={
              <div className="grid  lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
                {/* <Text className=" flex h-10 items-center gap-5 my-auto text-center">
            
                Projects
              </Text> */}
                <ProjectCard />

                <ProjectCard />

                <ProjectCard />
              </div>
            }
          />
        </div>

        {/* for smaller screen */}
<CandidateInfo
className='lg:hidden'
header={<Text className="text center">REVIEWS</Text>}
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
{/* for large screen */}
        <AccordionComp
          key="1"
          title="product Designer"
          description="Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing.Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing."
        />
      </Box>
    </Box>
  );
}

export default page;
