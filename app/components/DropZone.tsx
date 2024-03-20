import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useState } from 'react';
import { File } from 'buffer';

export function DropZone(props: Partial<DropzoneProps>) {
    const [files,setFiles]=useState<FileWithPath[]|undefined>()
    console.log(files)
  return (
    <Dropzone
      onDrop={(files) =>{ console.log('accepted files', files)
      setFiles(files)}
    }
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220}  >
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
          {
            files?.map((file)=>(
<Text>
{file?.name}
</Text>
            ))
          }
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
         {!files&&(
              <Text className='flex gap-3 text-light'>
              <IconUpload/>    Drag files here or click to upload
                  </Text>
         )}
        
        </Dropzone.Idle>

        {files?.length==0?(<>
            <IconUpload/>    Drag files here or click to upload
        </>):
            files?.map((file)=>(
<Text>
{file?.name}
</Text>
            ))
          }

        {/* <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div> */}
      </Group>
    </Dropzone>
  );
}