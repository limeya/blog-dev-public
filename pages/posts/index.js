import Layout from "../../components/layout";

import { getAllFiles } from "../../libs/post-processor";
import Head from "next/head";

import Pagelink from "../../components/pagelink";

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

			<h1>博客列表</h1>

			<aside className="pagelist">
				{postsData.map((post) => (
					<Pagelink
						key={post.id}
						postsdir={postsDir}
						id={post.id}
						title={post.title}
						description={post.description}
						date={post.date}
					/>
				))}
			</aside>
		</Layout>
	);
}
