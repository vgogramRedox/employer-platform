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
import BreadCrumbsNav from '@/app/components/BreadCrumbsNav';

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
    className={`min-h-32 lg:max-w-full mt-14 lg:mt-8 ${className}`}
  >
    <header className="text-center font-bold  border-b">{header}</header>

    {content}
  </Paper>
);
const links = [
  {
    title: 'Active Jobs',
    href: '/employer/jobs',
  },
  {
    title: 'Product Designer',
    href: '/employer/jobs/active-jobs/params',
  },
  {
    title: 'Applications',
    href: '/employer/jobs/active-jobs/params/applications',
  },

  {
    title: 'Candidate Profile',
    href: '/employer/jobs/1',
  }
];

function page() {
  return (

    <Box className='lg:w-[90%] lg:p-5'>
     <Box className="mt-[2%] max-lg:hidden lg:ms-[4.69rem]">
        <BreadCrumbsNav reverse items={links} />
      </Box>
  
    <Box className=" flex max-lg:block max-lg:text-lg mb-5  lg:mt-[5.1rem]">
     
      <div className="min-h-[8rem] h-[8rem] max-lg:[7rem] min-w-full bg-[#D3D7F1] lg:hidden"></div>
      {/* large left-side */}
      <Box className=" w-[50%] max-lg:w-full  max-lg:p-4 lg:ps-[4.69rem] lg:pe-[4.69rem] ">
      
        <div className="max-lg:mt-3.5 lg:mt-0 max-lg:mb-20 max-lg:top-[10%] max-lg:absolute ">
          <Box className="flex  gap-x-8 lg:gap-x-0  ms-[2.18rem]">
            <Image src="/svgs/person.svg" className="w-[8.6rem] h-[8.6rem] " />
          </Box>

          <div className="flex gap-x-4 mt-[0.81rem] ">
            <Box className=" flex-col gap-y-5">
              <Text className="font-bold lg:text-[1.2rem] text-lg text-black lg:w-full">Sarah David</Text>
              <Text className="text-sm lg:text-[1.1rem] font-light  text-black ">
                Product Designer
              </Text>
              <Text className="lg:text-[1.1rem] font-light flex gap-x-2   text-black">
                <IconMapPin /> Lagos,Nigeria
              </Text>

              <Box className="gap-2 flex-row flex mt-[1.3rem]">
         <Image src="/svgs/globe.svg" className='w-10 h-10'/>

         <Image src="/svgs/linkedIn.svg"/>
         <Image src="/svgs/behance.svg"/>
            </Box>
            </Box>

            <Box className="gap-2 flex">
              <IconMail className="rounded-full p-3 border w-14 h-14 text-black border-black" />

              <IconBookmark className="rounded-full p-3 border w-14 h-14 text-black border-black " />
            </Box>
          </div>
        </div>
{/* for small screen */} <br />
        <Text className="font-bold text-center lg:hidden max-md:mt-[14.5rem] max-lg:mt-[18.5rem] ">About me</Text>
        {/* grid  lg:grid-cols-4   max-md:overflow-x-scroll md:grid-cols-3 max-lg:gap-4 lg:gap-4 */}
        <div className=" grid  lg:hidden max-md:flex max-lg:grid-cols-2 max-lg:gap-x-5 mt-3 max-md:overflow-x-scroll md:gap-x-6 ">
          <VidThumbNail />
          <VidThumbNail />
        </div>
        {/* for small screen */}
        <CandidateInfo
          className="lg:hidden mt-[2.28rem]"
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

        {/* for both screen */}
        <Paper
          shadow="xs"
          bg={'primary.10'}
          className=" max-lg:w-full min-h-[14.125rem] mt-5  lg:p-5 max-lg:p-5"
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
        {/* for small screen */}
<Paper
shadow="xs"
bg={'primary.10'}
className='max-lg:p-5 mt-5'
>

<Text className="text-center border-b lg:hidden  font-bold">Job History</Text>
        <AccordionComp
          className="lg:hidden"
          key="1"
          jobTitle="product Designer"
          company='Wakanow'
          description="Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing.Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing."
        />
</Paper>
        
       
        {/* for large screen */}
        <CandidateInfo
        className='max-lg:mt-5'
          header={<Text className="text center max-lg:font-bold">CV</Text>}
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
        className='max-lg:mt-5'
          header={<Text className="text center max-lg:font-bold">Certification</Text>}
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
                  <Text className="font-light">2020</Text>
                </Text>
              </Group>
            </div>
          }
        />
        {/* larger screen */}
        <CandidateInfo
          className="max-lg:hidden"
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


{/* large right-side */}
      <Box className="w-full  max-lg:p-4 ">
        <Box className="max-lg:hidden  lg:w-[80%] ">
      <Text className="font-bold text-center text-lg ">About Me</Text>
        <div className=" grid  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 max-lg:hidden mt-2 ">
          <VidThumbNail name="Sarah David" job="About me " />
          <VidThumbNail name="Sarah David" job="My Interest" />
          
        </div>
        </Box>
        {/* for large screen */}
        <CandidateInfo
          className="max-lg:hidden"
          header={<Text className="text center font-bold ">Bio</Text>}
          content={
            <div className="max-w-[80%] m-auto mt-3 font-light text-black ">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum, doloribus
                incidunt quos vero non eveniet eum debitis quae aliquam totam blanditiis quasi,
                nobis minus. Est aut nisi libero repudiandae!
              </Text>
            </div>
          }
        />

        {/* for both screens */}
        <Box className="lg:mt-10 max-lg:mt-1">
        <Text className="font-bold text-center text-lg max-lg:text-start max-lg:border-b max-lg:p-5 ">Projects</Text>
          <Box className="grid  lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:mt-6  max-md:flex max-lg:grid-cols-2 max-lg:gap-x-5 max-lg:mt-5 max-md:overflow-x-scroll md:gap-x-6">
                {/* <Text className=" flex h-10 items-center gap-5 my-auto text-center">
            
                Projects
              </Text> */}
                <ProjectCard />

                <ProjectCard />

                <ProjectCard />
              </Box>
        </Box>

        {/* for smaller screen */}
        <CandidateInfo
          className="lg:hidden max-lg:mt-5 max-lg:mb-[30%] "
          header={<Text className="text center max-lg:font-bold">REVIEWS</Text>}
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
        

<Paper
          shadow="xs"
          bg={'primary.10'}
          className=" max-lg:w-full min-h-[14.125rem] mt-5 max-lg:hidden max-lg:mb-[30%] lg:p-5 lg:mt-8"
        >
          <Text className="font-bold  text-lg border-b text-center pb-1">Job History</Text>
          <Box className='mt-5'>

          <AccordionComp
          key="1"
          jobTitle="product Designer"
          company='Wakanow'
          description="Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing.Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing."
        />

<AccordionComp
          key="1"
          jobTitle="product Designer"
          company='Wakanow'
          description="Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing.Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing."
        />

<AccordionComp
          key="1"
          jobTitle="product Designer"
          company='Wakanow'
          description="Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing.Lorem ipsum dolor sit amet consectetur. Nibh massa tincidunt est ultrices vulputate pretium curabitur vitae. Feugiat mauris arcu cursus lectus elit senectus aliquam. Malesuada morbi tincidunt ac amet quis at adipiscing."
        />
          </Box>
      
        </Paper>
      </Box>
    </Box>
    </Box>
  );
}

export default page;
