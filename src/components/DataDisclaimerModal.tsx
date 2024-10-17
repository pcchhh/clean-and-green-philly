import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { ThemeButton } from './ThemeButton';
import { useEffect } from 'react';
import { PiX } from 'react-icons/pi';

export default function DataDisclaimerModal() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Get onClose too

  // Use useEffect to open the modal when the page loads
  useEffect(() => {
    onOpen(); // Open modal on component mount
  }, [onOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        size={'3xl'}
        hideCloseButton={true}
        className="items-center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-green-600 text-4xl text-center">
            <h2>Disclaimer</h2>
            <ThemeButton
              color="tertiary"
              className="right-4 lg:right-[24px] absolute top-4 min-w-[3rem]"
              aria-label="Close"
              startContent={<PiX />}
              onPress={onClose}
            />
          </ModalHeader>

          <ModalBody className="p-10">
            <p>
              The City of Philadelphia recently stopped collecting key
              information used in determining which properties in the city are
              likely vacant. We are currently in conversations with relevant
              partners about how to address this challenge. In the meantime,
              please be advised that the vacancy data that we are showing here
              have not been updated since July of 2024.
            </p>
          </ModalBody>
          <ModalFooter>
            <ThemeButton
              color="primary"
              className=""
              aria-label="Close"
              label="I understand"
              onPress={onClose}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
