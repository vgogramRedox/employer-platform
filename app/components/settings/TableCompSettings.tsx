'use client';
import { Table, Box, Image, Text, px, Portal, Group } from '@mantine/core';

import { useContext, useState } from 'react';
import PrimaryButton from '../Button';
import { UserContext } from '@/context/EmployerContext';
import { SmallModal } from '../SmallModal';

import SlideInAnimation from '@/context/Motion';



interface Element {
  id: number;

  device: string;
  dateLoggedIn: string;
  IPAddress: string;

}
interface ElementList {
  elements: Element[];
}
export default function TableCompSettings({ elements }: ElementList) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [confirmModal, setConfirmModal] = useState<boolean>(false);
 
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.id}
      bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}
    >
    
      <Table.Td className="opacity-0">{element.id}</Table.Td>
      <Table.Td>
        <Box className="font-light">
          <Text className="font-light capitalize text-[#515151]"> {element.device}</Text>
          
        </Box>
      </Table.Td>

      <Table.Td>
        <Text className="capitalize text-[#515151] font-light">{element.dateLoggedIn}</Text>
      </Table.Td>
      <Table.Td>
        <Text className="capitalize text-[#515151] font-light">{element.IPAddress}</Text>
      </Table.Td>
      <Table.Td>
        {' '}
        <PrimaryButton 
    fullWidth={false}
    className='bg-white text-dark border-dark rounded border-1 hover:bg-black hover:text-white me-5' title={
    <Text className=' text-[1rem] font-normal'>
    Sign Out
    </Text>
    }
    />
      </Table.Td>
    
     
    </Table.Tr>
  ));


  

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
        
    
    
    <Table verticalSpacing={px('1.25rem')} className="border border-[#E5E7EF] rounded-lg">
      <Table.Thead className="bg-[#E5E7EF] font-light  text-[#515151]  text-lg rounded-lg ">
        <Table.Tr>
          <Table.Th />
          <Table.Th>
            Device
          </Table.Th>
          <Table.Th>
           Date Logged In
          </Table.Th>
          <Table.Th>
            IP Address
          </Table.Th>
          <Table.Th>
            <Box className="flex font-normal items-center gap-x-2">
              Access Level
              <Box>
      
              </Box>
            </Box>
          </Table.Th>
         
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
    </>
  );
}
