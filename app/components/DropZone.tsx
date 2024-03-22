import { Group, Image, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
  MIME_TYPES,
} from '@mantine/dropzone';
import { useContext, useEffect, useState } from 'react';
import { File } from 'buffer';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import { IconCamera } from '@tabler/icons-react';
import {
  generateVideoThumbnails,
  importFileandPreview,
} from '@rajesh896/video-thumbnails-generator';
import { UserContext } from '@/context/EmployerContext';

// function base64ToFile(base64: string): File {
//   // Split the base64 string to get the data type and the base64 data
//   const [dataType, base64Data] = base64.split(',');

//   // Convert the base64 data to a Blob
//   const byteCharacters = atob(base64Data);
//   const byteArrays = [];
//   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
//     const slice = byteCharacters.slice(offset, offset + 512);
//     const byteNumbers = new Array(slice.length);
//     for (let i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }
//   const blob = new Blob(byteArrays, { type: dataType });

//   // Create a File object from the Blob
//   const file = new File([blob], "thumbnailPreview", { type: dataType });
// console.log(file)
//   return file;
// }

export function DropZone(props: Partial<DropzoneProps>) {
  const breakpoint = useMediaQuery('(min-width: 56.25em)');
  const [file, setFile] = useState<FileWithPath | undefined>();
  const [error, setError] = useState('');
  // console.log(files);
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  const { setAppState, appState } = useContext(UserContext);

  // const setStorage=()=>{
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('jobPostThumbNail', thumbnails);
  //   }
  // }

  // useEffect(()=>{
  //   if (file){

  //   }

  // },[])
  const [value, setValue, removeValue] = useLocalStorage({
    key: 'jobVidThumbNail',
    defaultValue: '',
  });
  return (
    <Dropzone
      onDrop={(files) => {
        // console.log('accepted files', files);
        setFile(files[0]);
        setError('');
        // setAppState({
        //   ...appState,
        //   jobVidThumbNail: file,
        // });
        //@ts-ignore
        generateVideoThumbnails(file, 3).then((thumbs) => {
          setThumbnails(thumbs);
          setValue(thumbs[0]);
          // console.log(value);
          // setStorage()
        });
      }}
      onReject={(files) => {
        // console.log('rejected files', files);
        setError(files[0]?.errors[0]?.code);
        // console.log('error', error);
      }}
      maxSize={5 * 1024 ** 2}
      //@ts-ignore
      accept={MIME_TYPES}
      {...props}
    >
      <Group justify="center" gap="xl" mih={breakpoint ? 220 : '100'}>
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
          {<Text>{file?.name}</Text>}
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
            stroke={1.5}
          />
          <Text className="text-red-200"> {error}</Text>
        </Dropzone.Reject>
        <Dropzone.Idle>
          {!file && !error&&(
            <Text
              className="flex gap-3 max-lg:font-light max-lg:text-sm max-lg:text-[#7E8494] max-lg:items-center 
              "
            >
              {breakpoint ? (
                <>
                  <IconUpload />
                  Drag files here or click to upload
                </>
              ) : (
                <>
                  <IconCamera color="#7E8494" /> Click to open camera or upload
                </>
              )}
            </Text>
          )}
          {file && <Text>{file?.name}</Text>}
          {error && (
            <div className='flex gap-2'>
              <IconX
                style={{ width: rem(52), height: rem(32), color: 'var(--mantine-color-red-6)' }}
                stroke={1.5}
              />
              <Text className="text-red-200"> {error}</Text>
            </div>
          )}
        </Dropzone.Idle>

        {/* {thumbnails?.map((thumbnail) => (
          <Image src={thumbnail} />
        ))} */}

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
