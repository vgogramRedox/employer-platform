'use client';
import { useEffect, useState } from 'react';
import {
  Group,
  Code,
  Image,
  Switch,

  useMantineColorScheme,
 
} from '@mantine/core';

import classes from '@/styles/NavbarSimple.module.css';
import Link from 'next/link';
import {  usePathname } from 'next/navigation';



<Image src="/images/home-house.svg" className={classes.linkIcon} />;

const data = [
  { link: '/employer/home', label: 'Home', icon: '/images/home-house.svg' },
  { link: '/employer/jobs', label: 'My Jobs', icon: '/images/workBag.svg' },
  { link: '/employer/talent', label: 'Talent', icon: '/images/userGroup.svg' },
  { link: '/employer/profile', label: 'Profile', icon: '/images/userIconBlack.svg' },
];

export function NavbarSimple() {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('vgogramTheme', 'light');

  }

  const [active, setActive] = useState('Billing');
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  //@ts-ignore
  const [checked, setChecked] = useState<boolean>(() => {
    if (typeof window !=='undefined') {
      return window.localStorage.getItem('darkMode') === 'true';
    }
    
  });
const pathname=usePathname()
const path=pathname.substring(1)

  // const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const links = data.map((item) => (
    <Link
      className={`${classes.link} w-full relative min-h-[4.28rem]`}
      data-active={item.link?.substring(1) === active ||pathname?.includes( item?.link)|| undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.link?.substring(1));
      }}
    >
      <Image src={item.icon} className={classes.linkIcon} />
      <span className="font-normal text-[1rem] text-grey-2 p-0">{item.label}</span>
      {item.link?.substring(1) == active||pathname?.includes( item?.link) && (
        
        <Image
        src="/images/indicatorLgOn.svg"
        className=" absolute left-[95%]  w-[0.675rem]"

      
      />
        // <span className="font-normal text-[1rem] text-grey-2 bg-primary-blue min-h-[2.91rem] rounded-s-[0.25rem] min-w-[0.625rem] ms-auto"></span>
      )}
    </Link>
  ));

  const toggleColorScheme = () => {
    setChecked((prevChecked) => !prevChecked);

  };
  useEffect(() => {
    // Update localStorage whenever the state changes
   if(typeof window!=="undefined"){
    window.localStorage.setItem('darkMode', checked.toString());}
  }, [checked]);

  useEffect(() => {
   
    if (checked) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  }, [colorScheme,checked]);


 
  // console.log(path)
useEffect(()=>{
  
  setActive(path)
},[])
  // console.log(computedColorScheme);
 


 
  return (
    <nav className={`${classes.navbar}  lg:fixed max-lg:hidden`} >
      <div className={`${classes.navbarMain} max-lg:hidden`}>
        <Group className={`${classes.header} lg:p-10 mb-10`} justify="center" >
          <Image
            src="/images/darkLogo.svg"
            className="max-lg:items-center max-lg:mx-auto"
            w={93}
            h={93}
          />
        </Group>
        {links}
      </div>

      <div
        className={`${classes.footer} top-[80%] absolute flex space-between items-center gap-x-4 max-lg:hidden ms-5`}
      >
        <a href="#" className={`flex`} onClick={(event) => event.preventDefault()}>
            {
                checked==false?(  <Image src="/images/sun.svg" className={classes.linkIcon} />): 
                 <Image src="/images/moon.svg" className={`classes.linkIcon fill-slate-100`} />
            }
         
          {checked == false ? (
            <span className="text-dark font-bold text-sm ">Dark Mode</span>
          ) : (
            <span className="text-dark font-bold ms-7 text-sm">Light Mode</span>
          )}
        </a>
        <Switch size='lg' className='max-lg:hidden'    color="gray" checked={checked} onChange={toggleColorScheme}   />
      </div>
    </nav>
  );
}
