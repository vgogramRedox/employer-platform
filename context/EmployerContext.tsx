'use client';
import AddVideoModal from '@/app/components/Edit/AddVideoModal';
// import VerifyAccountModal from '@/app/components/Edit/verifyAccountModal';
import { PostJobModal } from '@/app/components/Employer/PostJobModal';
import AddUserModal from '@/app/components/HomeComps/AddUserModal';
import EditPasswordModal from '@/app/components/HomeComps/EditPasswordModal';
import { Portal } from '@mantine/core';
import { AnimatePresence,motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { createContext, useState } from 'react';
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
    addUser_mode:"edit"
  });
  const [postJobModalOpened, setPostJobModalOpened] = useState<boolean>(false);
  const [addVideoModalOpened, setAddVideoModalOpened] = useState<boolean>(false);
  const[addUserModalOpened,setAddUserModalOpened]= useState<boolean>(false);
  const[verifyModalOpened,setVerifyModalOpened]=useState<boolean>(false)
  const [editPasswordModalOpened,setEditPasswordModalOpened]=useState<boolean>(false)
  return (
    <UserContext.Provider
      //@ts-ignore
      value={{ appState, setAppState, postJobModalOpened, setPostJobModalOpened,addVideoModalOpened, setAddVideoModalOpened,
        verifyModalOpened,setVerifyModalOpened,addUserModalOpened,setAddUserModalOpened,editPasswordModalOpened,setEditPasswordModalOpened
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


    </UserContext.Provider>
  );
}



export default EmployerContext;
