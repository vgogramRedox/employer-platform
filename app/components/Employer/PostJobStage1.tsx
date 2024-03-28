import { Modal, Box, Text, Group, Image } from '@mantine/core';
import { useContext, useState } from 'react';
import PrimaryButton from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { BadgeComp } from '../BadgeComp';
import { EmploymentType, WorkSettingType } from '@/types/app';
import { DropZone } from '../DropZone';
import MultiSelectComp from '../MultiSelectComp';
import { UserContext } from '@/context/EmployerContext';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import {motion} from 'framer-motion'
interface SetterType {
  setter: React.ReactNode;
}

function PostJobStage1({ setter }: SetterType) {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  const employmentType: EmploymentType[] = ['Full-Time', 'Contract'];

  const workSettingType: WorkSettingType[] = ['Remote', 'Hybrid', 'On-site'];

  // const [postVideoMode,setPostVideoMode]=useState<boolean>(false)
  const { appState, setAppState } = useContext(UserContext);
  const {
    postVideoMode,
    jobPostTitle,
    jobPostDescription,
    jobPostLocation,
    jobPostRequirements,
    jobPostRenumerations,
    jobPostEmploymentType,
    jobWorkSettingType,
  } = appState;

  const tags = [
    {
      value: 'react',
      label: 'React',
    },
    { value: 'nodejs', label: 'Node js' },

    { value: 'html', label: 'Html' },
  ];
  const ET = employmentType?.map((type) => (
    <BadgeComp
      className={` border-[#BDC0CE] border font-normal lg:text-lg p-5 max-lg:text-sm cursor-pointer ${
        type == jobPostEmploymentType ? 'bg-primary-blue  text-white' : 'bg-white  text-[#BDC0CE] '
      }`}
      title={type}
      onClick={() => {
        setAppState({
          ...appState,
          jobPostEmploymentType: type,
        });
      }}
    />
  ));

  const WORKSET = workSettingType?.map((type) => (
    <BadgeComp
      className={` border-[#BDC0CE] border font-normal lg:text-lg p-5 cursor-pointer max-lg:text-sm ${
        type == jobWorkSettingType ? 'bg-primary-blue  text-white' : 'bg-white  text-[#BDC0CE] '
      }`}
      title={type}
      onClick={() => {
        setAppState({
          ...appState,
          jobWorkSettingType: type,
        });
      }}
    />
  ));
  const breakpoint = useMediaQuery('(min-width: 56.25em)');

  // console.log(appState);
  return (
    <>
      <Modal.Content ref={scrollableRef}>
        <Modal.Header className="lg:bg-light-blue min-h-[8.875rem]  max-lg:bg-white max-lg:relative">
          <Modal.Title className="lg:flex justify-between max-lg:w-full lg:w-[80%] lg:p-5 ">
            {/* small screen */}
            <Box className='max-lg:w-[95%] max-lg:mt-5  lg:hidden '>
              <Box className=" lg:hidden w-full max-lg:flex max-lg:justify-between">
                <Box className="lg:hidden ">
                  <Text className="font-bold text-dark lg:text-2xl max-lg:mt-auto max-lg:text-sm mt-auto place-items-bottom max-lg:pt-5">
                    {postVideoMode ? ' Post a Video' : ' Post a Job'}
                  </Text>
                </Box>
                <Box className="lg:hidden">
                  <PrimaryButton
                    fullWidth={breakpoint ? true : false}
                    onClick={() => {
                      setAppState({
                        ...appState,
                        postVideoMode: !postVideoMode,
                      });
                      scrollIntoView({
                        alignment: 'center',
                      });
                    }}
                    className="bg-primary-blue rounded-3xl max-lg:text-sm  max-lg:h-10 max-lg:ms-auto "
                    title={
                      postVideoMode ? (
                        'Back to Post'
                      ) : (
                        <>Post a Video {breakpoint ? 'Instead' : ''} </>
                      )
                    }
                  />
                </Box>
              </Box>
              <Text className="max-lg:text-sm max-lg:font-light lg:hidden max-lg:mt-4">
                Fill in the required information to post a job
              </Text>
            </Box>

            {/* large screen */}
            <Box className="max-lg:hidden">
              <Text className="font-bold text-dark text-2xl ">
                {postVideoMode ? ' Post a Video' : ' Post a Job'}
              </Text>
              <Text>Fill in the required information to post a job</Text>
            </Box>

            <Box className="max-lg:hidden">
              <PrimaryButton
                onClick={() => {
                  setAppState({
                    ...appState,
                    postVideoMode: !postVideoMode,
                  });
                  scrollIntoView({
                    alignment: 'center',
                  });
                }}
                className="bg-primary-blue rounded-3xl "
                title={
                  postVideoMode ? 'Back to Post' : <>Post a Video {breakpoint ? 'Instead' : ''} </>
                }
              />
            </Box>
          </Modal.Title>
          <Modal.CloseButton className="absolute lg:top-[8%] lg:left-[97%] max-lg:left-[90%] max-lg:top-1" />
        </Modal.Header>
        <Modal.Body>
        <motion.div 
initial={{opacity:0,x:-10}}
animate={{scale:1,opacity:1,x:1}}
transition={{
duration:0.4,
delay:0.3
}}
>
<Box className="lg:p-10">

<Input
  label="Job Title"
  placeholder="Enter Job Title"
  value={jobPostTitle}
  onChange={(e: any) => {
    setAppState({
      ...appState,
      jobPostTitle: e.target.value,
    });
  }}
/>

{postVideoMode && (
  <Group className="block">
    <Text
      className="mt-5 text-lg"
      //  @ts-ignore
      ref={targetRef}
    >
      {' '}
      Upload Video
    </Text>
    <Text className="mt-1 font-light max-lg:text-sm max-lg:leading-7">
      {' '}
      Upload a video describing the job position in full detail. Be sure to include
      important details such as remuneration.
    </Text>
    <div className="cursor-pointer border border-dashed">
      <DropZone />
    </div>
  </Group>
)}
<TextArea
  className="mt-1"
  label="Job Description"
  value={jobPostDescription}
  onChange={(e: any) => {
    setAppState({
      ...appState,
      jobPostDescription: e.target.value,
    });
  }}
  placeholder="Describe the job position in full details"
/>
<Text className="mt-5"> Employment Type</Text>
<Group className="flex gap-5 flex-row mt-2.5">{ET}</Group>
<Text className="mt-5"> Employment Type</Text>
<Group className="flex gap-5 flex-row mt-5 mb-5">{WORKSET}</Group>

<Input
  label="Location"
  placeholder="Enter Job Location"
  className="mt-10 mb-20"
  value={jobPostLocation}
  onChange={(e: any) => {
    setAppState({
      ...appState,
      jobPostLocation: e.target.value,
    });
  }}
/>
<TextArea
  className="mt-1 "
  label="Requirements/Qualification"
  placeholder="Enter Job Requirements/Qualifications"
  value={jobPostRequirements}
  onChange={(e: any) => {
    setAppState({
      ...appState,
      jobPostRequirements: e.target.value,
    });
  }}
/>
<Input
  label="Renumerations"
  value={jobPostRenumerations}
  onChange={(e: any) => {
    setAppState({
      ...appState,
      jobPostRenumerations: e.target.value,
    });
  }}
  placeholder="Enter renumeration"
  className="mt-5"
/>

<Text className="mt-5 text-lg"> Tags</Text>
<Text className="mt-1 font-light">Select up to 5 tags</Text>
<MultiSelectComp data={tags} />

{setter}
</Box>
</motion.div>
         
        </Modal.Body>
      </Modal.Content>
    </>
  );
}

export default PostJobStage1;
