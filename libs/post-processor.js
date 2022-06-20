import { promises as fsp } from "fs";
import path from "path";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

const fileExt = "md";

// get absolute path of directory
function absPath(dir) {
	return path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir);
}

//
export async function getFileIds(dir = "./") {
	const location = absPath(dir);
	const files = await fsp.readdir(location);

	return files
		.filter((fd) => path.extname(fd) === `.${fileExt}`)
		.map((fd) => path.basename(fd, path.extname(fd)));
}

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

	// console.log(posts);

	return posts
		.filter((post) => post.value && post.value.date <= now)
		.map((post) => post.value)
		.sort((p1, p2) => (p1.date < p2.date ? 1 : -1));
}

export async function getFileData(dir = "./", id) {
	const file = path.join(absPath(dir), `${id}.${fileExt}`);
	const data = await fsp.readFile(file, "utf8");

	const matter = fm(data);

	matter.attributes.date = new Intl.DateTimeFormat("fr-CA", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(matter.attributes.date);

	console.log(matter);

	// https://github.com/remarkjs/react-markdown#syntax
	// return <ReactMarkdown children={matter.body} remarkPlugins={[remarkGfm]} />;

	return { id, ...matter.attributes };
}
