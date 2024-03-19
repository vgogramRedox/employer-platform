"use client"
import { Accordion, Group } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';

interface AccordiontType{
    title:string
    description:string
    key:any
    className?:string
}
export default function AccordionComp({
    title,description,key,className
}:AccordiontType) {
  // See groceries data above
 

  return (<Group component="div" bg={'primary.10'}>

 
    <Accordion defaultValue="Apples" className={`${className}`}>
     <Accordion.Item key={key} value={title}>
      <Accordion.Control icon={<IconBriefcase style={{color:"#7F0DF1"}}/>}>{title}</Accordion.Control>
      <Accordion.Panel>{description}</Accordion.Panel>
    </Accordion.Item>
    </Accordion>
    </Group>
  );
}