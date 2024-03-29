import { Paper, Tabs, rem } from '@mantine/core';
import { useState } from 'react';

import Link from 'next/link';
import PaperComp from '../Paper';
import GeneralTab from './GeneralTab';
import NotificationsTab from './NotificationsTab';
import SecurityTab from './SecurityTab';
interface SettingsTabs{
  className:string
}

export default function SettingsTabs({className}:SettingsTabs) {

  const [activeTab, setActiveTab] = useState<string | null>('general');
  // console.log(activeTab)
  return (
    <Tabs value={activeTab} h={20} onChange={setActiveTab} color='primary' className={`max-lg:text-sm ${className}  `}>
      <Tabs.List className='lg:min-w-[31rem] lg:w-[33rem] lg:max-w-[100%] max-md:min-w-full md:w-[90%] mb-10 '>
        <Tabs.Tab value="general" className={` lg:text-xl  lg:min-w-[10.46319rem] ${activeTab=="active"?"text-primary-blue ":"text-grey-3"}`} >
          General
        </Tabs.Tab>
        <Tabs.Tab value="notifications" className={`lg:text-xl  lg:min-w-[10.46319rem] ${activeTab=="completed"?"text-primary-blue ":"text-grey-3"}`} >
          Notifications
        </Tabs.Tab>
        <Tabs.Tab value="security" className={`lg:text-xl   lg:min-w-[10.46319rem] ${activeTab=="drafts"?"text-primary-blue ":"text-grey-3"}`}  >
          Security
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="general" className='w-full lg:p-10 '>
        
        <GeneralTab/>
     
     
      </Tabs.Panel>

      <Tabs.Panel value="notifications" className='lg:p-10'>

       <NotificationsTab/>
       
      </Tabs.Panel>

      <Tabs.Panel value="security">
    <SecurityTab/>
     
      </Tabs.Panel>
    </Tabs>
  );
}