import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Box, Text, Group } from '@mantine/core';
import { Dispatch, SetStateAction, useState } from 'react';
import PrimaryButton from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { BadgeComp } from '../BadgeComp';
import { EmploymentType, WorkSettingType } from '@/types/app';
import { DropZone } from '../DropZone';
import MultiSelectComp from '../MultiSelectComp'
import { IconEdit } from '@tabler/icons-react';

interface SetterType{
    setter:React.ReactNode
}

function PostJobStage2({setter}:SetterType) {
    const employmentType: EmploymentType[] = ['Full-Time', 'Contract'];

  const workSettingType: WorkSettingType[] = ['Remote', 'Hybrid', 'On-site'];

  const [employmentT, setEmploymentT] = useState<String | ''>('');
  const [workSettingT, setWorkSettingT] = useState<String | ''>('');
  const [postVideoMode,setPostVideoMode]=useState<boolean>(false)
  const ET = employmentType?.map((type) => (
    
    <BadgeComp
      className={` border-[#BDC0CE] border font-normal text-lg p-5 cursor-pointer ${
        type == employmentT ? 'bg-primary-blue  text-white' : 'bg-white  text-[#BDC0CE] '
      }`}
      title={type}
      onClick={() => {
        setEmploymentT(type);
      }}
    />
  
));
  return (
  <>
   <Modal.Content>
          <Modal.Header className="bg-light-blue min-h-[8.875rem]">
            <Modal.Title className="flex justify-between w-[80%] p-5">
              <Box> 
                <Text className="font-bold text-dark text-2xl ">
                  {postVideoMode?" Post a Video":" Post a Job"}
                 </Text>
                <Text>Review Your Job Post</Text>
              </Box>

              
            </Modal.Title>
            <Modal.CloseButton className="absolute top-[8%] left-[97%]" />
          </Modal.Header>
          <Modal.Body >
          <Box className="lg:p-10 ">
            <Box className="">

            <Text className='mt-5 flex justify-between font-bold text-2xl'> Job Title <IconEdit/></Text>
            <Text className='mt-5 '> Product Designer</Text>
            


            
<Group>
<Text className='mt-5 flex justify-between font-bold text-2xl w-full'> Job Description: <IconEdit/></Text>
            <Text className=' '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quae, necessitatibus maiores reprehenderit a iure aut laboriosam aliquam autem ea omnis, dicta id error temporibus laudantium, officia ad fuga illum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolor officiis qui ratione iusto dolorem molestias eum debitis nam quisquam ad delectus inventore maxime eos, explicabo temporibus earum quasi commodi.</Text>
</Group>

<Group>
<Text className='mt-5 flex justify-between font-bold text-2xl w-full'> Employment Type  <IconEdit/></Text>
            <Text className=' '>Full-time</Text>
</Group>

<Group className='w-full'>
<Text className='mt-5 flex justify-between font-bold text-2xl w-full'> Requirements/Qualificaiton  <IconEdit/></Text>
            <Text className=' '>Full-time</Text>
</Group>

<Group>
<Text className='mt-5 flex justify-between font-bold text-2xl w-full'> Renumerations  <IconEdit/></Text>
            <Text className=' '>$12000/hr</Text>
</Group>
            


            
            </Box>
          
{setter}
            </Box>
            
          </Modal.Body>
        </Modal.Content>
  </>
  )
}

export default PostJobStage2