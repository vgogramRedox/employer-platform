'use client';
import React, { useState } from 'react';
import { Box, Divider, Group, Image, Paper, Tabs, Text } from '@mantine/core';

import PrimaryButton from '@/app/components/Button';
import { IconBookmark, IconMail, IconMapPin } from '@tabler/icons-react';
import { DropZone } from '../DropZone';
import { inputProps } from '../Input';
import SelectComp from './SelectComp';
import TextArea from '../TextArea';

const Input = ({ label, onChange, placeholder, className, value }: inputProps) => {
  return (
    <div className="leading-8 mt-5">
      <label className="text-[#010101] text-xl max-md:text-sm font-normal mb-5">{label}</label>
      <input
        onChange={onChange}
        value={value}
        className="min-h-[3.25rem] min-w-full p-2 border font-light text-lg border-grey-4 w-full rounded mb-4"
        placeholder={placeholder}
      />
    </div>
  );
};

function OrganizationalInfo() {
  const selectItems = [{ value: 'react', label: 'React library' }];
  return (
    <Box className="lg:max-w-[50%]">
      <Text className="leading-[1.2rem] text-dark lg:text-2xl font-semibold mt-4  max-lg:hidden">
        Logo
        </Text>
        <Box className="border-dashed border h-32 flex items-center justify-center mt-5">
          <DropZone lgWidth='120' className=' ' />
        </Box>
        <Box>
          <Input
            className="font-normal mt-5"
            label="Organization Name"
            placeholder="Enter name of organizaiton"
          />
          <Input
            className="font-normal text-lg mt-5"
            label="Organization Name"
            placeholder="Enter name of organizaiton"
          />
          <SelectComp label="Industry" data={selectItems} />

          <Input
            className="font-normal text-lg mt-5"
            label="Location"
            placeholder="Enter name of organizaiton"
          />
          <TextArea label='Bio' placeholder='Enter Bio'/>
          <Input
            className="font-normal text-lg mt-5"
            label="Website"
            placeholder="Enter Website"
          />
        </Box>
        
    <Group className="flex gap-5 flex-row mt-5 mb-10 lg:w-full  justify-end  max-lg:justify-center max-lg:gap-x-2 max-lg:p-0">
      <PrimaryButton
      p="sm"
       fullWidth={false}
        

        className="bg-white border border-grey-4 hover:border-dotted lg:w-52 text-dark max-lg:w-[40%] max-lg:font-normal  "
        title=" Cancel"
      />
      <PrimaryButton
       p="xs"
      fullWidth={false}
        className="bg-primary-blue border lg:w-52 max-lg:w-[40%] max-lg:font-normal  "
        title="  Save"
       
      />
    </Group>

      

      
    </Box>
  );
}

export default OrganizationalInfo;
