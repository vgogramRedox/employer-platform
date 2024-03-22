import { Group, Image, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
  MIME_TYPES,
} from '@mantine/dropzone';
import { useContext, useState } from 'react';
import { File } from 'buffer';
import { useMediaQuery } from '@mantine/hooks';
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
  // console.log(files);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  // console.log(thumbnails[0])
  const { setAppState, appState } = useContext(UserContext);
  // console.log(appState)
  if (file) {
    //@ts-ignore
    generateVideoThumbnails(file, 2).then((thumbs) => {
      setThumbnails(thumbs);
      const buff =Buffer.from(thumbs[0])
      // console.log(buff)
      setAppState({
        ...appState
        // jobVidThumbNail:  base64ToFile(thumbs[0]),
      });
    });
  }

  return (
    <Dropzone
      onDrop={(files) => {
        console.log('accepted files', files);
        setFile(files[0]);
      }}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
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
          <Text className='text-red-200'> eRROR</Text>
        </Dropzone.Reject>
        <Dropzone.Idle>
          {!file && (
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
            {file && (
          <Text>{file?.name}</Text>
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
