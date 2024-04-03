import { Badge } from '@mantine/core';

interface BadgeCompProps{
    className?:string
    title?:React.ReactNode
    radius?:string
    size?:string
    color?:string
    onClick?:(e:any)=>void
    p?:string

}
export function BadgeComp({
    className,title,radius,size='lg',color,onClick,p
}:BadgeCompProps) {
  return <Badge
  p={p}
  onClick={onClick}
  color ={color} radius={radius} size={size} className={`${className} capitalize`}>{title}</Badge>;
}