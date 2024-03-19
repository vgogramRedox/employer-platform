import { Paper, Tabs, rem } from '@mantine/core';
import { useState } from 'react';
import PaperComp from './Paper';
import Link from 'next/link';


export default function Tab() {

  const [activeTab, setActiveTab] = useState<string | null>('active');
  // console.log(activeTab)
  return (
    <Tabs value={activeTab} h={20} onChange={setActiveTab} color='primary' className='max-lg:text-sm'>
      <Tabs.List className='lg:min-w-[31rem] lg:w-[33rem] lg:max-w-[100%] max-md:min-w-full md:w-[90%] mb-10'>
        <Tabs.Tab value="active" className={` lg:text-xl  lg:min-w-[10.46319rem] ${activeTab=="active"?"text-primary-blue ":"text-grey-3"}`} >
          Active
        </Tabs.Tab>
        <Tabs.Tab value="completed" className={`lg:text-xl  lg:min-w-[10.46319rem] ${activeTab=="completed"?"text-primary-blue ":"text-grey-3"}`} >
          Completed
        </Tabs.Tab>
        <Tabs.Tab value="drafts" className={`lg:text-xl   lg:min-w-[10.46319rem] ${activeTab=="drafts"?"text-primary-blue ":"text-grey-3"}`}  >
          Drafts
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="active" className='w-full '>
        
        <PaperComp/>
       
    
        <PaperComp/>
     
     
      </Tabs.Panel>

      <Tabs.Panel value="completed">

        <PaperComp/>
       
      </Tabs.Panel>

      <Tabs.Panel value="drafts">
      <PaperComp/>
     
      </Tabs.Panel>
    </Tabs>
  );
}