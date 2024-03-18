import { Badge } from '@mantine/core';

interface BadgeCompProps{
    className?:string
    title?:React.ReactNode
    radius?:string
    size?:string
    color?:string

}
export function BadgeComp({
    className,title,radius,size='lg',color
}:BadgeCompProps) {
  return <Badge  color ={color} radius={radius} size={size} className={`${className} capitalize`}>{title}</Badge>;
}