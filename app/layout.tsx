import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/styles/globals.css';



import { MantineProvider ,ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

import { theme } from '@/theme/app';
import { MobileFooter } from './components/Employer/MobileFooter';
import { isMobile } from 'react-device-detect';
import { MobileHeader } from './components/Employer/MobileHeader';
import { Header } from './components/Employer/Header';
import { NavbarSimple } from './components/Employer/sidebar';

const font = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'vgrogram',
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-mantine-color-scheme="light" lang="en">
      <body className={` font-generalSans`}>
       

 
        <MantineProvider
        //@ts-ignore
        withGlobalStyles withNormalizeCss theme={theme}>
          
          <div className='lg:flex'>
      <div className='max-lg:hidden'>
      <NavbarSimple />
      </div>

     
    

    <main className='lg:ms-auto lg:min-w-[85%] lg:max-w-[85%] max-lg:w-full '>
<Header/>
<div className='lg:hidden'>
      <MobileHeader />
      </div>
{children}

<MobileFooter/>
    </main>
    </div>
    
{
  isMobile&&( <MobileFooter/>)
}

          </MantineProvider>
        
      </body>
    </html>
  );
}

