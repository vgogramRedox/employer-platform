import { BackgroundImage, Box, Center, Image } from '@mantine/core';
import React from 'react';
import Input from './Input';
import CheckboxComp from './Checkbox';
import PrimaryButton from './Button';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import SelectBox from './SelectBox';

function SignUpSelector() {
  return (
    
    <div className='lg:mx-auto'>
       <div className="mt-10 max-lg:w-[90%]  max-md:mt-5 flex gap-x-10">
   
   <SelectBox icon={<Image src="/images/userIconYellow.svg" className='w-[3.25rem] h-[2.5rem] mx-auto my-auto'/>}
   label={
    <p className='text-dark text-sm font-normal max-w-[80%] text-center mx-auto mt-5 min-h-10'>
Job seeker/ Freelancer
</p>
   }
   />

   
<SelectBox icon={<Image src="/images/shopIconYellow.svg" className='w-[3.25rem] h-[2.5rem] mx-auto my-auto'/>}
   label={
    <p className='text-dark text-sm font-normal max-w-[80%] text-center mx-auto mt-5 min-h-10'>
Employer
</p>
   }
   />

   



 </div>

 
    </div>
   
  );
}

export default SignUpSelector;
