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

const messagesDemo=[
    {
      name:" Tolu Olupe",
      text:"I am on my way to my shift!",
      avatar:"/svgs/person.svg"
  },
  {
    name:" Tolu Olupe",
    text:"I am on my way to my shift!",
    avatar:"/svgs/person.svg"
  },
  
  {
    name:" Tolu Olupe",
    text:"I am on my way to my shift!",
    avatar:"/svgs/person.svg"
  },
  
  {
    name:" Tolu Olupe",
    text:"I am on my way to my shift!",
    avatar:"/svgs/person.svg"
  }
  ]
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
    const [file, setFile] = useState<File | null>(null);
    useEffect(() => {
      getItems();
    }, []); 
    
  return (
    <Box className="min-h-screen lg:hidden">
    <div className="max-lg:border-b max-lg:w-full  lg:hidden w-full max-lg:h-[5.7rem] flex items-end shadow">
              <Group className="max-md:justify-between lg:hidden flex max-lg:w-[100%] items-center">
                <IconChevronLeft className="text-3xl" onClick={()=>{
                  router.back()
                }} />
                <Text className=" text-dark text-lg  font-semibold  max-lg:text-[1rem] ">Messages</Text>
                <IconChevronLeft className="text-3xl opacity-0" />
              </Group>
            </div>

            <Box>
            <Box className="flex flex-col content-evenly p-4 mb-[30%] w-full">
           { //@ts-ignore
           }
            {messagesDemo&&messagesDemo?.map((message)=>(
<>
<Reciever name={message?.name} text={message?.text} avatar={message?.avatar} />
<Sender name={message?.name} text={message?.text} avatar={message?.avatar}/>
</>
              ))
            }
          
          </Box>
          <Box className="z-10 fixed bottom-0 w-[60%] ms-4 p-4 border-t bg-white">
            <Box className=" flex gap-x-3  flex-row ">
              <form onSubmit={sendMessage}
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
          {(props) =>  <Image {...props} src="/svgs/clip.svg" className=' absolute left-[95%] bottom-[26%] w-6 h-6'/>}
        </FileButton>
               
                
                
              </form>

              <Box
              type="submit"
              component="button"
            //   onClick={() => {
            //     sendMessage(messageText);
            //   }}
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
  )
}

export default page