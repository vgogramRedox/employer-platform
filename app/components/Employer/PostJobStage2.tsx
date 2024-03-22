import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Box, Text, Group, Image } from '@mantine/core';
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
import { IconPlayerPlay } from '@tabler/icons-react';
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";


interface SetterType{
    setter:React.ReactNode
}

function PostJobStage2({setter}:SetterType) {
   

 

  const {appState,setAppState} = useContext(UserContext)
  const{tags}=appState
  const {
    postVideoMode,
    jobPostTitle,
    jobPostDescription,
    jobPostLocation,
    jobPostRequirements,
    jobPostRenumerations,
    jobPostEmploymentType,
    jobWorkSettingType,
    jobVidThumbNail
  } = appState;

  const ThumbNail=(

    <section  className=" lg:max-w-[90%] lg:hidden" >
        
    <div className={`mx-auto text-center  rounded lg:min-w-[15.22888rem] max-lg:w-[100%] lg:gap-10 lg:min-h-[16.11313rem] flex-shrink  pt-3 $`}>
      <div className='relative'>
        
      <Image 
      src={jobVidThumbNail?jobVidThumbNail:""} className={`lg:max-w-[80%] mx-auto `}/>
      <div className='bg-grey-3 rounded-full max-md:w-10 max-md:h-10  md:h-14 w-14 absolute max-md:top-[32.5%] lg:top-[35%] lg:left-[50%] max-lg:top-[35%] max-lg:left-[35%]  '>

      <IconPlayerPlay fill='true'strokeWidth='1.5' size={32}  className='z-10 outline-0 mx-auto  text-center mt-[22%] max-md:mt-[10%]    items-center '/>
      </div>
      
      </div>
    
    <p className=' text-dark lg:text-lg font-normal mt-2 '>Tolu Ogunnipe</p>
    <p className="max-lg:text-sm lg:text-sm  font-light pb-5">Product designer</p>
    </div>
  
    </section>
  )

  const handleRemoveValue = (indexToRemove: number) => {

  
    setAppState({
      ...appState,
      tags:  tags.filter((_:any, index:number) => index !== indexToRemove),
    });
  };

 



  return (
  <>
   <Modal.Content>
          <Modal.Header className="lg:bg-light-blue lg:min-h-[8.875rem] max-lg:bg-white">
            <Modal.Title className="flex justify-between lg:w-[80%] lg:p-5 max-lg:pt-2">
              <Box> 
                <Text className="font-bold text-dark lg:text-xl max-lg:hidden ">
                  {postVideoMode?" Post a Video":" Post a Job"}
                 </Text>
                <Text className='max-lg:font-bold'>Review Your Job Post</Text>
              </Box>

              
            </Modal.Title>
            <Modal.CloseButton className="absolute lg:top-[8%] lg:left-[97%] max-lg:left-[90%]" />
          </Modal.Header>
          <Modal.Body >
          <Box className="lg:p-10 ">

            {postVideoMode&&(
              <Box className='lg:flex w-full lg: items-center'>
                
 <div  className=" lg:w-[50%] max-lg:mx-auto   ">
  {/* small screen */}
{ThumbNail}
{/* large screen */}
 <VidThumbNail thumbnailImg={jobVidThumbNail}  className="max-md:w-full md:w-[80%] max-lg:hidden" />  
            </div>
            <div className="lg:w-1/2 border border-dashed lg:h-[12.55313rem] max-lg:min-h-[5.4rem] max-lg:my-auto">
          <DropZone/>
              </div>

              
              </Box>
            )

            }
            <Box className="">

            <Text className='mt-5 flex justify-between font-bold lg:text-xl max-lg:font-normal '> Job Title <IconEdit/></Text>
            <Text className='mt-5 max-lg:font-light'> {jobPostTitle}</Text>
            

{postVideoMode?(

<Group>
<Text className='mt-5 flex justify-between font-bold lg:text-xl  w-full'> Tags: <IconEdit/></Text>
           
{tags?.map((val:string,i:number)=>(
   
   <BadgeComp size='xl' 
   key={i}
   className='p-5'
   title={
    <div  className=' flex font-light items-center gap-3 ' >
    {val}  <Image src="/svgs/closeBtn.svg" className='h-6 w-6 cursor-pointer' width={20} height={20}
    onClick={()=>{
      handleRemoveValue(i)
    }}
    />
    </div>
   }/>
   
  
))}
</Group>
):(

  <>
  <Group>
<Text className='mt-5 flex justify-between font-bold lg:text-xl w-full max-lg:font-normal '> Job Description: <IconEdit/></Text>
            <Text className=' max-lg:font-light'> {jobPostDescription}</Text>
</Group>

<Group>
<Text className='mt-5 flex justify-between font-bold lg:text-xl w-full max-lg:font-normal '> Employment Type  <IconEdit/></Text>
            <Text className=' max-lg:font-light'>{jobPostEmploymentType}</Text>
</Group>

<Group className='w-full'>
<Text className='mt-5 flex justify-between font-bold lg:text-xl w-full max-lg:font-normal'> Requirements/Qualificaiton  <IconEdit/></Text>
            <Text className=' max-lg:font-light'>{jobPostRequirements}</Text>
</Group>

<Group>
<Text className='mt-5 flex justify-between font-bold lg:text-xl w-full max-lg:font-normal'> Renumerations  <IconEdit/></Text>
            <Text className=' max-lg:font-light '>{jobPostRenumerations}</Text>
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