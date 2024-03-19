import { Menu, Button, rem, Text, px } from '@mantine/core';
import { IconBell, IconChevronDown } from '@tabler/icons-react';

import Link from 'next/link';
import { isMobile } from 'react-device-detect';

interface DropDownProps{
    dropDownIcon?:React.ReactNode
}
export default function DropDown({
    dropDownIcon
}:DropDownProps) {
    // const remConv=(val:string)=>{
    //  return   px(val)
    // }
    const width= px('37.875rem')
    // console.log(width)
  return (
    <Menu width={!isMobile?width:px("17.9rem")}  shadow="md"  >
      <Menu.Target><Text>{
        }
        {
          dropDownIcon
        }
      {/* <IconChevronDown/> */}
      </Text>
     
            
        
      </Menu.Target>

      <Menu.Dropdown className='text-center ' style={{border: "  rgb(126 132 148"}}>
        <Menu.Item component="h1" className=' text-dark-100 font-bold max-lg:text-lg max-lg:ms-4' >
       Notifications
        </Menu.Item>
        <Menu.Item   mih={px('5.5rem')} className='   border-t-grey-1 border'
          leftSection
          component="a"
          href=""
          target=""
        >
            <div className='flex justify-between items-center '>
          <IconBell style={{ width: rem(20.5), height: rem(20) }} className='max-lg:w-11  max-lg:h-20 ' />
          <p className='text-grey-3 font-light max-md:text-sm'>Your <Link href=""> Product Design job</Link>  post has 16 new applications</p> <p className='max-lg:hidden text-[0.75rem] font-normal text-grey-3'>
3 mins ago
          </p>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}