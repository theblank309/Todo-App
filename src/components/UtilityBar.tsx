import { HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

function UtilityBar() {
  return (
    <HStack
      paddingLeft="20px"
      paddingRight="20px"
      paddingBottom="10px"
      paddingTop="10px"
    >
      <ButtonGroup gap="0">
        <Button rightIcon={<AddIcon />} colorScheme="green">
          Add
        </Button>
        <Button rightIcon={<DeleteIcon />} colorScheme="gray">
          Clear All
        </Button>
      </ButtonGroup>
    </HStack>
  );
}

export default UtilityBar;
