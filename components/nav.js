import { Link, HStack } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkItem = ({ href, children }) => {
	return (
		<NextLink href={href} passHref scroll={false}>
			<Link>{children}</Link>
		</NextLink>
	);
};

const Nav = () => (
	<HStack fontWeight="700" fontSize="xl" spacing="20px">
		<LinkItem href="/">Home</LinkItem>
		<LinkItem href="/posts">Posts</LinkItem>
		<LinkItem href="/about">About</LinkItem>
	</HStack>
);

export default Nav;
