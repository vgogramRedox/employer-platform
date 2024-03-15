import { Menu, Button, rem, Text, px } from '@mantine/core';
import { IconBell, IconChevronDown } from '@tabler/icons-react';
import { IconExternalLink } from '@tabler/icons-react';

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
    console.log(width)
  return (
    <Menu width={width} shadow="md" >
      <Menu.Target><Text>
      <IconChevronDown/>
      </Text>
     
            
        
      </Menu.Target>

      <Menu.Dropdown className='text-center' style={{border: "  rgb(126 132 148"}}>
        <Menu.Item component="h1" className='border-bottom border text-grey-3 font-bold' >
       Notifications
        </Menu.Item>
        <Menu.Item   mih={px('5.5rem')} className=' border-grey-3 '
          leftSection
          component="a"
          href=""
          target=""
        >
            <div className='flex justify-between items-center '>
          <IconBell style={{ width: rem(20.5), height: rem(20) }} />
          <p className='text-grey-3 font-normal'>Your Product Design job post has 16 new applications</p> <p className='text-[0.75rem] font-normal text-grey-3'>
3 mins ago
          </p>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}