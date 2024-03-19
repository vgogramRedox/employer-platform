"use client"
import { Progress, Slider } from '@mantine/core';

interface SliderProps{
percent:number
className?:string
}

export function ProgressBar({
    percent,
    className
}:SliderProps) {
 

  return (
  


 <Progress.Root transitionDuration={200} className={`${className}  lg:min-h-[1.34475rem]  `} >
 <Progress.Section aria-label="Uploading progress" value={percent}  className={` bg-primary-blue  rounded  `} />
</Progress.Root>
    
   
   


  );
}