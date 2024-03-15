import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';
interface SliderProps{
percent:number
className?:string
}

export function Range({
    percent,
    className
}:SliderProps) {
 

  return (
    <Slider
    className={`${className}  `}
      defaultValue={percent}
      
      color="blue"
      min={10}
      size={'lg'}
      max={100}
    //   ref={ref}
    //   label={null}
    //   styles={{
    //     thumb: {
    //       transition: 'opacity 150ms ease',
    //       opacity: hovered ? 1 : 0,
    //     },
    //   }}
    />
  );
}