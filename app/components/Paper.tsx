import { Text ,Paper, Group, Image} from '@mantine/core';
import { IconArrowDownLeft } from '@tabler/icons-react';

interface PaperCompType{
    radius?:string|'lg',
    pay?:string,
    applied?:number
    className?:string


}
export default function PaperComp({
    radius,
    pay,
    applied,
    className
}:PaperCompType) {
  return (
    <Paper shadow="xs" p="xl" component='a' className={`${className} w-full flex justify-between p-3 mt-5`} bg={'primary.10'} radius={radius}>
        <Group className="flex-col gap-y-2">
        <Text className='font-bold text-2xl'>{pay} Product Designer</Text>
      <Text className='text-[1rem] me-auto'>
      N15,000/hr
      </Text>
        </Group>

        <Group>
        
      
       
    
     <IconArrowDownLeft/>
     <Text className=' text-2xl'>23</Text>
        </Group>
   

        <Group>
       
    
       
    
     <Image src="/images/charmMenu.svg"/>
        </Group>

    </Paper>
  );
}