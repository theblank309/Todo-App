import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FieldValues, useForm } from "react-hook-form";
import { Todo } from "../App";

interface Props {
  onSubmitTodo: (todo: Todo) => void;
}

function AddTodo({ onSubmitTodo }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    onSubmitTodo({
      id: 0,
      heading: data.heading,
      body: data.body,
    });
    reset({ heading: "", body: "" });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} rightIcon={<AddIcon />} colorScheme="green">
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Todo</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="heading">Heading</FormLabel>
                <Input id="heading" {...register("heading")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor="body">Body</FormLabel>
                <Textarea size="sm" id="body" {...register("body")} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default AddTodo;
