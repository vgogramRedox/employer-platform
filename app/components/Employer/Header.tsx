"use client"
import { useState } from 'react';
import { Container, Group, Burger, Autocomplete,rem, Badge, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from '@/styles/Header.module.css';
import { IconMail, IconSearch } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import DropDown from './Dropdown';

const links = [
  { link: '/about', label: 'IconBell' },
  { link: '/pricing', label: 'IconChevronDown' },
  { link: '/learn', label: 'IconMail' }
  
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      // data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        // setActive(link.link);
      }}
    >
     
      {
        < IconChevronDown />
      }
    </a>
  ));

  return (
    <header className={`${classes.header} p-5 max-lg:hidden`}>
      <Container size="2xl" className={classes.inner}>
    
      
        <Group>
         
          <Autocomplete radius='lg' size='lg'
    
            className={` min-w-[24.4375rem] min-h-10 p-[0.5rem] rounded-[1.5rem] text-lg`} 
            placeholder="Search Talent"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['']}
            visibleFrom="xs"
          />
        </Group>

        <Group gap={5} >
        <a
      key="99i"
      href=""
      className={classes.link}
      // data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        // setActive(link.link);
      }}
    >
     
     <Flex
       justify='center'
       align="center"
       direction="row"
       
      pos={'relative'}
       columnGap="md"
       gap="md"
       
     >
        < IconBell />    <Badge className='absolute left-3 bottom-3' size="xs" bg='red' circle>
        1
      </Badge>
     </Flex>
      
       
      
    </a>

   


    <a
      key="99i"
      href=""
      className={classes.link}
      // data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        // setActive(link.link);
      }}
    >
     
      
        < IconMail />
      
    </a>

    <a
      key="9i"
      href=""
      className={`${classes.link}`}
      // data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        // setActive(link.link);
      }}
    >
     
    <Image className='w-14 h-14 rounded-full' src='/images/userIcon.svg'/>
    </a>
    
    <a
      key="99i4"
      href=""
      className={classes.link}
      // data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        // setActive(link.link);
      }}
    >
     
      
        
        <DropDown dropDownIcon={
          <>
          <IconChevronDown/>
          </>
        } />
    
    </a>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}