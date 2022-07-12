import fs from "fs";
import path from "path";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

const fileExt = ".md";
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Get filename of all markdown files without extension
 * @returns all markdown filenames without extension
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

/**
 * Get markdown content related to specific filename(id).
 * @param {*} dir directory path where markdown file is
 * @param {*} id markdown filename
 * @returns
 */
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}${fileExt}`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  // fetch front matter
  const matter = fm(fileContent);
  // format date
  matter.attributes.date = new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(matter.attributes.date);

  // console.log('here...');
  // console.log(matter);

  // https://github.com/remarkjs/react-markdown#syntax
  // return <ReactMarkdown children={matter.body} remarkPlugins={[remarkGfm]} />;

  return { id, ...matter.attributes };
  // return { id, contentHtml, ...matter.attributes };
}

/**
 * Fetch all contents of sorted markdown files with formatted date.
 * @param {*} dir markdown files directory to fetch
 * @returns all markdown contents
 */
export function getAllPostData() {
  const now = new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(Date.now());

  const fileNames = getAllPostIds();
  const posts = fileNames.map((fileName) => getPostData(fileName.params.id));

  console.log('here......')
  console.log(posts);

  return posts
    .filter((post) => post.date <= now)
    .sort((p1, p2) => (p1.date < p2.date ? 1 : -1));
}
