import Logo from "./Logo";
import Nav from "./nav";
import ThemeToggleButton from "./ThemeToggleButton";

import {
	Box,
	Container,
	Divider,
	Grid,
	GridItem,
	Flex,
	Spacer,
} from "@chakra-ui/react";

const Header = () => (
	<Flex
		alignItems="center"
		justifyItems="center"
		justifyContent="cener"
		alignContent="center"
		gap={6}
	>
		<Logo />
		<Spacer />
		<Nav />
		<ThemeToggleButton />
	</Flex>
);

export default Header;
