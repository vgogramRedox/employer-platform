import { Badge } from '@mantine/core';

interface BadgeCompProps{
    className?:string
    title?:React.ReactNode
    radius?:string
    size?:string
    color?:string
    onClick?:()=>void

}
export function BadgeComp({
    className,title,radius,size='lg',color,onClick
}:BadgeCompProps) {
  return <Badge
  onClick={onClick}
  color ={color} radius={radius} size={size} className={`${className} capitalize`}>{title}</Badge>;
}