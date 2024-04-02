'use client';
import React, { useContext } from 'react';
import { Box, Image, Paper, Text, Container, Group, rem } from '@mantine/core';
import { VidThumbNail } from '@/app/components/Employer/VidThumbNail';

import { IconEdit, IconMapPin, IconStar, IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { EmptyVidThumbNail } from '@/app/components/Employer/EmptyVidThumbNail';
import PrimaryButton from '@/app/components/Button';
import { UserContext } from '@/context/EmployerContext';
import { useRouter } from 'next/navigation';

interface CandidateInfoProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  borderB?: string;
  p?: string;
}
const CandidateInfo = ({
  header,
  content,
  className,
  p = 'sm',
  borderB = 'border-b',
}: CandidateInfoProps) => (
  <Paper
    shadow="xs"
    p={p}
    bg={'primary.10'}
    className={`min-h-32 lg:max-w-[90%] mt-14 ${className}`}
  >
    <header className={`text-center font-bold  ${borderB}`}>{header}</header>

    {content}
  </Paper>
);

function page() {
  const { setAddVideoModalOpened, setVerifyModalOpened } = useContext(UserContext);
  const router = useRouter();
  return (
    <Box>
      <Box className="  max-lg:bg-[#040513] max-lg:full max-lg:min-h-10 lg:hidden flex justify-between items-center text-[#FFFFFFD9] lg:p-5">
        <Link
          href=""
          onClick={(e) => {
            e.preventDefault();
            setVerifyModalOpened(true);
          }}
          className="underline font-normal  ms-[10%] text-sm"
        >
          Verify your profile
        </Link>
        <IconX className="w-6 h-6 me-[2%] cursor-pointer" />
      </Box>
      <div className="lg:min-h-[4rem] max-lg:h-[2rem] lg:h-[4rem] max-lg:hidden min-w-full bg-[#D3D7F1] font-light flex items-center justify-between ">
        <Box className="ms-[10%]">
          Verify your profile to attract the best talent.{' '}
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              setVerifyModalOpened(true);
            }}
            className="underline font-normal"
          >
            Verify your profile
          </Link>
        </Box>

        <IconX className="w-6 h-6 me-[2%] cursor-pointer" />
      </div>
      <Box className="lg:w-[90%] flex max-lg:block max-lg:text-lg mb-5 lg:p-5">
        <div className="min-h-[7rem] max-lg:min-h-[4rem] h-[7rem] min-w-full bg-[#D3D7F1] lg:hidden"></div>

        <Box className=" w-[50%] max-lg:w-full max-lg:p-2  ">
          <div className="mt-3.5 max-lg:mb-20 max-lg:top-[22%] max-lg:absolute  max-lg:flex max-lg:items-center  max-lg:w-full max-lg:gap-x-8  ">
            <div className=''>
              <Box className="   ">
                <div className="lg:w-[8.6rem] lg:h-[8.6rem] lg:mx-auto lg:flex lg:items-center lg:gap-x-8 relative lg:justify-start ">
                  <Image src="/svgs/person.svg" className="[8.6rem] [8.6rem] " />
                  <Image
                    src="/svgs/verifiedCheck.svg"
                    className="w-[1.6rem] h-[1.6rem] absolute top-[10%] left-[80%]"
                  />
                  <IconEdit
                    onClick={() => {
                      router.push('profile/edit');
                    }}
                    className="absolute top-[90%] left-[90%] font-light text-grey-2"
                  />
                </div>
              </Box>
              <div className="flex gap-x-4 items-center  lg:justify-center mt-2.5">
                <Box className=" flex-col gap-y-4">
                  <Text className="font-bold text-lg max-lg:text-sm">Tolu Ogunnipe</Text>

                  <Text className="lg:text-[1rem] flex gap-x-2 font-light max-lg:text-sm lg:mt-[0.69rem] ">
                    <IconMapPin className="max-lg:w-5" /> Lagos,Nigeria
                  </Text>
                </Box>
              </div>
              <Box className="gap-2 flex  lg:mt-[0.69rem] lg:justify-center">
                <Image src="/svgs/globe.svg" className="min-w-10 min-h-10" />

                <Image src="/svgs/linkedIn.svg" className="min-w-10 min-h-10" />
              </Box>
            </div>

            <div>
              {/* small screen */}
              <Paper
                bg={'primary.10'}
                className="font-bold flex items-center gap-x-3 w-[7rem] min-h-[2.6rem] lg:hidden text-sm p-2 mt-[10%] "
              >
                <Image src="/svgs/diamondYellow.svg" className="w-6 h-6" /> Premium{' '}
              </Paper>

              <Box className="flex lg:hidden gap-x-2.5 justify-center mt-[60%]">
                <Box className="bg-primary-blue text-white-smoke w-[4rem] h-[3.9375rem] rounded-lg text-center">
                  <Text className="max-lg:text-[0.5rem] text-center">
                    Jobs <br /> Completed
                  </Text>
                  <Text className="font-bold  max-lg:text-[1.5rem] text-center">20</Text>
                </Box>

                <Box className="bg-primary-blue text-white-smoke w-[4rem] h-[3.9375rem] rounded-lg text-center">
                  <Text className="max-lg:text-[0.5rem] text-center">
                    Jobs <br /> Completed
                  </Text>
                  <Text className="font-bold max-lg:text-[1.5rem] text-center">20</Text>
                </Box>
              </Box>
            </div>
          </div>

          {/* for large screen */}
          <CandidateInfo
            borderB=""
            className="max-lg:hidden lg:w-[18.5rem] min-h-[5.657rem] lg:mx-auto mt-5 lg:flex lg:items-center "
            content={
              <Box className="">
                <Text className="font-bold flex items-center gap-x-6 ">
                  <Image src="/svgs/diamondYellow.svg" className="min-w-10 min-h-10" /> Premium{' '}
                  <PrimaryButton
                    p="0"
                    fullWidth={false}
                    className="font-light bg-primary-blue text-sm rounded-2xl h-[2rem] w-[6.5rem]"
                    title={<>Upgrade</>}
                  />
                </Text>
              </Box>
            }
          />
          {/* for large screen */}
          <Group className="flex  justify-center min-h-32 lg:w-[18.5rem] max-lg:hidden lg:mx-auto">
            <CandidateInfo
              borderB=""
              p=""
              className="max-lg:hidden rounded-lg w-[7.68rem]"
              content={
                <Box className="mt-5 text-center ">
                  <Box className="w-[80%] mx-auto ">
                    <Text className="font-light">Jobs Completed</Text>
                    <Text className="font-bold text-3xl">20</Text>
                  </Box>
                </Box>
              }
            />

            <CandidateInfo
              p=""
              borderB=""
              className="max-lg:hidden rounded-lg w-[7.68rem]"
              content={
                <Box className="mt-5 text-center">
                  <Container className="w-[80%]  mx-auto">
                    <Text className="font-light">Hired Talent</Text>
                    <Text className="font-bold text-3xl">20</Text>
                  </Container>
                </Box>
              }
            />
          </Group>
        </Box>

        <Box className="w-full  max-lg:p-4 max-lg:mt-20 ">
          <Box className="flex text-bold justify-between items-center text-2xl lg:w-[75%] max-lg:text-sm  max-lg:font-bold ">
            <IconEdit className="opacity-0" />
            About Ovidigo{' '}
            <IconEdit
              onClick={() => {
                router.push('profile/edit');
              }}
            />
          </Box>
          <div className=" grid  lg:grid-cols-2 max-lg:grid-cols-2 md:grid-cols-2 gap-4 max-lg:w-full  lg:w-[80%] mt-2.5 max-lg:mt-5">
            <EmptyVidThumbNail
              onClick={() => {
                setAddVideoModalOpened(true);
              }}
            />
            <VidThumbNail />
          </div>

          {/* for small screen */}
          <CandidateInfo
            className=""
            header={
              <Box className="flex text-bold justify-between items-center  ">
                <IconEdit className="opacity-0" />
                More about us{' '}
                <IconEdit
                  className="cursor-pointer"
                  onClick={() => {
                    router.push('profile/edit?info=organizationalInfo');
                  }}
                />
              </Box>
            }
            content={
              <div className="max-w-[80%] m-auto mt-3 max-lg:font-light">
                <Text className='font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum,
                  doloribus incidunt quos vero non eveniet eum debitis quae aliquam totam blanditiis
                  quasi, nobis minus. Est aut nisi libero repudiandae!
                </Text>
              </div>
            }
          />

          {/* for large screen */}
          <CandidateInfo
            className="max-lg:hidden"
            header={
              <Box className="flex text-bold justify-between items-center  ">
                <IconEdit className="opacity-0" />
                About Ovidigo{' '}
                <IconEdit
                  onClick={() => {
                    router.push('profile/edit?info=organizationalInfo');
                  }}
                />
              </Box>
            }
            content={
              <div className="max-w-[80%] m-auto mt-3 font-light">
                <Text className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum,
                  doloribus incidunt quos vero non eveniet eum debitis quae aliquam totam blanditiis
                  quasi, nobis minus. Est aut nisi libero repudiandae!
                </Text>
              </div>
            }
          />

          {/* larger screen */}
          <CandidateInfo
            className=" max-lg:hidden"
            header={<Text className="text center font-bold">Reviews</Text>}
            content={
              <div className="mt-5">
                <Text className=" flex h-10 items-center gap-5 my-auto">
                  <IconStar
                    className="w-10 h-10 border rounded-full p-2"
                    style={{ color: '#B71A34' }}
                  />{' '}
                  <Group className="block">
                    {/* <IconEdit /> */}
                    <Text className="font-bold">David Osas</Text>
                    <Text className="font-light">Tolu is amazing to work with.</Text>
                  </Group>
                </Text>
              </div>
            }
          />

          {/* for smaller screen */}
          <CandidateInfo
            className="lg:hidden mb-[30%]"
            header={<Text className="text center ">REVIEWS</Text>}
            content={
              <div className="">
                <Text className=" flex h-10 items-center gap-5 my-auto">
                  <IconStar
                    className="w-10 h-10 border rounded-full p-2"
                    style={{ color: '#B71A34' }}
                  />{' '}
                  David Osas
                </Text>
                <Text className="max-lg:font-light">Tolu is amazing to work with.</Text>
              </div>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default page;
