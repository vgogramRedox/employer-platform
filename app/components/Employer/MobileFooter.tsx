"use client"
import { Anchor, Group, ActionIcon, rem, AppShellFooter, Image } from '@mantine/core';

import classes from '@/styles/NavbarSimple.module.css';
import { useState } from 'react';

const links = [
  { link: '.employer', label: 'Home', icon: '/images/home-house.svg' },
  { link: '', label: ' Jobs', icon: '/images/workBag.svg' },
  { link: '', label: 'Talent', icon: '/images/userGroup.svg' },
  { link: '', label: 'Profile', icon: '/images/userIconBlack.svg' },
];




export function MobileFooter() {
  const [active,setActive]=useState<string>('Home')

  const items = links.map((item) => (
    <Anchor
      c="dimmed"
      key={item.label}
      href={item.link}
      lh={1}
      data-active={item.label === active || undefined}
      onClick={(event) => {
        
        
        event.preventDefault()
      setActive(item.label )
      }}
     
    >
      <Image src={item.icon} className={`w-7 m-auto  `} />
      <span className="font-normal text-[1rem] text-grey-2 p-0 mt-2">{item.label}</span>
      {item?.label == active && (
        <span className="font-normal text-[1rem] text-grey-2 bg-primary-blue min-h-[2.91rem] rounded-s-[0.25rem] min-w-[0.625rem] ms-auto"></span>
      )}
    </Anchor>
  ));

  return (
    <footer className='fixed bottom-0 z-10 min-h-20 lg:hidden bg-white w-full text-center mt-5'>
<Group className='flex justify-evenly mx-auto align-middle items-center p-3'>
{items}
</Group>


    </footer>
  );
}