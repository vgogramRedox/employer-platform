import { Badge, Box, ComboboxItem, ComboboxItemGroup, Flex, Group, Image, MultiSelect } from '@mantine/core';
import { IconChevronDown, IconCircleX, IconCircleXFilled } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { BadgeComp } from './BadgeComp';
import { UserContext } from '@/context/EmployerContext';
interface DataType{
   value: string, label: string
   }
   interface List{
  data:  DataType[]
   }


export default function MultiSelectComp({
  data
}:List) {
  const [value, setValue] = useState<string[]>([]);
  const { appState, setAppState } = useContext(UserContext);
  const handleRemoveValue = (indexToRemove: number) => {

    setValue((prevValue) => prevValue.filter((_, index) => index !== indexToRemove));
    setAppState({
      ...appState,
      tags: value,
    });
  };

  const handleChange=(newVal:string[])=>{
    const uniqueNewValues = newVal.filter((val) => !appState.tags.includes(val));
setValue(newVal)
setAppState({
  ...appState,
  tags: [...appState.tags, ...uniqueNewValues],
});
  }
  return (

    <>
   

<MultiSelect
      label=""
      mb={50}
      onChange={ handleChange}
      
      value={value}
      placeholder="Pick value"
      data={data}
      hidePickedOptions
      max={5}
      
      rightSection={<IconChevronDown/>}
      styles={{dropdown: { maxHeight: 200, overflowY: 'auto', textAlign:'center' }}}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false } ,dropdownPadding:'6px',
      transitionProps: { transition: 'pop', duration: 200 }
      
    } }
      searchable
    />
       <Box className='flex flex-row flex-wrap gap-4 items-center 
        '>
    {value?.map((val,i)=>(
   
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
      </Box>
 </>
   
  );
}