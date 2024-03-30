import { Popover, Button, TextInput } from '@mantine/core';
interface PopoverCompType{
  target:React.ReactNode
  dropDownContent:React.ReactNode
  opened:boolean
}

 export default function  PopoverComp({
  opened,
  target,
  dropDownContent
 }:PopoverCompType) {
  return (
    <Popover width={'35%'} trapFocus position="bottom" withArrow shadow="md" opened={opened} >
      <Popover.Target>
      {target}
      </Popover.Target>
      <Popover.Dropdown>
{dropDownContent}
       
      </Popover.Dropdown>
    </Popover>
  );
}