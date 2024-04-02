'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Image, Paper, Text } from '@mantine/core';
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

interface UserMessagesProps {
  user?: string;
  message?: React.ReactNode;
  className?: string;
  active?: any;
  userPfp?: string;
}

const UserMessages = ({
  user,
  userPfp,
  message,

  active,
}: UserMessagesProps) => (
  <Box
    className={`flex px-[0.5rem] py-[0.5rem] min-w-[22.5rem] min-h-[5.5rem] gap-x-4 items-center ${
      active ? 'bg-grey' : ''
    }  border-b rounded text-dark-100`}
  >
    <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" />
    {userPfp}
    <Box>
      <Text className="font-bold">Vincent{user}</Text>
      <Text className="text-sm font-light text-grey-3">sup my nigga{message}</Text>
    </Box>
    <Box className="ms-auto">
      <Text className="text-xs font-light text-grey-3 mb-1 ">0:00</Text>
      <Text className="text-sm w-5 min-h-5 rounded-full bg-red-600 text-white  ms-auto flex items-center justify-center">
        2
      </Text>
    </Box>
  </Box>
);

function page() {
  const { setVerifyModalOpened } = useContext(UserContext);
  const [loadedmessages, setLoadedMessages] = useState();


  const [messages, setMessages] = useState([]);

  // Reference to the "messages" collection
  const messagesRef = collection(db, 'messages');

  // Create a query to order messages by createdAt timestamp
  const q = query(messagesRef, orderBy('createdAt'));

  // Use useCollectionData to subscribe to changes in the "messages" collection
  const [messageDocs] = useCollectionData(q, {
    //@ts-ignore
    idField: 'id' });
  // console.log(messageDocs)
  const router = useRouter();

  const [messageText, setMessageText] = useState<any>("");
 
//@ts-ignore
  const { user } = useContext(AuthContext);
  // console.log(user)
  const sendMessage = async (text:any) => {
    try {
      const docRef = await addDoc(collection(db, 'messages'), {
        text: text,
        uuid: user?.uid,

        createdAt: serverTimestamp(),
      });
      getItems()
      setMessageText("")
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleKeyPress=(e:any)=>{
    if(e.charCode!==13 || !messageText) return
    sendMessage(messageText)
    e.preventDefault()
  }


  const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));

   
    const data: any = [];
    querySnapshot?.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setMessages(data);
 
  };

  useEffect(() => {
    getItems();
  }, []); 
  
  // useEffect(() => {
  //   // console.log(messages);
  //   // messages.reverse()
  // }, [messages]);
  return (
    <Box className="min-h-screen">
      <Box className="  max-lg:bg-[#040513] max-lg:full max-lg:min-h-10 lg:hidden flex justify-between items-center text-[#FFFFFFD9] lg:p-5">
        <Link
          href=""
          onClick={(e) => {
            e.preventDefault();
            setVerifyModalOpened(true);
          }}
          className="underline font-normal  ms-[10%] text-sm"
        >
          Verify your profile
        </Link>
        <IconX className="w-6 h-6 me-[2%] cursor-pointer" />
      </Box>

      <Box className="lg:w-[90%] flex max-lg:block max-lg:text-lg mb-5 lg:p-5">
        <Box className=" w-[40%] max-lg:w-full max-lg:p-2 border-e gap-x-3 flex flex-col min-h-screen p-2">
          <Text className="rounded-lg px-[0.5rem] py-[1rem] w-[5.9rem] border border-primary-blue flex items-center h-[2.5rem] justify-center text-primary-blue hover:scale-125 transition cursor-pointer gap-x-2 hover:bg-primary-blue hover:text-white ms-auto group">
            <IconPlus className="text-primary-blue group-hover:text-white" /> New
          </Text>
          <UserMessages />
          <UserMessages />
          <UserMessages />
        </Box>

        <Box className="w-full   overflow-y-auto relative">
          <Box className="flex border-b p-4 text-dark-100 gap-x-2 items-center text-lg capitalize">
            <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" /> Vincent
          </Box>
          <Box className="flex flex-col content-evenly p-4 mb-[30%]">
           { //@ts-ignore
            <Reciever/>}
            {messageDocs&&messageDocs?.map((message)=>(
<>
<Sender name={user?.displayName} text={message?.text} avatar={user?.photoURL}/>
</>
              ))
            }
          
          </Box>
          <Box className="flex gap-3 flex-row z-10 fixed bottom-0 w-[60%] ms-4 p-4 border-t bg-white">
            <Box className="relative w-[95%]">
              <form onSubmit={sendMessage}
              onKeyDown={handleKeyPress}
              >
                <input
                  value={messageText}
                  onChange={(e) => {
                    setMessageText(e.target.value);
                  }}
                  className="min-h-8 w-[95%]  text-dark-100 border border-dark-100 rounded-lg p-4"
                  placeholder="Write a message"
                />
                <IconPaperclip className="absolute right-[7%] top-[15%] text-slate-400 hover:skew-x-2 transition" />
              </form>
            </Box>

            <Box
              type="submit"
              component="button"
              onClick={() => {
                sendMessage(messageText);
              }}
              className="w-14 h-14 flex items-center bg-primary-blue justify-center group rounded-full"
            >
              <IconSend className="text-white group-hover:rotate-180 transition-all scale-125 " />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
