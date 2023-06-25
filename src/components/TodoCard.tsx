import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function TodoCard() {
  const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const createCard = (num: number) => {
    console.log("Created");
    return (
      <Card key={num} variant="filled">
        <CardHeader>
          <Heading size="md"> Heading {num} </Heading>
        </CardHeader>
        <CardBody>
          <Text>More information about heading {num}</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
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
      {tests.map(createCard)}
    </SimpleGrid>
  );
}

export default TodoCard;
