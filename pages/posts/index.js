import Layout from "../../components/layout";

import { getAllFiles } from "../../libs/post-processor";
import Head from "next/head";
import Link from "next/link";

import Postlink from "../../components/pagelink";
import { Center, Flex, UnorderedList } from "@chakra-ui/react";

const postsDir = "articles";

export async function getStaticProps() {
  const posts = await getAllFiles(postsDir);
  // console.log(posts);
  return {
    props: {
      postsData: posts,
    },
  };
}

export default function Posts({ postsData }) {
  // console.log(postsData);
  return (
    <Layout>
      <Head>
        <title></title>
        <meta name="description" content="A post list" />
      </Head>

      <Center>
        <UnorderedList fontSize='1.2em' fontWeight='500'>
          {postsData.map((post) => (
            <Postlink
              key={post.id}
              postsdir={postsDir}
              id={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}
        </UnorderedList>
      </Center>
    </Layout>
  );
}
