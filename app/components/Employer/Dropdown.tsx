"use client"
import { Menu, Button, rem, Text, px, Drawer, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBell, IconChevronDown } from '@tabler/icons-react';

import Link from 'next/link';
import { isMobile } from 'react-device-detect';

interface DropDownProps {
  dropDownIcon?: React.ReactNode;
}
export default function DropDown({ dropDownIcon }: DropDownProps) {
  // const remConv=(val:string)=>{
  //  return   px(val)
  // }
  const width = px('37.875rem');
  const smWidth=px('20rem')
 
  const smScreen=useMediaQuery('(max-width:540px)')
  const mdScreen=useMediaQuery('(max-width:768px)')
  // console.log(width)
  return (
    <Menu
      trigger="click-hover"
      openDelay={100}
      closeDelay={400}
      width={mdScreen ? smWidth :width}
      shadow="md"
   
      transitionProps={{transition:"rotate-right",duration:150}}
    >
      <Menu.Target>
        <Text>
        
          {dropDownIcon}
          {/* <IconChevronDown/> */}
        </Text>
      </Menu.Target>


        {/* Drawer content */}
        <Menu.Dropdown className="text-center " style={{ border: '  rgb(126 132 148' }}>
          <Menu.Item component="h1" className="overflow-x-scroll  text-dark-100 font-bold max-lg:text-[1rem] max-lg:ms-4 border-b border hover:bg-white">
            Notifications
          
          </Menu.Item>
          <Divider/>
          
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
          >
            <div className="flex lg:justify-between max-lg:gap-x-3 items-center max-lg: ">
              <IconBell
               
                className="max-lg:w-5  max-lg:h-5 lg:w-6 lg:h-6"
              />
              <p className="text-grey-3 font-light max-md:text-sm">
                Your <Link href=""> Product Design job</Link> post has 16 new applications
              </p>{' '}
              <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p>
            </div>
          </Menu.Item>
          <Divider/>
          
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
          >
            <div className="flex lg:justify-between max-lg:gap-x-3 items-center max-lg: ">
              <IconBell
               
                className="max-lg:w-5  max-lg:h-5 lg:w-6 lg:h-6"
              />
              <p className="text-grey-3 font-light max-md:text-sm">
                Your <Link href=""> Product Design job</Link> post has 16 new applications
              </p>{' '}
              <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p>
            </div>
          </Menu.Item>
          <Divider/>

          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
          >
            <div className="flex lg:justify-between max-lg:gap-x-3 items-center max-lg: ">
              <IconBell
               
                className="max-lg:w-5  max-lg:h-5 lg:w-6 lg:h-6"
              />
              <p className="text-grey-3 font-light max-md:text-sm">
                Your <Link href=""> Product Design job</Link> post has 16 new applications
              </p>{' '}
              <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p>
            </div>
          </Menu.Item>
          <Divider/>

          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
          >
            <div className="flex lg:justify-between max-lg:gap-x-3 items-center max-lg: ">
              <IconBell
               
                className="max-lg:w-5  max-lg:h-5 lg:w-6 lg:h-6"
              />
              <p className="text-grey-3 font-light max-md:text-sm">
                Your <Link href=""> Product Design job</Link> post has 16 new applications
              </p>{' '}
              <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p>
            </div>
          </Menu.Item>
          <Divider/>
        </Menu.Dropdown>
      
    </Menu>
  );
}
