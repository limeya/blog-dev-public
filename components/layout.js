import {
  Container,
  Flex,
  Button,
  VStack,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => (
  <Grid
    // gridTemplate="auto 1fr auto / 1fr"
    templateRows="1fr 1fr 20fr auto"
    margin="0em 15em"
    padding="1.5em 0"
    gap={6}
  >
    <GridItem rowStart={1}>
      <Header />
    </GridItem>
    <GridItem rowStart={2}>
      <Divider />
    </GridItem>
    <GridItem rowStart={3}>
      <main>{children}</main>
    </GridItem>
    <GridItem rowStart={4}>
      <Footer />
    </GridItem>
  </Grid>
);

export default Layout;
