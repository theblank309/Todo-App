import { HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import AddTodo from "./AddTodo";

function UtilityBar() {
  return (
    <HStack paddingBottom="10px" paddingTop="10px">
      <ButtonGroup gap="0">
        {/* <Button rightIcon={<AddIcon />} colorScheme="green">
          Add
        </Button> */}
        <AddTodo />
        <Button rightIcon={<DeleteIcon />} colorScheme="gray">
          Clear All
        </Button>
      </ButtonGroup>
    </HStack>
  );
}

export default UtilityBar;
