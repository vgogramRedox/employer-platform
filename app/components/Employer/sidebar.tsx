'use client';
import { useEffect, useState } from 'react';
import {
  Group,
  Code,
  Image,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconSun,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '@/styles/NavbarSimple.module.css';
import { IconHome } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';

<Image src="/images/home-house.svg" className={classes.linkIcon} />;

const data = [
  { link: '', label: 'Home', icon: '/images/home-house.svg' },
  { link: '', label: 'My Jobs', icon: '/images/workBag.svg' },
  { link: '', label: 'Talent', icon: '/images/userGroup.svg' },
  { link: '', label: 'Profile', icon: '/images/userIconBlack.svg' },
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

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const links = data.map((item) => (
    <a
      className={`${classes.link} w-[113%] `}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <Image src={item.icon} className={classes.linkIcon} />
      <span className="font-normal text-[1rem] text-grey-2 p-0">{item.label}</span>
      {item?.label == active && (
        <span className="font-normal text-[1rem] text-grey-2 bg-primary-blue min-h-[2.91rem] rounded-s-[0.25rem] min-w-[0.625rem] ms-auto"></span>
      )}
    </a>
  ));
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

  console.log(computedColorScheme);
  const toggleColorScheme = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <nav className={`${classes.navbar} relative`}>
      <div className={classes.navbarMain}>
        <Group className={`${classes.header} p-10 mb-10`} justify="center">
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
        className={`${classes.footer} top-[80%] absolute flex space-between items-center gap-x-4`}
      >
        <a href="#" className={`flex`} onClick={(event) => event.preventDefault()}>
            {
                checked==false?(  <Image src="/images/sun.svg" className={classes.linkIcon} />): 
                 <Image src="/images/moon.svg" className={`classes.linkIcon fill-slate-100`} />
            }
         
          {checked == false ? (
            <span className="text-dark font-bold ">Dark Mode</span>
          ) : (
            <span className="text-dark font-bold ms-7">Light Mode</span>
          )}
        </a>
        <Switch size='lg'     color="gray" checked={checked} onChange={toggleColorScheme}   />
      </div>
    </nav>
  );
}
