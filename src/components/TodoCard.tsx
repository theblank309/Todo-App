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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Todo } from "../App";

interface Props {
  todos: Todo[];
}

function TodoCard({ todos }: Props) {
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
            <Button size="sm" colorScheme="orange">
              <EditIcon />
            </Button>
            <Button size="sm" colorScheme="red">
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
