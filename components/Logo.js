import { Flex, Text, Spacer } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const Logo = () => (
  <Flex alignItems="center" gap={3}>
    <Image
      boxSize="50px"
      borderRadius="full"
      src="/images/logo.png"
      alt="limeya"
    ></Image>
    {/* <Spacer /> */}
    <Text fontSize="1.5em" fontWeight="700">
      {" "}
      李梦阳的博客
    </Text>
  </Flex>
);

export default Logo;
