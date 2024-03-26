"use client"
import { Modal, Box, Text, Group, Image } from '@mantine/core';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import PrimaryButton from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { BadgeComp } from '../BadgeComp';
import { EmploymentType, WorkSettingType } from '@/types/app';
import { DropZone } from '../DropZone';
import MultiSelectComp from '../MultiSelectComp';
import { UserContext } from '@/context/EmployerContext';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import { IconChevronLeft } from '@tabler/icons-react';


export interface addVideoModalType {
  opened: boolean;
  open: () => void;
  close: Dispatch<SetStateAction<boolean>> | any;
}
function AddVideoModal({ opened, open, close }: addVideoModalType) {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  const employmentType: EmploymentType[] = ['Full-Time', 'Contract'];

  const workSettingType: WorkSettingType[] = ['Remote', 'Hybrid', 'On-site'];

  // const [postVideoMode,setPostVideoMode]=useState<boolean>(false)
  const { appState, setAppState ,addVideoModalOpened, setAddVideoModalOpened} = useContext(UserContext);
  const {
    postVideoMode,
    jobPostTitle,
   
  } = appState;


 
  const breakpoint = useMediaQuery('(min-width: 56.25em)');

  // console.log(appState);
  return (
    <>
    <Modal.Root opened={opened}
        onClose={close}
        // title="This is a fullscreen modal"
        p={0}
        fullScreen
        radius={0}
        transitionProps={{ transition: 'slide-down', duration: 400, timingFunction: 'linear',exitDuration:400  }}
        
        closeOnEscape
        pos={'relative'} >
      <Modal.Overlay/>
      <Modal.Content ref={scrollableRef}>
        <Modal.Header className="lg:bg-light-blue min-h-[8.875rem]  max-lg:bg-white max-lg:relative">
          <Modal.Title className="lg:flex justify-between max-lg:w-full lg:w-full lg:p-5 ">
        
            

            {/* large screen */}
            <Box className="max-lg:hidden flex justify-between w-full mt--1 ">
              <Text className="font-bold text-dark text-2xl ">
              Add a video
              </Text>
              <Modal.CloseButton className=" max-lg:hidden " />
            </Box>

            <div className='max-lg:border-b   lg:hidden'>
      <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
        <IconChevronLeft
        className='text-3xl'
          onClick={close}
        />
        <Text className=" text-dark text-lg  font-semibold   ">
          Add a Video
        </Text>
        <IconChevronLeft
        className='text-3xl opacity-0'
          
        />
      </Group>
      </div>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <Box className="lg:p-10">
            <Text className='lg:leading-8 text-3xl lg:w-[75%] max-lg:text-sm'>
            Create a video to describe your company in a friendly way. This can help attract the right talent. Maximum length is 3mins
            </Text>
            <Text className="mt-10 lg:text-3xl max-lg:hidden">
              Upload a Video
            </Text>
<Box className='border-dashed border lg:min-h-[10.25rem]  flex items-center justify-center mt-5  '>
  <DropZone className='my-auto'/>
</Box>
<Text className='text-sm font-light mt-2.5'>Max length 5mins</Text>

            <Input
            className='mt-7'
              label=" Title"
              placeholder="Enter Job Title"
              value={jobPostTitle}
              // onChange={(e: any) => {
              //   setAppState({
              //     ...appState,
              //     jobPostTitle: e.target.value,
              //   });
              // }}
            />

            

            <Group className="flex gap-5 flex-row  lg:w-full  justify-end  max-lg:justify-center max-lg:gap-x-2 max-lg:p-0 mt-20">
      <PrimaryButton
      p="sm"
       fullWidth={false}
         onClick={()=>{
          // setAppState({
          //   ...appState,jobPostStage:1
          //  })
          close()
        }}

        className="bg-white border border-grey-4 hover:border-dotted lg:w-60 text-dark max-lg:w-[40%] max-lg:font-normal max-lg:hidden  "
        title={breakpoint?"Cancel":"Save Draft"}
      />
      <PrimaryButton
       p="xs"
      fullWidth={false}
        className="bg-primary-blue border lg:w-60 max-lg:w-full max-lg:font-normal  "
        title="  Save"
      //   onClick={() => {
      //    setvid({
      //  ...
      //    })
        
      //   }}
      />
    </Group>
          </Box>
        </Modal.Body>
      </Modal.Content>

      </Modal.Root>
    </>
  );
}

export default AddVideoModal;
