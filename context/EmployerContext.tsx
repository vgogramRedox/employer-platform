'use client';
import AddVideoModal from '@/app/components/Edit/AddVideoModal';
import { PostJobModal } from '@/app/components/Employer/PostJobModal';
import { Portal } from '@mantine/core';
import React, { createContext, useState } from 'react';
interface AppStateType {
  postVideoMode: boolean | false;
  jobPostStage: number;
  jobPostEmploymentType: 'Full-Time' | 'Contract' | undefined;
  jobWorkSettingType: 'Remote' | 'Hybrid' | 'On-site' | undefined;
  jobPostTitle: string;

  tags: any;
  jobPostDescription: any;
  jobPostLocation: string;

  jobPostRequirements?: string;
  jobPostRenumerations: string;
  jobVidThumbNail: any;
}
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
    jobVidThumbNail: null
  });
  const [postJobModalOpened, setPostJobModalOpened] = useState(false);
  const [addVideoModalOpened, setAddVideoModalOpened] = useState(false);
  return (
    <UserContext.Provider
      //@ts-ignore
      value={{ appState, setAppState, postJobModalOpened, setPostJobModalOpened,addVideoModalOpened, setAddVideoModalOpened }}
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
    </UserContext.Provider>
  );
}

export default EmployerContext;
