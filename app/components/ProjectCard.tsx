"use client"
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import PrimaryButton from './Button';

export function ProjectCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" className='bg-[#F6F7FC]'>
      <Card.Section component="a" href="/" className="p-4">
        <Image
        
          src="/pg.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Flutter Wave</Text>
        
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2} pb={3}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <PrimaryButton p="0" fullWidth={false} className='h-8 flex justify-center items-center p-[0.357rem] bg-primary-blue rounded-full w-3/4 text-sm font-normal mt-[0.62rem]' title="View Project"/>

    </Card>
  );
}