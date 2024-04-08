'use client';
import NewChatModal from '@/app/components/Chat/NewChatModal';
import AddVideoModal from '@/app/components/Edit/AddVideoModal';
// import VerifyAccountModal from '@/app/components/Edit/verifyAccountModal';
import { PostJobModal } from '@/app/components/Employer/PostJobModal';
import AddUserModal from '@/app/components/HomeComps/AddUserModal';
import EditPasswordModal from '@/app/components/HomeComps/EditPasswordModal';
import { Group, Portal, Text } from '@mantine/core';
import { AnimatePresence,motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { createContext, useEffect, useState } from 'react';

import { setUserAgent } from 'react-device-detect';
import SlideInAnimation from './Motion';
import PrimaryButton from '@/app/components/Button';
import { SmallModal } from '@/app/components/SmallModal';
interface AppStateType {
  postVideoMode: boolean | false;
  jobPostStage: number;
  jobPostEmploymentType: 'Full-Time' | 'Contract' | undefined;
  jobWorkSettingType: 'Remote' | 'Hybrid' | 'On-site' | undefined;
  jobPostTitle: string;
  addUser_mode:"add"|"edit"
  tags: any;
  jobPostDescription: any;
  jobPostLocation: string;

  jobPostRequirements?: string;
  jobPostRenumerations: string;
  jobVidThumbNail: any;
  verifyAccStage:number
  addUser_name:string
  addUser_email:string
  chatStage:"chats"|"newChat"|"singleChat"
}
const VerifyAccountModal=dynamic(()=>import('@/app/components/Edit/verifyAccountModal'))


export const UserContext = createContext<any>({});
function EmployerContext({ children }: { children: React.ReactNode }) {
  const [appState, setAppState] = useState<AppStateType>({
    jobPostStage: 1,

    jobPostTitle: '',
    tags: [],
    jobPostDescription: '',
    jobPostLocation: '',
    postVideoMode: false,
    jobPostRequirements: '',
    jobPostRenumerations: '',
    jobPostEmploymentType: undefined,
    jobWorkSettingType: undefined,
    jobVidThumbNail: null,
    verifyAccStage:1,
    addUser_name:"",
    addUser_email:"",
    addUser_mode:"edit",
    chatStage:"chats"
  });
  const [postJobModalOpened, setPostJobModalOpened] = useState<boolean>(false);
  const [addVideoModalOpened, setAddVideoModalOpened] = useState<boolean>(false);
  const[addUserModalOpened,setAddUserModalOpened]= useState<boolean>(false);
  const[verifyModalOpened,setVerifyModalOpened]=useState<boolean>(false)
  const [editPasswordModalOpened,setEditPasswordModalOpened]=useState<boolean>(false)
  const [newChatModalOpened,setnewChatModalOpened]=useState<boolean>(false)
  const [confirmLogoutModal, setConfirmLogoutModal] = useState<boolean>(false);


 
  return (
    <UserContext.Provider
      //@ts-ignore
      value={{ appState, setAppState, postJobModalOpened, setPostJobModalOpened,addVideoModalOpened, setAddVideoModalOpened,
        verifyModalOpened,setVerifyModalOpened,addUserModalOpened,setAddUserModalOpened,editPasswordModalOpened,setEditPasswordModalOpened,newChatModalOpened,setnewChatModalOpened,setConfirmLogoutModal
      }}
    >
      {children}

      {postJobModalOpened && (
        <Portal>
          <PostJobModal
            opened={postJobModalOpened}
            open={open}
            close={() => {
              setPostJobModalOpened(false);
            }}
          />
        </Portal>
      )}

      {addVideoModalOpened&&(
        <Portal>
<AddVideoModal opened={addVideoModalOpened}
open={open}
close={()=>{
  setAddVideoModalOpened(false)
}}
/>
        </Portal>
      )

      }


{verifyModalOpened&&(
  <Portal>

    <VerifyAccountModal
    opened={verifyModalOpened}
    open={open}
    close={()=>{
      setVerifyModalOpened(false)
    }}
    />

  </Portal>
)

}

{addUserModalOpened&&(
  <Portal>

    <AddUserModal
    opened={addUserModalOpened}
    open={open}
    close={()=>{
      setAddUserModalOpened(false)
    }}
    />

  </Portal>
)

}

{editPasswordModalOpened&&(
  <Portal>

    <EditPasswordModal
    opened={editPasswordModalOpened}
    open={open}
    close={()=>{
      setEditPasswordModalOpened(false)
    }}
    />

  </Portal>
)

}


{newChatModalOpened&&(
  <Portal>

    <NewChatModal
    opened={newChatModalOpened}
    open={open}
    close={()=>{
      setnewChatModalOpened(false)
    }}
    />

  </Portal>
)

}


{
    confirmLogoutModal && (
      <Portal>
        <SmallModal
          opened={confirmLogoutModal}
          open={open}
          close={() => {
            setConfirmLogoutModal(false);
          }}
          header={<Text className="font-bold text-2xl">Logout?</Text>}
          content={
            <Text className="font-light mt-[5%] text-lg">
              Are you sure you want to Log out of your account?
            </Text>
          }
          footer={
            <>
            <Group className='flex gap-x-6 mt-[20%] mb-[10%]'>

            <SlideInAnimation>
                <PrimaryButton
                  p="sm"
                  fullWidth={false}
                  onClick={() => {
                    // setAppState({
                    //   ...appState,jobPostStage:1
                    //  })
                    setConfirmLogoutModal(false)
                  }}
                  className="bg-white border border-grey-4 lg:w-[10rem] lg:h-[3rem]  hover:border-dotted text-dark max-lg:w-[40%] max-lg:font-normal  "
                  title="Cancel"
                />
              </SlideInAnimation>

              <SlideInAnimation>
                <PrimaryButton
                  p="xs"
                  fullWidth={false}
                  className="bg-red-700 border lg:w-[10rem] max-lg:w-full lg:h-[3rem] max-lg:font-normal  "
                  title={'Logout'}
                  //   onClick={() => {
                  //    setvid({
                  //  ...
                  //    })

                  //   }}
                />
              </SlideInAnimation>
            </Group>
              
            </>
          }
          
        />
      </Portal>
    )
  }


    </UserContext.Provider>
  );
}



export default EmployerContext;
