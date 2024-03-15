"use client"
import { Grid, Image } from '@mantine/core';

export function VidThumbNail() {
  return (
   
      <Grid.Col span={3} className="" >
        
        <div className='mx-auto text-center bg-purple-200 rounded-lg min-w-[15.22888rem] min-h-[16.11313rem] flex-shrink  pt-3'>
        <Image src="/images/thumbnail1.svg" className='max-w-[90%] mx-auto '/>
        <p className=' text-dark lg:text-lg font-semibold mt-2'>Tolu Ogunnipe</p>
        <p className="text-sm">Product desigenr</p>
        </div>
      
        </Grid.Col>
   
    
  );
}