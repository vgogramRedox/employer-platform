"use client"
import { Breadcrumbs, Anchor } from '@mantine/core';
import { usePathname } from 'next/navigation';
interface LinkProps{
    title: string,
     href: string
}
interface BreadcrumbsNavProp{
  items:LinkProps[]
  className?:string,
  reverse?:boolean
}
export default function BreadCrumbsNav({
  items,
  className,
  reverse
}:BreadcrumbsNavProp) {

  
  const pathName= usePathname()

    const linksCrumb =items?.map((item, index) => (
        <Anchor href={item.href} key={index} className={`capitalize font-normal ${item?.href==pathName?" text-dark-100":"text-link-blue  " }  `}
        >
          {item.title}
        </Anchor>
      ));
      
      const linksCrumbReverse =items?.map((item, index) => (
        <Anchor href={item.href} key={index} className={`capitalize font-normal ${item?.href==pathName?"text-[#162170] ":"   text-dark-100" }  `}
        >
          {item.title}
        </Anchor>
      ));
  return (
    <>
      
      <Breadcrumbs separator=">" separatorMargin="sm"  className={`${className} lg:w-[90%] max-lg:hidden max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4 ms-0`}>
        {reverse?linksCrumbReverse:linksCrumb}
      </Breadcrumbs>
    </>
  );
}