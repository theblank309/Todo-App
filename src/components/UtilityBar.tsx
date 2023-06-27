import { HStack } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import { Todo } from "../App";
import ClearAll from "./ClearAll";

interface Props {
  onSubmitTodo: (todo: Todo) => void;
  onClearAll: () => void;
}

function UtilityBar({ onSubmitTodo, onClearAll }: Props) {
  return (
    <HStack paddingBottom="10px" paddingTop="10px">
      <ButtonGroup gap="0">
        <AddTodo onSubmitTodo={onSubmitTodo} />
        <ClearAll onClearAll={onClearAll} />
      </ButtonGroup>
    </HStack>
  );
}

export default UtilityBar;
