import { Breadcrumbs, Anchor } from '@mantine/core';
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


    const linksCrumb =items?.map((item, index) => (
        <Anchor href={item.href} key={index} className='text-[#162170]' 
        >
          {item.title}
        </Anchor>
      ));
      
  return (
    <>
      
      <Breadcrumbs separator=">" separatorMargin="md"  className='lg:w-[90%]  max-lg:w-full mx-auto max-lg:text-lg max-lg:p-4'>
        {linksCrumb}
      </Breadcrumbs>
    </>
  );
}