'use client';
import { Table, Checkbox, Box, Image, Text, px, Portal, Group, List, ListItem } from '@mantine/core';
import { motion } from 'framer-motion';
import { Fragment, useContext, useState } from 'react';
import PrimaryButton from '../Button';
import { UserContext } from '@/context/EmployerContext';
import { SmallModal } from '../SmallModal';
import { useDisclosure } from '@mantine/hooks';
import SlideInAnimation from '@/context/Motion';
import { IconDotsVertical } from '@tabler/icons-react';
import PopoverComp from '../PopoverComp';

const elements = [
  {
    id: 1,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
  {
    id: 2,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
  {
    id: 3,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
  {
    id: 4,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
  {
    id: 5,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
  {
    id: 6,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
  {
    id: 7,
    email: 'uveghobamien@gmail.com',
    name: 'vincent',
    status: 'active',
    accessLevel: 'administrator',
  },
];

interface Element {
  id: number;

  email: string;
  name: string;
  status: string;
  accessLevel: string;
}
interface ElementList {
  elements: Element[];
}
export default function TableComp({ elements }: ElementList) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const { setAppState, appState, setAddUserModalOpened } = useContext(UserContext);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [popOverIndex,setPopOverIndex]=useState<number|null>()

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.id}
      bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td className="min-h-16">
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.id]
                : selectedRows.filter((id) => id !== element.id)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>
        <Box className="font-light">
          <Text className="font-light capitalize text-[#515151]"> {element.name}</Text>
          <Text className="font-light text-[#515151]"> {element.email}</Text>
        </Box>
      </Table.Td>
      <Table.Td>
        {' '}
        <Text className="px-[0.4375rem] py-[0.625rem] text-success-100 bg-[#E6F7E4] text-[0.75rem] capitalize rounded-lg w-[3.3rem] animate-bounce">
          {element.status}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text className="capitalize text-[#515151] font-light">{element.accessLevel}</Text>
      </Table.Td>
      <Table.Td>
        <Box className="flex gap-x-4">
          <Box
            onClick={() => {
              setAppState({
                ...appState,
                addUser_mode: 'edit',
                addUser_name: element.name,
                addUser_email: element.email,
              });
              setAddUserModalOpened(true);
              setPopOverIndex(null)
            }}
            className="min-w-[5.9rem] min-h-[2.5rem] text-[0.8rem] text-[#4A02B8] flex items-center justify-center my-auto bg-[#F2EAFF] rounded-xl gap-x-4 ps-1 pe-1 hover:animate-pulse cursor-pointer hover:scale-110 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M1.5 10.5H10.5"
                stroke="#4A02B8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.25 6.75011L7.25 1.75011C7.6642 1.3359 8.3358 1.3359 8.75 1.75011C9.1642 2.16433 9.1642 2.8359 8.75 3.25011L3.75 8.25011L1.75 8.75011L2.25 6.75011Z"
                stroke="#4A02B8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{' '}
            Edit
          </Box>

          <Box
            onClick={()=>{
              setConfirmModal(true)
              
            }}
            className="min-w-[5.9rem] min-h-[2.5rem] text-[0.8rem] text-pink-200 flex items-center justify-center my-auto bg-pink-100 rounded-xl gap-x-4 ps-2 pe-2 hover:animate-pulse cursor-pointer hover:scale-110 transition-color"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M5 5.5C6.10457 5.5 7 4.60457 7 3.5C7 2.39543 6.10457 1.5 5 1.5C3.89543 1.5 3 2.39543 3 3.5C3 4.60457 3.89543 5.5 5 5.5Z"
                stroke="#841F17"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.5 10.5V8.5C1.5 7.9477 1.94771 7.5 2.5 7.5H7.5C8.0523 7.5 8.5 7.9477 8.5 8.5V10.5"
                stroke="#841F17"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 5.5H11.5"
                stroke="#841F17"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{' '}
            Deactivate
          </Box>
        </Box>
      </Table.Td>
    </Table.Tr>
  ));

const handleTogglePopover=(index:number)=>{
  popOverIndex?setPopOverIndex(null):setPopOverIndex(index+1)
  console.log(popOverIndex)
}

const listItem=elements.map((element,i)=>(
  <motion.div
  key={i}
  initial={{
    x:-30,
  }}
  animate={{
    x:0,opacity:1
  }}
  transition={{
    delay:i-0.85,
    transition:0.85
  }}

  >
  <Box className="flex items-center  justify-between min-h-[4.2rem] border-b max-lg:p-4 font-light">

        <Checkbox
          aria-label="Select row"
         
        />
        <Text className="capitalize ">{element.name}</Text>

        <Text className='min-w-[5.2rem] bg-[#3B4BC18F] rounded-3xl min-h-2 text-sm p-2 capitalize'>{element.accessLevel}</Text>
      
      <PopoverComp  opened={popOverIndex==i+1}target={<IconDotsVertical onClick={()=>{
            console.log(popOverIndex)
           
            handleTogglePopover(i)
      }}/>} dropDownContent={
         <Box className="flex-col flex gap-y-2">
         <Box
           onClick={() => {
             setAppState({
               ...appState,
               addUser_mode: 'edit',
               addUser_name: element.name,
               addUser_email: element.email,
             });
         setPopOverIndex(null)
             setAddUserModalOpened(true);
           }}
           className=" min-h-[2.5rem] text-[0.8rem] text-[#4A02B8] flex items-center justify-center my-auto bg-[#F2EAFF] rounded-xl gap-x-4 ps-1 pe-1 hover:animate-pulse cursor-pointer hover:scale-110 transition-colors"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="12"
             height="12"
             viewBox="0 0 12 12"
             fill="none"
           >
             <path
               d="M1.5 10.5H10.5"
               stroke="#4A02B8"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M2.25 6.75011L7.25 1.75011C7.6642 1.3359 8.3358 1.3359 8.75 1.75011C9.1642 2.16433 9.1642 2.8359 8.75 3.25011L3.75 8.25011L1.75 8.75011L2.25 6.75011Z"
               stroke="#4A02B8"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>{' '}
           Edit
         </Box>

         <Box
           onClick={()=>{
             setConfirmModal(true)
             setPopOverIndex(null)
           }}
           className=" min-h-[2.5rem] text-[0.8rem] text-pink-200 flex items-center justify-center my-auto bg-pink-100 rounded-xl gap-x-4 ps-2 pe-2 hover:animate-pulse cursor-pointer hover:scale-110 transition-color"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="13"
             height="12"
             viewBox="0 0 13 12"
             fill="none"
           >
             <path
               d="M5 5.5C6.10457 5.5 7 4.60457 7 3.5C7 2.39543 6.10457 1.5 5 1.5C3.89543 1.5 3 2.39543 3 3.5C3 4.60457 3.89543 5.5 5 5.5Z"
               stroke="#841F17"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M1.5 10.5V8.5C1.5 7.9477 1.94771 7.5 2.5 7.5H7.5C8.0523 7.5 8.5 7.9477 8.5 8.5V10.5"
               stroke="#841F17"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M8.5 5.5H11.5"
               stroke="#841F17"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>{' '}
           Deactivate
         </Box>
       </Box>
      }/>  
        </Box>
        </motion.div>
))
  

  return (
    <>
     {
    confirmModal && (
      <Portal>
        <SmallModal
          opened={confirmModal}
          open={open}
          close={() => {
            setConfirmModal(false);
          }}
          header={<Text className="font-bold">Are you sure you want Deactivate Tony?</Text>}
          content={
            <Text className="font-light mt-[5%]">
              Deactivating this user means they will no longer have access to this Emdo account.
            </Text>
          }
          footer={
            <>
            <Group className='flex gap-x-6 mt-[20%] mb-[10%]'>

            <SlideInAnimation>
                <PrimaryButton
                  p="sm"
                  fullWidth={false}
                  onClick={() => {
                    // setAppState({
                    //   ...appState,jobPostStage:1
                    //  })
                   setConfirmModal(false)
                  }}
                  className="bg-white border border-grey-4 lg:w-[10rem] lg:h-[3rem]  hover:border-dotted text-dark max-lg:w-[40%] max-lg:font-normal max-lg:hidden  "
                  title="Cancel"
                />
              </SlideInAnimation>

              <SlideInAnimation>
                <PrimaryButton
                  p="xs"
                  fullWidth={false}
                  className="bg-primary-blue border lg:w-[10rem] max-lg:w-full lg:h-[3rem] max-lg:font-normal  "
                  title={'Deactivate'}
                  //   onClick={() => {
                  //    setvid({
                  //  ...
                  //    })

                  //   }}
                />
              </SlideInAnimation>
            </Group>
              
            </>
          }
          
        />
      </Portal>
    )
  }
        
    
    
    <Table verticalSpacing={px('1.25rem')} className="border border-[#E5E7EF] rounded-lg max-lg:hidden">
      <Table.Thead className="bg-[#E5E7EF] font-light  text-[#515151]  text-lg rounded-lg  ">
        <Table.Tr>
          <Table.Th />
          <Table.Th>
            <Box className="flex font-normal items-center gap-x-2">
              ID
              <Box>
                <Image
                  src="/svgs/chevron-up-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />

                <Image
                  src="/svgs/chevron-down-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />
              </Box>
            </Box>
          </Table.Th>
          <Table.Th>
            <Box className="flex font-normal items-center gap-x-2">
              User
              <Box>
                <Image
                  src="/svgs/chevron-up-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />

                <Image
                  src="/svgs/chevron-down-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />
              </Box>
            </Box>
          </Table.Th>
          <Table.Th>
            <Box className="flex font-normal items-center gap-x-2">
              Status
              <Box>
                <Image
                  src="/svgs/chevron-up-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />

                <Image
                  src="/svgs/chevron-down-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />
              </Box>
            </Box>
          </Table.Th>
          <Table.Th>
            <Box className="flex font-normal items-center gap-x-2">
              Access Level
              <Box>
                <Image
                  src="/svgs/chevron-up-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />

                <Image
                  src="/svgs/chevron-down-arrow.svg"
                  className="w-2 hover:scale-150 transition"
                />
              </Box>
            </Box>
          </Table.Th>
          <Table.Th>
            <Box className="font-normal">Action</Box>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>

<Box className='w-full lg:hidden'>
    <List>
      
        
     
{listItem}
      
    </List>
    </Box>
    </>
  );
}
