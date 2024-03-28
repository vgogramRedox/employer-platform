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
function AddUserModal({ opened, open, close }: addVideoModalType) {
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
                <Text className="font-bold text-dark text-2xl ">{addUser_mode=="add"?"add":"Edit"} User</Text>
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
                label=" Full Name"
                placeholder="Enter Full Name"
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
                label=" Email"
                placeholder="Enter Email "
                value={addUser_email}
                onChange={(e: any) => {
                  setAppState({
                    ...appState,
                    addUser_email: e.target.value,
                  });
                }}
              />
</motion.div>
              
              <Text className="font-bold">Access Level</Text>
              
              <motion.div 
initial={{opacity:0,x:-10}}
animate={{scale:1,opacity:1,x:1}}
transition={{
duration:0.75,
delay:0.5
}}
>
<Box className="flex gap-x-5 mt-5">
                <Box className='gap-y-12 flex-col flex'>
                  {checkArr?.map((check) => (
                   
                      <Radio
                        checked={checked === check.id}
                        onChange={(event) => {
                          setChecked(check.id);
                        }}
                      />
                   
                  ))}
                </Box>
                <Group className='flex-col gap-y-5'>
                  <Box>
                    <Text className="font-bold">Administrator</Text>
                    <Text className="font-light text-[#565C69]">
                      *Administrators have full access to all features
                    </Text>
                  </Box>

                  <Box>
                    <Text className="font-bold">Standard</Text>
                    <Text className="font-light text-[#565C69]">
                      *Administrators have full access to all features
                    </Text>
                    <Text className="font-light text-[#565C69]">
                      *Approve and Review Candidates
                    </Text>
                    <Text className="font-light text-[#565C69]">
                      *Cannot change passwords or make Admin changes
                    </Text>
                  </Box>
                </Group>
              </Box>

</motion.div>
              <Group className="flex gap-5 flex-row  lg:w-full  justify-end  max-lg:justify-center max-lg:gap-x-2 max-lg:p-0 mt-20">
               
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
                  className="bg-white border border-grey-4 hover:border-dotted lg:w-60 text-dark max-lg:w-[40%] max-lg:font-normal max-lg:hidden  "
                  title={breakpoint ? 'Cancel' : 'Save Draft'}
                />

</SlideInAnimation>
                
<SlideInAnimation>

                <PrimaryButton
                  p="xs"
                  fullWidth={false}
                  className="bg-primary-blue border lg:w-60 max-lg:w-full max-lg:font-normal  "
                  title={addUser_mode=="add"?"  Add User":"Edit User"}
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

export default AddUserModal;
