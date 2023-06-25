import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode == "dark"} onChange={toggleColorMode} />
      <Text>{colorMode[0].toUpperCase() + colorMode.slice(1)} Mode</Text>
    </HStack>
  );
}
