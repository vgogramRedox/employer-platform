import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

 interface ModalType {
  opened: boolean;
  open: () => void;
  header:React.ReactNode;
  footer:React.ReactNode;
  content:React.ReactNode
  close: Dispatch<SetStateAction<boolean>> | any;
}

export function SmallModal({opened,open,close,header,content,footer}:ModalType) {


  return (
    <>
      <Modal opened={true} onClose={close} withCloseButton={true}>
        {
          header
        }

        {
          content
        }

{
  footer
}
      </Modal>


      <Button onClick={open}>Open Modal</Button>
    </>
  );
}