"use client"
import { useState } from 'react';
import { Box, ComboboxItem, Select, Text } from '@mantine/core';
import { IconChevronDownRight } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
interface ListType{
  value: string, label: string
  }
  interface SelectProp{
 data:  ListType[],
 className?:string
 label:string
 txtColor?:string
 width?:string
  }

export default function SelectComp({
  data,
  className,
  label,
  txtColor="#010101",
  width
}:SelectProp) {
  const [value, setValue] = useState<ComboboxItem | null>(null);
  return (
    <Box>
      <Text className={`text-[${txtColor}] text-xl max-md:text-sm font-light  mb-2.5`}>{label}</Text>
      <Select
      
    className={`${className} text-3xl min-h-[3.25rem]  ${width} text-[${txtColor}] `}
    rightSection={<IconChevronDown/>}
 
 
      data={data}
      value={value ? value.value : null}
      onChange={(_value, option) => setValue(option)}
    />
    </Box>   
  );
}