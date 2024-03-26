"use client"
import { Breadcrumbs, Anchor } from '@mantine/core';
import { usePathname } from 'next/navigation';
interface LinkProps{
    title: string,
     href: string
}
interface BreadcrumbsNavProp{
  items:LinkProps[]
}
export default function BreadCrumbsNav({
  items
}:BreadcrumbsNavProp) {

  
  const pathName= usePathname()

    const linksCrumb =items?.map((item, index) => (
        <Anchor href={item.href} key={index} className={`${item?.href==pathName?"text-[#162170]":"text-dark" }  `}
        >
          {item.title}
        </Anchor>
      ));
      
  return (
    <>
      
      <Breadcrumbs separator=">" separatorMargin="md"  className='lg:w-[90%] max-lg:hidden max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4'>
        {linksCrumb}
      </Breadcrumbs>
    </>
  );
}