import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Box, Text, Group } from '@mantine/core';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import PrimaryButton from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { BadgeComp } from '../BadgeComp';
import { EmploymentType, WorkSettingType } from '@/types/app';
import { DropZone } from '../DropZone';
import MultiSelectComp from '../MultiSelectComp'
import { IconEdit } from '@tabler/icons-react';
import { UserContext } from '@/context/EmployerContext';
import { VidThumbNail } from './VidThumbNail';

interface SetterType{
    setter:React.ReactNode
}

function PostJobStage2({setter}:SetterType) {
   

 

  const {appState,setAppState} = useContext(UserContext)
  const {postVideoMode}= appState
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

            {postVideoMode&&(
              <Box className='flex w-full items-center'>
 <div  className=" lg:w-[50%] ">

 <VidThumbNail />  
            </div>
            <div className="w-1/2 border border-dotted h-[12.55313rem]">
          <DropZone/>
              </div>

              
              </Box>
            )

            }
            <Box className="">

            <Text className='mt-5 flex justify-between font-bold text-2xl'> Job Title <IconEdit/></Text>
            <Text className='mt-5 '> Product Designer</Text>
            

{postVideoMode?(

<Group>
<Text className='mt-5 flex justify-between font-bold text-2xl w-full'> Tags: <IconEdit/></Text>
           
                 <MultiSelectComp data={[
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
      ]}/>
</Group>
):(

  <>
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
          
  </>
)}
            
  


            
            </Box>
          
{setter}
            </Box>
            
          </Modal.Body>
        </Modal.Content>
  </>
  )
}

export default PostJobStage2