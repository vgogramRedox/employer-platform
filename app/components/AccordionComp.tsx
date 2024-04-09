"use client"
import { Accordion, Box, Group, Text } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';

interface AccordiontType{
    jobTitle:string
    description:string
    key:any
    className?:string
    company?:string
}
export default function AccordionComp({
  jobTitle,description,key,className,company
}:AccordiontType) {
  // See groceries data above
 

  return (<Group component="div" bg={'primary.10'}>

 
    <Accordion defaultValue="Apples" className={`${className} w-full`}>
     <Accordion.Item key={key} value={jobTitle}>
      <Accordion.Control icon={<IconBriefcase className='rounded-full w-11 h-11 lg:p-2 max-lg:w-6 max-lg:h-6 bg-[#E0E7EB] text-[#7F0DF1]' />}>
        <Text className="capitalize"> {jobTitle}</Text>
        <Box className='flex items-center gap-x-4 mt-1'>
        <Text className="capitalize "> {company}</Text>  <Text className='font-light text-sm text-black'> | Feb 2016-July 2019</Text>  
        </Box>
        
        </Accordion.Control>
      <Accordion.Panel>
        <Box className="lg:ms-[6.8%] font-light">
        {description}

        </Box>
        </Accordion.Panel>
    </Accordion.Item>
    </Accordion>
    </Group>
  );
}