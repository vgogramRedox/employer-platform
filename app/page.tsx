
"use client"

import { useEffect } from 'react';

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
