import { promises as fsp } from "fs";
import path from "path";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

const fileExt = ".md";

const postsDirectory = path.join(process.cwd(), "articles");

/**
 * Get absolute path of directory
 * @param {string} dir diractory path
 * @returns absolute path of dir
 */
function absPath(dir) {
	return path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir);
}

/**
 * Get filename of all markdown files without extension
 * @param {*} dir markdown files directory to fetch
 * @returns all markdown filenames without extension
 */
export async function getFileIds(dir = `${postsDirectory}`) {
	const location = absPath(dir);
	const files = await fsp.readdir(location);

	return files
		.filter((fd) => path.extname(fd) === `${fileExt}`)
		.map((fd) => path.basename(fd, path.extname(fd)));
}

/**
 * Fetch all contents of sorted markdown files with formatted date. 
 * @param {*} dir markdown files directory to fetch
 * @returns all markdown contents
 */
export async function getAllFiles(dir) {
	const now = new Intl.DateTimeFormat("fr-CA", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(Date.now());

	const fileIds = await getFileIds(dir);
	const posts = await Promise.allSettled(
		fileIds.map((id) => getFileData(dir, id))
	);

	return posts
		.filter((post) => post.value && post.value.date <= now)
		.map((post) => post.value)
		.sort((p1, p2) => (p1.date < p2.date ? 1 : -1));
}

/**
 * Get markdown content related to specific filename(id).
 * @param {*} dir directory path where markdown file is
 * @param {*} id markdown filename
 * @returns 
 */
export async function getFileData(dir = "./", id) {
	const file = path.join(absPath(dir), `${id}${fileExt}`);
	const data = await fsp.readFile(file, "utf8");
	// fetch front matter
	const matter = fm(data);
	// format date
	matter.attributes.date = new Intl.DateTimeFormat("fr-CA", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(matter.attributes.date);

	// console.log(matter);

	// https://github.com/remarkjs/react-markdown#syntax
	// return <ReactMarkdown children={matter.body} remarkPlugins={[remarkGfm]} />;

	return { id, ...matter.attributes };
}
