import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  onClearAll: () => void;
}

function ClearAll({ onClearAll }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onYesButton = () => {
    onClearAll();
    onClose();
  };
  return (
    <>
      <Button rightIcon={<DeleteIcon />} colorScheme="gray" onClick={onOpen}>
        Clear All
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to clear all todos?</ModalHeader>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onYesButton}>
              Yes
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ClearAll;
