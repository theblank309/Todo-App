import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack
      justifyContent="space-between"
      paddingBottom="10px"
      paddingTop="10px"
    >
      <Heading size={"xl"} fontFamily={"Monotype Corsiva"}>
        Todo
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
