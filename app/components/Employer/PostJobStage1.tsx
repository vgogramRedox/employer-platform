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

interface SetterType{
    setter:React.ReactNode
}

function PostJobStage1({setter}:SetterType) {
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

const WORKSET = workSettingType?.map((type) => (
 
  <BadgeComp
    className={` border-[#BDC0CE] border font-normal text-lg p-5 cursor-pointer ${
      type == workSettingT ? 'bg-primary-blue  text-white' : 'bg-white  text-[#BDC0CE] '
    }`}
    title={type}
    onClick={() => {
      setWorkSettingT(type);
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
                <Text>Fill in the required information to post a job</Text>
              </Box>

              <Box>
                <PrimaryButton
                onClick={()=>{
                  setPostVideoMode(prev=>!prev)
                }}
                  className="bg-primary-blue rounded-3xl "
                  title={
                  postVideoMode?"Back to Post": <>Post a Video Instead</>
                 }
                />
              </Box>
            </Modal.Title>
            <Modal.CloseButton className="absolute top-[8%] left-[97%]" />
          </Modal.Header>
          <Modal.Body >
          <Box className="lg:p-10">
            <Input label="Job Title" placeholder="Enter Job Title" />

{
  postVideoMode&&( <Group className='block'>
  <Text className='mt-5 text-lg'> Upload Video</Text>
  <Text className='mt-1 font-light'> Upload a video describing the job position in full detail. Be sure to include important details such as remuneration.</Text>
  <div className="cursor-pointer border border-dotted">
  <DropZone/>
  </div>
  
</Group>)
  
 


}
            <TextArea
                     className='mt-1'
              label="Job Description"
              placeholder="Describe the job position in full details"
            />
            <Text className='mt-5'> Employment Type</Text>
            <Group className="flex gap-5 flex-row mt-2.5">
            {ET}
            </Group>
            <Text className='mt-5'> Employment Type</Text>
            <Group className="flex gap-5 flex-row mt-5 mb-5">
            {WORKSET}
            </Group>

            <Input label="Location" placeholder="Enter Job Location" className='mt-10 mb-20' />
            <TextArea
         className='mt-1 '
              label="Requirements/Qualification"
              placeholder="Enter Job Requirements/Qualifications"
            />
            <Input label="Renumerations" placeholder="Enter renumeration"  className='mt-5'/>
            
            <Text className='mt-5 text-lg'> Tags</Text>
  <Text className='mt-1 font-light'>Select up to 5 tags</Text>
           <MultiSelectComp data={[
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
      ]}/>
  
{setter}
            </Box>
            
          </Modal.Body>
        </Modal.Content>
  </>
  )
}

export default PostJobStage1