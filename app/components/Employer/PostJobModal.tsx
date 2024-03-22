import { Modal,  Group } from '@mantine/core';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import PrimaryButton from '../Button';

import PostJobStage1 from './PostJobStage1';
import PostJobStage2 from './PostJobStage2';
import { UserContext } from '@/context/EmployerContext';
import { useMediaQuery } from '@mantine/hooks';

interface PostJobModalType {
  opened: boolean;
  open: () => void;
  close: Dispatch<SetStateAction<boolean>> | any;
}
export function PostJobModal({ opened, open, close }: PostJobModalType) {

 const {appState,setAppState} = useContext(UserContext)

//  console.log(appState)
 const breakpoint=useMediaQuery('(min-width: 56.25em)');
  const setter = (
    <Group className="flex gap-5 flex-row mt-5 lg:w-full  justify-end  max-lg:justify-center max-lg:gap-x-2 max-lg:p-0">
      <PrimaryButton
      p="sm"
       fullWidth={false}
         onClick={()=>{
          setAppState({
            ...appState,jobPostStage:1
           })
          close()
        }}

        className="bg-white border border-grey-4 hover:border-dotted lg:w-60 text-dark max-lg:w-[40%] max-lg:font-normal  "
        title={breakpoint?"Cancel":"Save Draft"}
      />
      <PrimaryButton
       p="xs"
      fullWidth={false}
        className="bg-primary-blue border lg:w-60 max-lg:w-[40%] max-lg:font-normal  "
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
