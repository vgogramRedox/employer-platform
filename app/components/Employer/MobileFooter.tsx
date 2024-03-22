"use client"
import { UserContext } from '@/context/EmployerContext';
import { Anchor, Group, ActionIcon, rem, AppShellFooter, Image } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const links = [
  { link: '/employer/home', label: 'Home', icon: '/svgs/home-house.svg',activeIcon:"/svgs/home-house-active.svg" },
  { link: '/employer/jobs', label: ' Jobs', icon: '/svgs/workBag.svg',activeIcon:"/svgs/workBagActive.svg" },
  { link: '/employer/post', label: 'Post', icon: '/svgs/add-circle-plus.svg',activeIcon:"/svgs/add-circle-plus-active.svg" },
  { link: '/employer/talent', label: 'Talent', icon: '/svgs/userGroup.svg',activeIcon:"/svgs/userGroupActive.svg" },
  { link: '/employer/profile', label: 'Profile', icon: '/svgs/userIconBlack.svg',activeIcon:"/svgs/userIconActive.svg" },
];




export function MobileFooter() {
  const [active,setActive]=useState<string>('Home')
  const pathname=usePathname()
 
  const {appState,setAppState,postJobModalOpened,setPostJobModalOpened}=useContext(UserContext)
  useEffect(()=>{
  
    setActive(pathname)
    
  },[])
  //  console.log(pathname?.includes( "/employer/jobs"))
  //   console.log(pathname)
  const items = links.map((item) => (
    <Anchor
      c="dimmed"
      key={item.label}
      href={item.link}
      lh={1}
      data-active={item.link === active ||pathname?.includes( item?.link)||undefined}
      onClick={(event) => {
        
        if( item?.label=="Post"){
  event.preventDefault()
  setPostJobModalOpened(true)
        }
       
       
        setActive(item.link);
      }}
     
    >

{item.link === active ||pathname?.includes( item?.link) && (
        <Image src="/svgs/indicatorOn.svg"/>
      )}
      {
        item.link === active ||pathname?.includes( item?.link)?(      <Image src={item.activeIcon} className={`w-5 m-auto mt-5 `} />):(      <Image src={item.icon} className={`w-5 m-auto mt-5 `} />)
      }

      <span className={`font-normal text-[0.7rem]  p-0 mt-20 ${item.link === active ||pathname?.includes( item?.link)?"text-primary-blue":"text-grey-2"}`}>{item.label}</span>
     
    </Anchor>
  ));

  return (
    <footer className='fixed bottom-0 z-10 min-h-20 lg:hidden bg-white w-full text-center mt-[80%]'>
<Group className='flex justify-evenly mx-auto align-middle items-center gap-x-8'>
{items}
</Group>


    </footer>
  );
}