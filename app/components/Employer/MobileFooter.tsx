"use client"
import { Anchor, Group, ActionIcon, rem, AppShellFooter, Image } from '@mantine/core';

import classes from '@/styles/NavbarSimple.module.css';
import { useState } from 'react';

const links = [
  { link: '/employer', label: 'Home', icon: '/images/home-house.svg',activeIcon:"/images/home-house-active.svg" },
  { link: '', label: ' Jobs', icon: '/images/workBag.svg',activeIcon:"/images/workBagActive.svg" },
  { link: '', label: 'Post', icon: '/images/add-circle-plus.svg',activeIcon:"/images/add-circle-plus-active.svg" },
  { link: '', label: 'Talent', icon: '/images/userGroup.svg',activeIcon:"/images/userGroupActive.svg" },
  { link: '', label: 'Profile', icon: '/images/userIconBlack.svg',activeIcon:"/images/userIconActive.svg" },
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

{item?.label == active && (
        <Image src="/images/indicatorOn.svg"/>
      )}
      {
        item?.label==active?(      <Image src={item.activeIcon} className={`w-5 m-auto mt-5 `} />):(      <Image src={item.icon} className={`w-5 m-auto mt-5 `} />)
      }

      <span className={`font-normal text-[0.7rem]  p-0 mt-20 ${item?.label == active?"text-primary-blue":"text-grey-2"}`}>{item.label}</span>
     
    </Anchor>
  ));

  return (
    <footer className='fixed bottom-0 z-10 min-h-20 lg:hidden bg-white w-full text-center mt-5'>
<Group className='flex justify-evenly mx-auto align-middle items-center gap-x-8'>
{items}
</Group>


    </footer>
  );
}