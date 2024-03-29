"use client"
import { Breadcrumbs, Anchor } from '@mantine/core';
import { usePathname } from 'next/navigation';
interface LinkProps{
    title: string,
     href: string
}
interface BreadcrumbsNavProp{
  items:LinkProps[]
  className?:string
}
export default function BreadCrumbsNav({
  items,
  className
}:BreadcrumbsNavProp) {

  
  const pathName= usePathname()

    const linksCrumb =items?.map((item, index) => (
        <Anchor href={item.href} key={index} className={`capitalize font-light ${item?.href==pathName?" text-dark-100":"text-link-blue  " }  `}
        >
          {item.title}
        </Anchor>
      ));
      
  return (
    <>
      
      <Breadcrumbs separator=">" separatorMargin="md"  className={`${className} lg:w-[90%] max-lg:hidden max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4 ms-0`}>
        {linksCrumb}
      </Breadcrumbs>
    </>
  );
}