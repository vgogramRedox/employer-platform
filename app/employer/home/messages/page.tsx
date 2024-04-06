'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Autocomplete, Box, FileButton, Group, Image, Input, Paper, Text } from '@mantine/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from '@/config/firebase';

import { IconPaperclip, IconPlus, IconSend, IconStar, IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { UserContext } from '@/context/EmployerContext';
import { useRouter } from 'next/navigation';
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from '@/context/AuthContext';
import Reciever from '@/app/components/Chat/Reciever';
import Sender from '@/app/components/Chat/Sender';
import { IconChevronLeft } from '@tabler/icons-react';

interface UserMessagesProps {
  user?: string;
  message?: React.ReactNode;
  className?: string;
  active?: any;
  userPfp?: string;
  onClick?: () => void;
}

const messagesDemo = [
  {
    name: ' Tolu Olupe',
    text: 'I am on my way to my shift!',
    avatar: '/svgs/person.svg',
  },
  {
    name: ' Tolu Olupe',
    text: 'I am on my way to my shift!',
    avatar: '/svgs/person.svg',
  },

  {
    name: ' Tolu Olupe',
    text: 'I am on my way to my shift!',
    avatar: '/svgs/person.svg',
  },

  {
    name: ' Tolu Olupe',
    text: 'I am on my way to my shift!',
    avatar: '/svgs/person.svg',
  },
];

const UserMessages = ({
  user,
  userPfp,
  message,

  active,
  onClick,
}: UserMessagesProps) => (
  <Box
    onClick={onClick}
    className={`flex px-[0.5rem] p-5 py-[0.5rem] hover:border-0 cursor-pointer hover:rounded lg:min-w-[22.5rem] max-lg:w-full  min-h-[5.5rem] gap-x-4 items-center hover:bg-grey-6 ${
      active ? 'bg-grey-6 rounded' : ''
    }  border-b rounded text-dark-100`}
  >
    <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" />
    {userPfp}
    <Box>
      <Text className="font-bold">Tolu Olupe{user}</Text>
      <Text className="text-sm font-light text-grey-3">I am on my way to my shift!{message}</Text>
    </Box>
    <Box className="ms-auto me-[1.69rem]">
      <Text className="text-xs font-light text-grey-3 mb-1 ">0:00</Text>
      <Text className="text-sm w-5 min-h-5 rounded-full bg-red-600 text-white  ms-auto flex items-center justify-center">
        2
      </Text>
    </Box>
  </Box>
);

function page() {
  const { setnewChatModalOpened } = useContext(UserContext);
  const [loadedmessages, setLoadedMessages] = useState();

  const [messages, setMessages] = useState([]);

  // Reference to the "messages" collection
  const messagesRef = collection(db, 'messages');

  // Create a query to order messages by createdAt timestamp
  const q = query(messagesRef, orderBy('createdAt'));

  const [messageDocs] = useCollectionData(q, {
    //@ts-ignore
    idField: 'id',
  });
  // console.log(messageDocs)
  const router = useRouter();

  const [messageText, setMessageText] = useState<any>('');

  //@ts-ignore
  const { user, setNewChatModalOpened, appState, setAppState } = useContext(AuthContext);
  // const {chatStage}=appState
  // console.log(user)
  const sendMessage = async (text: any) => {
    try {
      const docRef = await addDoc(collection(db, 'messages'), {
        text: text,
        uuid: user?.uid,

        createdAt: serverTimestamp(),
      });
      getItems();
      setMessageText('');
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.charCode !== 13 || !messageText) return;
    sendMessage(messageText);
    e.preventDefault();
  };

  const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'messages'));

    const data: any = [];
    querySnapshot?.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setMessages(data);
  };
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    getItems();
  }, []);

  // useEffect(() => {
  //   // console.log(messages);
  //   // messages.reverse()
  // }, [messages]);
  return (
    <Box className="min-h-screen">
      <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[5.7rem] flex items-end shadow">
        <Group className="max-md:justify-between lg:hidden flex max-md:w-[100%] items-center">
          <IconChevronLeft
            className="text-3xl"
            onClick={() => {
              router.back();
            }}
          />
          <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">Messages</Text>
          <IconChevronLeft className="text-3xl opacity-0" />
        </Group>
      </div>

      <Box className=" flex max-lg:block max-lg:text-lg mb-5  ms-auto">
        <Box className=" w-[30%] max-lg:w-full max-lg:p-2 border-e gap-x-3 flex flex-col min-h-screen lg:p-2 ">
          <Text
            className="mb-[1.12rem] rounded-lg px-[0.5rem] py-[1rem]  lg:w-[5.9rem] border border-primary-blue flex items-center h-[2.5rem] justify-center text-primary-blue hover:scale-125 transition cursor-pointer gap-x-2 hover:bg-primary-blue hover:text-white ms-auto group max-lg:mt-[1.19rem]"
            onClick={() => {
              setnewChatModalOpened(true);
            }}
          >
            <IconPlus className="text-primary-blue group-hover:text-white " />{' '}
            <Text className="max-lg:hidden"> New</Text>
          </Text>
          <UserMessages
            onClick={() => {
              setNewChatModalOpened(true);
              setAppState({
                ...appState,
                chatStage: 'singleChat',
              });
            }}
          />
          <UserMessages />
          <UserMessages />
        </Box>

        <Box className=" w-[70%] ms-[0.94rem] max-lg:hidden">
          <Box className="flex border-b p-4  text-dark-100 gap-x-2 items-center text-lg capitalize w-full">
            <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" /> Vincent
          </Box>
          <Box className="flex flex-col content-evenly p-4 mb-[30%] w-full">
            {
              //@ts-ignore
            }
            {messagesDemo &&
              messagesDemo?.map((message) => (
                <>
                  <Reciever name={message?.name} text={message?.text} avatar={message?.avatar} />
                  <Sender name={message?.name} text={message?.text} avatar={message?.avatar} />
                </>
              ))}
          </Box>
          <Box className="z-10 fixed bottom-0 w-[60%] ms-4 p-4 border-t bg-white">
            <Box className=" flex gap-x-3  flex-row ">
              <form
                onSubmit={sendMessage}
                onKeyDown={handleKeyPress}
                className="relative min-h-8  min-w-[88%] "
              >
                <input
                  value={messageText}
                  onChange={(e) => {
                    setMessageText(e.target.value);
                  }}
                  className="min-h-8 text-dark-100 border w-full border-grey-8 rounded-lg p-4"
                  placeholder="Write a message"
                />

                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                  {(props) => (
                    <Image
                      {...props}
                      src="/svgs/clip.svg"
                      className=" absolute left-[95%] bottom-[26%] w-6 h-6"
                    />
                  )}
                </FileButton>
              </form>

              <Box
                type="submit"
                component="button"
                onClick={() => {
                  sendMessage(messageText);
                }}
                className="w-14 h-14 flex items-center bg-primary-blue justify-center group rounded-full"
              >
                <IconSend className="text-white group-hover:rotate-[10deg] transition-all  " />
              </Box>
            </Box>

            {/* <Input
            h={50}
            placeholder="" className=' min-w-[75%]  rounded-lg p-4 min-h-14   border-grey-8'   rightSection={<IconPaperclip/>}/> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
