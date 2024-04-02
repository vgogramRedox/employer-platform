'use client';
import { useEffect, useState } from 'react';
import { Group, Code, Image, Switch, useMantineColorScheme, Box } from '@mantine/core';

import classes from '@/styles/NavbarSimple.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

<Image src="/svgs/home-house.svg" className={classes.linkIcon} />;

const data = [
  { link: '/employer/home', label: 'Home', icon: '/svgs/home-house.svg' },
  { link: '/employer/jobs', label: 'My Jobs', icon: '/svgs/workBag.svg' },
  { link: '/employer/talent', label: 'Talent', icon: '/svgs/userGroup.svg' },
  { link: '/employer/profile', label: 'Profile', icon: '/svgs/userIconBlack.svg' },
];

export function NavbarSimple() {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('vgogramTheme', 'light');
  }

  const [active, setActive] = useState('Billing');
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  //@ts-ignore
  const [checked, setChecked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('darkMode') === 'true';
    }
  });
  const pathname = usePathname();
  // const path=pathname.substring(1)

  // const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const links = data.map((item) => (
    <Link
      className={`${classes.link} w-full relative min-h-[4.28rem]`}
      data-active={item.link == active || pathname?.includes(item?.link) || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.link?.substring(1));
      }}
    >
      <Image src={item.icon} className={classes.linkIcon} />
      <span className="font-normal text-[1rem] text-grey-2 p-0">{item.label}</span>
      {item.link === active ||
        (pathname?.includes(item?.link) && (
          <Image src="/svgs/indicatorLgOn.svg" className=" absolute left-[95%]  w-[0.675rem]" />
          // <span className="font-normal text-[1rem] text-grey-2 bg-primary-blue min-h-[2.91rem] rounded-s-[0.25rem] min-w-[0.625rem] ms-auto"></span>
        ))}
    </Link>
  ));

  const toggleColorScheme = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  useEffect(() => {
    // Update localStorage whenever the state changes
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('darkMode', checked.toString());
    }
  }, [checked]);

  useEffect(() => {
    if (checked) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  }, [colorScheme, checked]);

  // console.log(path)
  useEffect(() => {
    setActive(pathname);
  }, []);
  // console.log(computedColorScheme);

  return (
    <nav className={`${classes.navbar}  lg:fixed max-lg:hidden`}>
      <div className={`${classes.navbarMain} max-lg:hidden`}>
        <Group className={`${classes.header} lg:p-10 mb-10`} justify="center">
          <Image
            src="/svgs/darkLogo.svg"
            className="max-lg:items-center max-lg:mx-auto"
            w={93}
            h={93}
          />
        </Group>
        {links}
      </div>

      <Box
        className={`${classes.footer} top-[90%] absolute flex justify-between items-center gap-x-4 max-lg:hidden ms-5`}
      >
        <Link href="#" className={`flex`} onClick={(event) => event.preventDefault()}>
          {checked == false ? (
            <Image src="/svgs/sun.svg" className={`${classes.linkIcon} transition `} />
          ) : (
            <Image src="/svgs/moon.svg" className={` ${classes.linkIcon} transition  fill-slate-100`} />
          )}

          {/* {checked == false ? (
            <span className="text-dark font-bold text-sm ">Dark Mode</span>
          ) : (
            <span className="text-dark font-bold ms-7 text-sm">Light Mode</span>
          )} */}
        </Link>
        <Switch
          size="lg"
          className="max-lg:hidden cursor-pointer"
          color="gray"
          checked={checked}
          onChange={toggleColorScheme}
        />
      </Box>
    </nav>
  );
}
