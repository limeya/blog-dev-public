import { extendTheme } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Merriweather, Georgia, serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
});

export default theme;
