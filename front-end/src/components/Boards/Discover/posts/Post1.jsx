import { Container } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Post1 = () => {
  return (
    <Container
      w="20vw"
      bg="blue.600"
      color="white"
      h="10vh"
      borderRadius="1rem"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="5rem"
    >
      <Link to="https://docs.celo.org/general" target="_blank">
        Celo
      </Link>
    </Container>
  );
};

export default Post1;

{
  /* <Container maxW="md" bg="blue.600" color="white" h="100vh" textAlign="center" display="flex" flexDirection="column" justifyContent="center">
<Link href="https://docs.celo.org/general" target="_blank" textDecoration="underline" fontWeight="bold">
  Celo
</Link>
</Container> */
}
