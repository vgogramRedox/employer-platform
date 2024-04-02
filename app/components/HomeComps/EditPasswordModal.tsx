'use client';
import { Modal, Box, Text, Group, Image, Radio } from '@mantine/core';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import PrimaryButton from '../Button';
import Input from '../Input';
import { EmploymentType, WorkSettingType } from '@/types/app';
import { DropZone } from '../DropZone';
import { motion } from 'framer-motion';
import { UserContext } from '@/context/EmployerContext';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import { IconChevronLeft } from '@tabler/icons-react';
import SlideInAnimation from '@/context/Motion';

export interface addVideoModalType {
  opened: boolean;
  open: () => void;
  close: Dispatch<SetStateAction<boolean>> | any;
}
function EditPasswordModal({ opened, open, close }: addVideoModalType) {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  // const [postVideoMode,setPostVideoMode]=useState<boolean>(false)
  const { appState, setAppState } = useContext(UserContext);
  const { addUser_name, addUser_email } = appState;

const{addUser_mode}=appState

  const breakpoint = useMediaQuery('(min-width: 56.25em)');
  const [checked, setChecked] = useState<number>(1);
  const checkArr = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  // console.log(appState);
  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        // title="This is a fullscreen modal"
        p={0}
        fullScreen
        radius={0}
        transitionProps={{
          transition: 'slide-down',
          duration: 400,
          timingFunction: 'linear',
          exitDuration: 400,
        }}
        closeOnEscape
        pos={'relative'}
      >
        <Modal.Overlay />
        <Modal.Content ref={scrollableRef}>
          <Modal.Header className="lg:bg-light-blue min-h-[8.875rem]  max-lg:bg-white max-lg:relative">
            <Modal.Title className="lg:flex justify-between max-lg:w-full lg:w-full lg:p-5 ">
              {/* large screen */}
              <Box className="max-lg:hidden flex justify-between w-full mt--1 ">
              <Text className="font-bold text-dark text-2xl ">Edit Password</Text>
                {/* <Text className="font-bold text-dark text-2xl ">{addUser_mode=="add"?"add":"Edit"} Password</Text> */}
                <Modal.CloseButton className=" max-lg:hidden " />
              </Box>


              <div className="max-lg:border-b   lg:hidden">
                <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
                  <IconChevronLeft className="text-3xl" onClick={close} />
                  <Text className=" text-dark text-lg  font-semibold   ">{
                    addUser_mode=="add"?"Add a User":"Edit a User"
                  } </Text>
                  <IconChevronLeft className="text-3xl opacity-0" />
                </Group>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Box className="lg:p-10">
            <motion.div 
initial={{opacity:0,x:-10}}
animate={{scale:1,opacity:1,x:1}}
transition={{
duration:0.75,
delay:0.3
}}
>
              <Input 
                className="mt-7 text-lg"
                label=" Old password"
                placeholder="Enter old password"
                value={addUser_name}
                onChange={(e: any) => {
                  setAppState({
                    ...appState,
                    addUser_name: e.target.value,
                  });
                }}
              />
              </motion.div>
<motion.div 
initial={{opacity:0,x:-10}}
animate={{scale:1,opacity:1,x:1}}
transition={{
duration:0.75,
delay:0.5
}}
>

<Input
                className="mt-7"
                label=" New Password"
                placeholder="Enter new password "
                value={addUser_email}
                onChange={(e: any) => {
                  setAppState({
                    ...appState,
                    addUser_email: e.target.value,
                  });
                }}
              />

              
<Input
                className="mt-7"
                label=" Confirm Password"
                placeholder="Re-enter new password "
                value={addUser_email}
                onChange={(e: any) => {
                  setAppState({
                    ...appState,
                    addUser_email: e.target.value,
                  });
                }}
              />
</motion.div>
              
              
              
              <motion.div 
initial={{opacity:0,x:-10}}
animate={{scale:1,opacity:1,x:1}}
transition={{
duration:0.75,
delay:0.5
}}
>


</motion.div>
              <Group className="flex  flex-row  lg:w-full  justify-end  max-lg:justify-center max-lg:gap-x-2 max-lg:p-0 mt-20">
               
<SlideInAnimation>
<PrimaryButton
                  p="sm"
                  fullWidth={false}
                  onClick={() => {
                    // setAppState({
                    //   ...appState,jobPostStage:1
                    //  })
                    close();
                  }}
                  className="bg-white border border-grey-4 hover:border-dotted lg:w-60 max-lg:w-32   text-dark  max-lg:font-normal   "
                  title={'Cancel' }
                />

</SlideInAnimation>
                
<SlideInAnimation>

                <PrimaryButton
                  p="xs"
                  fullWidth={false}
                  className="bg-primary-blue border lg:w-60  max-lg:font-normal max-lg:hidden  "
                  title={
                    
                   'Update'}
                  //   onClick={() => {
                  //    setvid({
                  //  ...
                  //    })

                  //   }}
                />

                {/* large hidden */}
                
                <PrimaryButton
                  p="xs"
                  fullWidth={false}
                  className="bg-primary-blue border lg:w-60 lg:hidden max-lg:font-normal max-lg:w-32  "
                  title={
                    
                    addUser_mode=="add"?"  Post ":"Edit "}
                  //   onClick={() => {
                  //    setvid({
                  //  ...
                  //    })

                  //   }}
                />
                </SlideInAnimation>
              </Group>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}

export default EditPasswordModal;
