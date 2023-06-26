import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Todo } from "../App";
import UpdateTodo from "./UpdateTodo";

interface Props {
  todos: Todo[];
  onDeleteTodo: (todo: Todo) => void;
  onEditTodo: (todo: Todo) => void;
}

function TodoCard({ todos, onDeleteTodo, onEditTodo }: Props) {
  const createCard = (todo: Todo) => {
    return (
      <Card key={todo.id} variant="filled">
        <CardHeader>
          <Heading size="md"> {todo.heading} </Heading>
        </CardHeader>
        <CardBody>
          <Text>{todo.body}</Text>
        </CardBody>
        <CardFooter>
          <Stack direction="row" spacing={2}>
            <UpdateTodo onEditTodo={onEditTodo} todo={todo} />
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => onDeleteTodo(todo)}
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </CardFooter>
      </Card>
    );
  };

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      paddingTop="10px"
    >
      {todos.map(createCard)}
    </SimpleGrid>
  );
}

export default TodoCard;
