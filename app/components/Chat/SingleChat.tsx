import { Box, FileButton, Image } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react';
import Reciever from './Reciever';
import Sender from './Sender';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { UserContext } from '@/context/EmployerContext';
import { IconSend } from '@tabler/icons-react';

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

function SingleChat() {
  const [messages, setMessages] = useState([]);
  const {user}=useContext(UserContext)
  const [messageText, setMessageText] = useState<any>("");
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
    querySnapshot?.forEach((doc:any) => {
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
    <Box className="min-h-screen   w-full">
      <Box className="flex border-b p-4  text-dark-100 gap-x-2 items-center text-lg capitalize w-full">
        <Image className="w-[2.5rem] h-[2.5rem]" src="/svgs/person.svg" /> Vincent
      </Box>
      <Box className="flex flex-col content-evenly p-4 w-full  overflow-y-auto" style={{ maxHeight: 'calc(100% - 250px)' }}>
    
        {messagesDemo &&
          messagesDemo?.map((message) => (
            <>
              <Reciever name={message?.name} text={message?.text} avatar={message?.avatar} />
              <Sender name={message?.name} text={message?.text} avatar={message?.avatar} />
            </>
          ))}
      </Box>
      <Box className="z-10 absolute bottom-0 w-full  p-4 border-t bg-white">
        <Box className=" flex gap-x-  flex-row ">
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
                  className=" absolute left-[95%] bottom-[26%] w-3 h-5"
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
            className="w-14 h-14 flex items-center  bg-primary-blue justify-center group rounded-full
            
            "
          >
            <IconSend className="text-white group-hover:rotate-[10deg] transition-all w-6  h-6 " />
          </Box>
        </Box>

        {/* <Input
      h={50}
      placeholder="" className=' min-w-[75%]  rounded-lg p-4 min-h-14   border-grey-8'   rightSection={<IconPaperclip/>}/> */}
      </Box>
    </Box>
  );
}

export default SingleChat;
