import { Autocomplete, Box, Group, Image, Text } from '@mantine/core';
import React, { useContext } from 'react'
import PrimaryButton from '../Button';
import { IconCheck } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/EmployerContext';


interface UserMessagesProps {
    user?: string;
    message?: React.ReactNode;
    className?: string;
    active?: any;
    userPfp?: string;
    onClick?: () => void;
  }
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
export function Chats() {
    const router = useRouter();
    const{setNewChatModalOpened}=useContext(UserContext)
    const { appState, setAppState, setnewChatModalOpened } = useContext(UserContext);
  return (
    <Box className="max-lg:w-[95%] mx-auto">
    <Group>
                    <Autocomplete
                      className={` w-full   min-h-10 p-[0.5rem] mt-[1.12rem] rounded-[0.5rem] text-lg text-grey-4 mx-auto `}
                      // placeholder="Search"
                      leftSectionWidth={'70%'}
                      leftSection={
                        <Box className="flex  items-center text-[1rem] text-dark-100 ms-[0.1rem]">
                          <Text className="flex">To :</Text>
                          <IconSearch
                            style={{ color: '#BDC0CE' }}
                            className="w-6 h-6 text-grey-4 ms-[1.8rem]"
                            stroke={1.5}
                          />{' '}
                          <Text className="text-grey-4 ms-2">Search</Text>
                        </Box>
                      }
                      data={['']}
                    />
                  </Group>
    
                  <Box className="min-h-[30%] ">
                    <UserMessages
                      onClick={() => {
                        setAppState({
                          ...appState,
                          chatStage: 'singleChat',
                        });
                      }}
                    />
                    <UserMessages
                     onClick={() => {
                      setAppState({
                        ...appState,
                        chatStage: 'singleChat',
                      });
                    }}
                    />
                    <UserMessages
                    onClick={() => {
                      setAppState({
                        ...appState,
                        chatStage: 'singleChat',
                      });
                    }}
                    />
                  </Box>
                  <Box className="w-full mt-[2.6rem]">
                    <PrimaryButton
                     onClick={() => {
                      router.push('/employer/home/messages/mobile');
                      setNewChatModalOpened(false);
                    }}
                      p="0"
                      className=" h-12 bg-primary-blue text-lg mx-auto text-center"
                      title="Message"
                    />
                  </Box>
    </Box>
  )
}

export default Chats