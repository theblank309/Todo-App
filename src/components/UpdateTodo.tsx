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
import { EditIcon } from "@chakra-ui/icons";
import { FieldValues, useForm } from "react-hook-form";
import { Todo } from "../App";

interface Props {
  todo: Todo;
  onEditTodo: (todo: Todo) => void;
}

function UpdateTodo({ todo, onEditTodo }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    onEditTodo({
      id: todo.id,
      heading: data.heading,
      body: data.body,
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="yellow">
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Todo</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="heading">Heading</FormLabel>
                <Input
                  id="heading"
                  defaultValue={todo.heading}
                  {...register("heading")}
                  fontFamily={"Arial, sans-serif"}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor="body">Body</FormLabel>
                <Textarea
                  size="sm"
                  id="body"
                  {...register("body")}
                  defaultValue={todo.body}
                  fontFamily={"Arial, sans-serif"}
                />
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

export default UpdateTodo;
