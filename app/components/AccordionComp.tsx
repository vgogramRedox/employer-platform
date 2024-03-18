"use client"
import { Accordion } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';

interface AccordiontType{
    title:string
    description:string
    key:any
}
export default function AccordionComp({
    title,description,key
}:AccordiontType) {
  // See groceries data above
 

  return (
    <Accordion defaultValue="Apples">
     <Accordion.Item key={key} value={title}>
      <Accordion.Control icon={<IconBriefcase style={{color:"#7F0DF1"}}/>}>{title}</Accordion.Control>
      <Accordion.Panel>{description}</Accordion.Panel>
    </Accordion.Item>
    </Accordion>
  );
}