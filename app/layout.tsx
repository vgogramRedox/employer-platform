import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/styles/globals.css';



import { MantineProvider ,ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

import { theme } from '@/theme/app';

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
        withGlobalStyles withNormalizeCss theme={theme}>{children}</MantineProvider>
        
      </body>
    </html>
  );
}
