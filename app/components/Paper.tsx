import { Text, Paper, Group, Image } from '@mantine/core';
import { IconArrowDownLeft } from '@tabler/icons-react';
import { isMobile } from 'react-device-detect';

interface PaperCompType {
  radius?: string | 'lg';
  pay?: string;
  applied?: number;
  className?: string;
}
export default function PaperComp({ radius, pay, applied, className }: PaperCompType) {
  return (
    <Paper
    component="a"
    //@ts-ignore
    href="jobs/active-jobs/1"
      shadow="xs"
      // p={isMobile ? 'xs' : 'xl'}
    
      className={`${className} cursor-pointer w-full flex justify-between  max-lg:items-center max-lg:p-2 mt-5 max-lg:min-h-28 lg:p-10 max-lg: mb-5`}
      bg={'primary.10'}
      radius={radius}
    >
      <Group className="flex-col gap-y-2 max-lg:gap-y-0">
        <Text className="font-bold max-lg:text-[1rem] lg:text-2xl">{pay} Product Designer</Text>
        <Text className="text-[1rem] me-auto font-light">N15,000/hr</Text>
      </Group>


      <Group className='max-lg:gap-x-0'>
        <IconArrowDownLeft />
        <Text  className=" text-2xl max-lg:text-[1rem]">
          23
        </Text>
      </Group>

      <Group>
        <Image src="/svgs/charmMenu.svg" />
      </Group>
    </Paper>
  );
}
