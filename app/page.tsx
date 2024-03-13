
"use client"
import { Button, FileInput, Group, TextInput } from '@mantine/core';
import { HeaderMenu } from './components/Navbar';
import { useInputState } from '@mantine/hooks';
import { useState } from 'react';

export default function Home() {
  const [inputData,setInputData]=useState<File|null>(null)
  return (
    <main className="fixed inset-0 grid place-content-center">
      <div className="text-center flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold">
          Mantine <span className="text-red-500">&hearts;</span> Tailwind CSS
        </h1>
        <Group>
          <Button className='bg-gray-300'>Agree</Button>
          <Button variant="light">Disagree</Button>
        </Group>
      </div>
      <HeaderMenu/>
<FileInput description="Enter file" label="what you talking about willis" className='opacity-0'/>
    
    </main>
  );
}
