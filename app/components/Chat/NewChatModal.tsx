'use client';
import { Modal, Box, Text, Group, Image, Autocomplete } from '@mantine/core';
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
import { useRouter } from 'next/navigation';
import { IconSearch } from '@tabler/icons-react';
import { IconCheck } from '@tabler/icons-react';
import Chats from './Chats';
import SingleChat from './SingleChat';

interface UserMessagesProps {
  user?: string;
  message?: React.ReactNode;
  className?: string;
  active?: any;
  userPfp?: string;
  onClick?: () => void;
}

export interface addVideoModalType {
  opened: boolean;
  open: () => void;
  close: Dispatch<SetStateAction<boolean>> | any;
}
function NewChatModal({ opened, open, close }: addVideoModalType) {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  // const [postVideoMode,setPostVideoMode]=useState<boolean>(false)
  const { appState, setAppState, setnewChatModalOpened } = useContext(UserContext);
  const { chatStage } = appState;

  const breakpoint = useMediaQuery('(min-width: 56.25em)');

  // console.log(appState);
  const router = useRouter();
  const UserMessages = ({
    user,
    userPfp,
    message,

    active,
    onClick,
  }: UserMessagesProps) => (
    <Box
      onClick={onClick}
      className={`flex    hover:border-0 cursor-pointer hover:rounded lg:min-w-[22.5rem] max-lg:w-full  min-h-[5rem]  gap-x-4 items-center hover:bg-grey-6 ${
        active ? 'bg-grey-6 rounded' : ''
      }  border-b rounded text-dark-100`}
    >
      <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" />
      {userPfp}
      <Box>
        <Text className=" text-dark-100 font-light text-sm">Tolu Olupe{user}</Text>
      </Box>
      <Box className="ms-auto ">
        <IconCheck color="#303237" className="w-6 h-6" />
      </Box>
    </Box>
  );

  const getStage = (messageStage: string) => {
    switch (messageStage) {
      case 'chats':
        return <Chats />;

      case 'newChat':
        return <Chats />;

        case 'singleChat':
          return <SingleChat />;
      default:
        <SingleChat />;
    }
  };
  const handleCloseStage = () => {
    if (chatStage == 'chats') {
      // setAppState({
      //     ...appState,
      // })
      setnewChatModalOpened(false);
    }

    if (chatStage == 'newChat') {
      setAppState({
        ...appState,
        chatStage: 'chats',
      });
    }

    if (chatStage == 'singleChat') {
      setAppState({
        ...appState,
        chatStage: 'chats',
      });
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
          <Modal.Header className="  max-lg:bg-white  shadow max-lg:border-b">
            <Modal.Title className="  ">
              <Box className="max-lg:justify-between max-lg:w-full lg:hidden items-end  max-lg:h-[3.65rem] flex">
                <IconChevronLeft
                  className="text-3xl"
                  onClick={() => {
                    handleCloseStage();
                  }}
                />
                <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">
                  {chatStage == 'chats' ? 'Messages' : 'New Message'}
                </Text>
                <IconChevronLeft className="text-3xl opacity-0" />
              </Box>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{getStage(chatStage)}</Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}

export default NewChatModal;
