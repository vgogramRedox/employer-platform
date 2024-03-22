'use client';
import React, { createContext, useState } from 'react';
interface AppStateType {
  postVideoMode: boolean | false;
  jobPostStage: number;
jobPostEmploymentType:'Full-Time'| 'Contract'|undefined
jobWorkSettingType:'Remote'| 'Hybrid'|'On-site'|undefined
  jobPostTitle: string;

  tags: any;
  jobPostDescription: any;
  jobPostLocation: string;

  jobPostRequirements?: string;
  jobPostRenumerations: string;
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
    jobPostEmploymentType:undefined,
jobWorkSettingType:undefined
  });

  return (
    <UserContext.Provider
      //@ts-ignore
      value={{ appState, setAppState }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default EmployerContext;
