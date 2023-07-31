import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        h="2rem"
        mt={1}
      />
      <Text h="2rem" m="0">
        Dark Mode
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
