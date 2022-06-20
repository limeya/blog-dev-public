import { Button } from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ThemeToggleButton = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  // const textColor = useColorModeValue("gray.500", "gray.400");

  const bgColor = useColorModeValue("#FDF5E6", "gray.800");

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      isRound="true"
      size="md"
      alignSelf="center"
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleButton;
