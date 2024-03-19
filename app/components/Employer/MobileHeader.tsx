'use client';
import { useState } from 'react';
import {  Group,   Badge,  Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// import classes from '@/styles/Header.module.css';
import { IconMail, IconSearch } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import DropDown from './Dropdown';

const links = [
  { link: '/about', label: 'IconBell' },
  { link: '/pricing', label: 'IconChevronDown' },
  { link: '/learn', label: 'IconMail' },
];

export function MobileHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  //   const items = links.map((link) => (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={classes.link}
  //       // data-active={active === link.link || undefined}
  //       onClick={(event) => {
  //         event.preventDefault();
  //         // setActive(link.link);
  //       }}
  //     >

  //       {
  //         < IconChevronDown />
  //       }
  //     </a>
  //   ));

  return (
    <header className="">
      <div className={` pt-5 w-[80%] ms-auto flex justify-center items-center  gap-x-10 `}>
        <a
          key="9i"
          href="/"
          className={` text-center `}
          // data-active={active === link.link || undefined}
          onClick={(event) => {
            event.preventDefault();
            // setActive(link.link);
          }}
        >
          <Image src="/svgs/darkLogo.svg" className="  w-[4.5rem] h-[4.5rem]" />
        </a>

        <div  className="flex flex-row gap-4">
          <DropDown
            dropDownIcon={
              <>
                <Group pos={'relative'}>
                  <IconBell />{' '}
                  <Badge className="absolute left-3 bottom-3" size="xs" bg="red" circle></Badge>
                </Group>
              </>
            }
          />

          <a
            key="9iLink"
            href=""
            className={``}
            // data-active={active === link.link || undefined}
            onClick={(event) => {
              event.preventDefault();
              // setActive(link.link);
            }}
          >
            <IconMail />
          </a>
        </div>
      </div>
    </header>
  );
}
