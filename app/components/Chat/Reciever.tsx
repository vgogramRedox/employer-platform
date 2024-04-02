import { Box, Image, Text } from '@mantine/core'
import React from 'react'
interface SenderPropsTypes{
    name:string
    text:string
    avatar:string
}

function Reciever({
    name,
    text,
    avatar

}:SenderPropsTypes) {
  return (
   <>
   
   <Box className="flex me-auto min-h-24 mt-14 gap-x-5">
              <Image className="w-[2.5rem] h-[2.5rem] self-end" src={avatar} />
              <Box className="bg-grey-9 min-w-[60%] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none p-4">
                <Text className="text-[#141316] text-sm">{name}</Text>
                <Text className="min-h-[2.25rem] text-[#141316] font-normal leading-[1.125rem]">
                  {text}
                </Text>
              </Box>
            </Box>
           
   </>
  )
}

export default Reciever