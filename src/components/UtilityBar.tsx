import { HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import AddTodo from "./AddTodo";
import { Todo } from "../App";

interface Props {
  onSubmitTodo: (todo: Todo) => void;
}

function UtilityBar({ onSubmitTodo }: Props) {
  return (
    <HStack paddingBottom="10px" paddingTop="10px">
      <ButtonGroup gap="0">
        <AddTodo onSubmitTodo={onSubmitTodo} />
        <Button rightIcon={<DeleteIcon />} colorScheme="gray">
          Clear All
        </Button>
      </ButtonGroup>
    </HStack>
  );
}

export default UtilityBar;
