import Link from "next/link";
const Pagelink = (props) => {
	const link = `/${props.postsdir}/${props.id}`;

	return (
		<article>
			<h3>
				<Link href={link}>{props.title}</Link>
			</h3>
			<p className="time">
				发布时间：
				<time>{props.date}</time>
			</p>
			<p>{props.description}</p>
		</article>
	);
};

export default Pagelink;
