'use client';
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
import VerifyAccStage1 from '../VerifyAccount/VerifyAccStage1';

import VerifyAccStage5 from '../VerifyAccount/VerifyAccStage5';
import VerifyAccCAC from '../VerifyAccount/VerifyAccStage2';
import VerifyAccID from '../VerifyAccount/VerifyAccStage3';

import VerifyAccSelfie from '../VerifyAccount/VerifyAccStage4';

export interface VerifyAccountModalType {
  opened: boolean;
  open: () => void;
  close: Dispatch<SetStateAction<boolean>> | any;
}



function VerifyAccountModal({ opened, open, close }: VerifyAccountModalType) {

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  const { appState, setAppState } = useContext(UserContext);

  const { verifyAccStage } = appState;

  const breakpoint = useMediaQuery('(min-width: 56.25em)');

  console.log(verifyAccStage);
  const getVerifyAccState = (stage: number) => {
    switch (stage) {
      case 1:
        return <VerifyAccStage1 />;
      case 2:
        return <VerifyAccCAC />;
      case 3:
        return <VerifyAccID />;
      case 4:
        return <VerifyAccSelfie />;
      case 5:
        return <VerifyAccStage5 />;
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
        transitionProps={{ transition: 'rotate-left' }}
        closeOnEscape
        pos={'relative'}
      >
        <Modal.Overlay />
        <Modal.Content ref={scrollableRef}
        
        >
          <Modal.Header className="lg:bg-light-blue lg:min-h-[8.875rem] max-lg:h-[6rem]  max-lg:bg-white max-lg:relative">
            <Modal.Title className="lg:flex justify-between max-lg:w-full lg:w-full lg:p-5 ">
              {/* large screen */}
              <Box className="max-lg:hidden flex justify-between w-full mt--1 ">
                <Text className="font-bold text-dark text-2xl ">Verify your Account</Text>
                <Modal.CloseButton className=" max-lg:hidden " />
              </Box>

              <div className="max-lg:border-b   lg:hidden w-full">
                <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
                  <IconChevronLeft className="text-3xl" onClick={close} />
                  <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">Verify Your Account</Text>
                  <IconChevronLeft className="text-3xl opacity-0" />
                </Group>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {getVerifyAccState(verifyAccStage)}

            {verifyAccStage > 1 && (
              <Group className="flex gap-5 flex-row  lg:w-full  justify-end  max-lg:justify-center max-lg:gap-x-2 max-lg:p-0 mt-20">
                <PrimaryButton
                  p="sm"
                  fullWidth={false}
                  onClick={() => {
                    
                    setAppState({
                      ...appState,verifyAccStage:1
                    })
                  }}
                  className="bg-white border border-grey-4 hover:border-dotted lg:w-60 text-dark max-lg:w-[40%] max-lg:font-normal max-lg:hidden  "
                  title={ 'Cancel' }
                />
                <PrimaryButton
                  p="xs"
                  fullWidth={false}
                  className="bg-primary-blue border lg:w-60 max-lg:w-full max-lg:font-normal  "
                  title="  Save"
                  onClick={() => {
                    setAppState({
                      ...appState,
                      verifyAccStage: verifyAccStage+1,
                    });
                    
                  }}
                />
              </Group>
            )}
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}

export default VerifyAccountModal;
