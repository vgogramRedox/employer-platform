import { Box, Image, Text } from '@mantine/core'
import React from 'react'
interface SenderPropsTypes{
    name:string
    text:string
    avatar:string
}

function Sender({
    name,
    text,
    avatar

}:SenderPropsTypes) {
  return (
   <>
   
  
            <Box className="flex ms-auto min-h-24 mt-14 gap-x-5 ">
              <Box className="bg-primary-blue min-w-[60%] rounded-tl-lg rounded-tr-lg rounded-br-none rounded-bl-lg p-4 text-slate-200 ">
                <Text className="text-sm">{name}</Text>
                <Text className="min-h-[2.25rem] font-light  leading-[1.125rem] text-[#141316] text-sm">
                 {text}
                </Text>
              </Box>
              <Image className="w-[2.5rem] h-[2.5rem] self-end rounded-full" src={avatar} />
            </Box>
   </>
  )
}

export default Sender