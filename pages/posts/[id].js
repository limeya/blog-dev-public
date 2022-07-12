import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../libs/post-processor";

// post configuration
const postsDir = "posts";

export default function Article({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.body }} /> */}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
