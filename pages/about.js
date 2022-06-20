import Layout from "../components/layout";

import {
  HStack,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

import styled from "@emotion/styled";

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const Bio = () => (
  <Box marginX="10em">
    <Heading as="h3" marginBottom="0.5em">
      About me
    </Heading>
    <UnorderedList>
      <ListItem paddingBottom="0.5em">
        <HStack align="center" spacing={6}>
          <BioYear>1992</BioYear>
          <BioSection>Born in</BioSection>
        </HStack>
      </ListItem>
      <ListItem paddingBottom="0.5em">
        <HStack align="center" spacing={6}>
          <BioYear>2012-2015</BioYear>
          <BioSection>...</BioSection>
        </HStack>
      </ListItem>
      <ListItem paddingBottom="0.5em">
        <HStack align="center" spacing={6}>
          <BioYear>2015-2022</BioYear>
          <BioSection>...</BioSection>
        </HStack>
      </ListItem>
      <ListItem paddingBottom="0.5em">
        <HStack align="center" spacing={6}>
          <BioYear>2022-Present</BioYear>
          <BioSection>...</BioSection>
        </HStack>
      </ListItem>
    </UnorderedList>

    {/* <Heading as="h3" marginTop="0.5em" marginBottom="0.5em">
      Contact me
    </Heading>
    <UnorderedList>
      <ListItem>
        <BioSection paddingBottom="0.5em">
          <BioYear>1992</BioYear>
          Born in Hebei, TangShan
        </BioSection>
      </ListItem>
    </UnorderedList> */}
  </Box>
);

const About = () => (
  <Layout>
    <Bio />
  </Layout>
);

export default About;
