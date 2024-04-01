"usse client"
import { UserContext } from '@/context/EmployerContext';
import SlideInAnimation from '@/context/Motion';
import { Menu, Button, rem, Text, px, Drawer, Divider, Box, Group, Portal } from '@mantine/core';
import { IconArrowLeft, IconBell, IconCheck, IconChevronDown, IconHelp, IconSettings, IconUsers } from '@tabler/icons-react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { isMobile } from 'react-device-detect';
import PrimaryButton from '../Button';
import { SmallModal } from '../SmallModal';

interface DropDownProps {
  dropDownIcon?: React.ReactNode;
}
export default function DropDownProfile({ dropDownIcon }: DropDownProps) {
  // const remConv=(val:string)=>{
  //  return   px(val)
  // }
  const width = px('37.875rem');
  const router= useRouter()
  const {setVerifyModalOpened}=useContext(UserContext)
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  // console.log(width)
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
          header={<Text className="font-bold text-2xl">Logout?</Text>}
          content={
            <Text className="font-light mt-[5%] text-lg">
              Are you sure you want to Log out of your account?
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
                  className="bg-red-700 border lg:w-[10rem] max-lg:w-full lg:h-[3rem] max-lg:font-normal  "
                  title={'Logout'}
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
  
    <Menu
      trigger="click-hover"
      openDelay={100}
      closeDelay={400}
      width={!isMobile ? width : px('17.9rem')}
      shadow="md"
      transitionProps={{transition:"rotate-right",duration:150}}
    >
      <Menu.Target>
        <Text>
        
          {dropDownIcon}
          {/* <IconChevronDown/> */}
        </Text>
      </Menu.Target>


        {/* Drawer content */}
        <Menu.Dropdown className="text-center " style={{ border: '  rgb(126 132 148' }}>
          <Menu.Item component="h1" className=" text-dark-100 font-bold max-lg:text-lg max-lg:ms-4 border-b border">
            Account
            
          </Menu.Item>
          <Divider/>
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href="/employer/home/teams"
            target=""
onClick={(e)=>{
e.preventDefault()
  router.push("/employer/teams")
}}

          >
            <div className="flex gap-x-2 items-center ">
              <IconUsers
                style={{ width: rem(20.5), height: rem(20) }}
                className="max-lg:w-11  max-lg:h-20 "
              />
              <p className="text-grey-3 font-light max-md:text-sm">
               Team Management
              </p>{' '}
              {/* <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p> */}
            </div>
        
          </Menu.Item>
          <Divider/>
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
            onClick={(e)=>{
              setVerifyModalOpened(true)
              }}
          >
            <div className="flex gap-x-2 items-center ">
              <IconCheck
                style={{ width: rem(20.5), height: rem(20) }}
                className="max-lg:w-11  max-lg:h-20 "
              />
              <p className="text-grey-3 font-light max-md:text-sm">
               Account Verification
              </p>{' '}
              {/* <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p> */}
            </div>
          </Menu.Item>
          <Divider/>
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
            onClick={(e)=>{
e.preventDefault()
router.push("/employer/settings")
            }}
          >
            <div className="flex gap-x-2 items-center ">
              <IconSettings
                style={{ width: rem(20.5), height: rem(20) }}
                className="max-lg:w-11  max-lg:h-20 "
              />
              <p className="text-grey-3 font-light max-md:text-sm">
            Settings
              </p>{' '}
              {/* <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p> */}
            </div>
          </Menu.Item>
          <Divider/>
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
            onClick={(e)=>{
              e.preventDefault()
              router.push("/help-center")
                          }}
          >
            <div className="flex gap-x-2 items-center ">
              <IconHelp
                style={{ width: rem(20.5), height: rem(20) }}
                className="max-lg:w-11  max-lg:h-20 "
              />
              <p className="text-grey-3 font-light max-md:text-sm">
              Help Center
              </p>{' '}
              {/* <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p> */}
            </div>
          </Menu.Item>
          <Divider/>
          <Menu.Item
            mih={px('5.5rem')}
            className="   border-t-grey-1 border"
            leftSection
            component="a"
            href=""
            target=""
            onClick={(e)=>{
              e.preventDefault()
              setConfirmModal(true)
            }}
          >
            <div className="flex gap-x-2 items-center ">
              <Box className='flex items-center justify-center'>  <IconArrowLeft
                style={{ width: rem(20.5), height: rem(20) }}
                className="max-lg:w-11  max-lg:h-20 "
              /> |</Box>
            

              <p className="text-grey-3 font-light max-md:text-sm">
              logout
              </p>{' '}
              {/* <p className="max-lg:hidden text-[0.75rem] font-normal text-grey-3">3 mins ago</p> */}
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      
    </Menu>
    </>
  );
}
