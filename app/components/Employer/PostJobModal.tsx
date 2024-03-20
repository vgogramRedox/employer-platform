import { Modal, Button, Box, Text, Group } from '@mantine/core';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import PrimaryButton from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { BadgeComp } from '../BadgeComp';
import { EmploymentType, WorkSettingType } from '@/types/app';
import { DropZone } from '../DropZone';
import MultiSelectComp from '../MultiSelectComp';
import PostJobStage1 from './PostJobStage1';
import PostJobStage2 from './PostJobStage2';
import { UserContext } from '@/context/EmployerContext';

interface PostJobModalType {
  opened: boolean;
  open: () => void;
  close: Dispatch<SetStateAction<boolean>> | any;
}
export function PostJobModal({ opened, open, close }: PostJobModalType) {

 const {appState,setAppState} = useContext(UserContext)
 console.log(appState)
  const setter = (
    <Group className="flex gap-5 flex-row mt-5 lg:w-full  justify-end ">
      <PrimaryButton
         onClick={()=>{
          setAppState({
            ...appState,jobPostStage:1
           })
          close()
        }}

        className="bg-white border border-grey-4 hover:border-dotted w-60 text-dark "
        title="Cancel"
      />
      <PrimaryButton
        className="bg-primary-blue border w-60"
        title="  Post"
        onClick={() => {
         setAppState({
          ...appState,jobPostStage:2
         })
        
        }}
      />
    </Group>
  );

  const getJobStage = (stage: number) => {
    switch (stage) {
      case 1:
        return <PostJobStage1 setter={setter} />;

      case 2:
        return <PostJobStage2 setter={setter} />;

      default:
        return <PostJobStage1 setter={setter} />;
    }
  };

  

  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        // title="This is a fullscreen modal"
        p={0}
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200, timingFunction: 'linear' }}
        closeOnEscape
        pos={'relative'}
      >
        <Modal.Overlay />
        {getJobStage(appState?.jobPostStage)}
      </Modal.Root>
    </>
  );
}
