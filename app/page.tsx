
"use client"
import { ActionIcon, Box, Button, FileInput, Group, Image, TextInput, Title, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderMenu } from './components/Navbar';
import { useInputState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { theme } from '@/theme/app';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx'
import classes from '@/styles/Demo.module.css'
import Link from 'next/link';
import PrimaryButton from './components/Button';
import Demo from './components/Carousel';
import useIsMobile from '@/hooks/useIsMobile';
import { useRouter } from 'next/navigation';
import MobileLanding from './components/MobileLanding';
import {isMobile} from 'react-device-detect';
export default function Home() {

const router=useRouter()
 
  useEffect(()=>{
    // console.log(isMobile)
if(!isMobile){
  router.replace("/login")
}


  },[])

  if (isMobile) {
   
    return(
      <MobileLanding/>
    )

           
  
          
  //         </section>
  
  //       </div>
  //     </main>
  //     </Box>
  //   </div>

  //   <MobileLanding/>
  //   );
 
  }
 
 
}
