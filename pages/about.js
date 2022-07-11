import Layout from "../components/layout";
import Head from "next/head";

import {
  HStack,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Flex,
  Link,
  Image,
  Icon,
} from "@chakra-ui/react";

import styled from "@emotion/styled";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

// import { MdSettings,MdReceipt,MdGroupWork } from "react-icons/md";

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

// const Bio = () => (

// );

const About = () => (
  <Layout>
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog by limeya" />
      </Head>

      <Flex
        marginX="10em"
        flexDirection="column"
        fontWeight="600"
        fontSize="lg"
      >
        <Image
          boxSize="200px"
          borderRadius="full"
          objectFit="cover"
          marginX="auto"
          marginBottom="3em"
          src="/images/logo.png"
          alt="李梦阳"
        />

        <Heading as="h4" marginBottom="0.5em" size="lg">
          关于作者
        </Heading>
        <UnorderedList>
          <ListItem paddingBottom="0.5em">
            热爱技术，兴趣广泛，尤其是历史和美食，吃货和非典型军迷；
          </ListItem>
          <ListItem paddingBottom="0.5em">
            本科初涉计算机，颇为讨厌，后发现是讨厌古板无趣的学习方式；
          </ListItem>
          <ListItem paddingBottom="0.5em">
            PhD 时开始
            <Link
              href="https://blog.csdn.net/lmy86263"
              isExternal
              color="#0B2E59"
              fontWeight="bold"
            >
              在CSDN写技术博客，累计 113 篇，
            </Link>
            发现写作也很有趣；
          </ListItem>
          <ListItem paddingBottom="0.5em">
            毕业后重启写作，主要偏向技术、读书、效率和个人发展等内容；
          </ListItem>
          <ListItem>顺便说一下，读书是最有性价比的自我投资。</ListItem>
        </UnorderedList>
        {/* <UnorderedList>
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
      </UnorderedList> */}

        <Heading as="h4" size="lg" marginY="0.5em">
          创作工具
        </Heading>
        <UnorderedList>
          <ListItem paddingBottom="0.5em">
            写作：主要使用Notion，主要希望All-in-One；
          </ListItem>
          <ListItem paddingBottom="0.5em">
            备份：主要使用Github，以防万一，本地配备NAS；
          </ListItem>
          <ListItem paddingBottom="0.5em">编程：VsCode</ListItem>
          <ListItem paddingBottom="0.5em">
            资料收集：
            <UnorderedList paddingTop="0.3em">
              <ListItem>碎片思考：Flomo</ListItem>
              <ListItem>整理分类：Cubox</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            阅读：微信读书是神器；
          </ListItem>
        </UnorderedList>

        <Heading as="h4" size="lg" marginY="0.5em">
          联系我
        </Heading>
        <HStack spacing="24px" alignContent="center">
          <a href="https://github.com/limeya">
            {/* The default icon size is 1em (16px) */}
            <Icon as={BsGithub} w={6} h={6} color="gray.600" />
          </a>

          {/* Use the `boxSize` prop to change the icon size */}
          <a href="mailto:lmy86263@gmail.com">
            {/* The default icon size is 1em (16px) */}
            <Icon as={FiMail} w={6} h={6} color="gray.600"></Icon>
          </a>

          {/* Use the `color` prop to change the icon color */}
          {/* <Icon as={MdGroupWork} w={8} h={8} color="red.500" /> */}
        </HStack>
      </Flex>
    </div>
  </Layout>
);

export default About;
