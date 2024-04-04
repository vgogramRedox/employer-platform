import { Paper, Tabs, rem } from '@mantine/core';
import { useState } from 'react';
import PaperComp from './Paper';
import Link from 'next/link';


export default function Tab() {

  const [activeTab, setActiveTab] = useState<string | null>('active');
  // console.log(activeTab)
  return (
    <Tabs value={activeTab} h={20} onChange={setActiveTab} color='primary' className='max-lg:text-sm lg:mt-5'>
      <Tabs.List className='lg:min-w-[31rem] lg:w-[31.46rem] lg:max-w-[100%] max-md:min-w-full md:w-[90%] mb-10 max-lg:justify-center md:text-center '>
        <Tabs.Tab value="active" className={`max-lg:w-[33%] lg:text-[1rem] max-lg:text-lg lg:min-w-[10.46319rem] ${activeTab=="active"?"text-primary-blue ":"text-grey-3"}`} >
          Active
        </Tabs.Tab>
        <Tabs.Tab value="completed" className={`lg:text-[1rem] max-lg:w-[33%] max-lg:text-lg   lg:min-w-[10.46319rem] ${activeTab=="completed"?"text-primary-blue ":"text-grey-3"}`} >
          Completed
        </Tabs.Tab>
        <Tabs.Tab value="drafts" className={`lg:text-[1rem] max-lg:w-[33%] max-lg:text-lg   lg:min-w-[10.46319rem] ${activeTab=="drafts"?"text-primary-blue ":"text-grey-3"}`}  >
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