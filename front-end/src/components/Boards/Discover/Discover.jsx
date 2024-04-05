import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/board/discover/post1");
  };

  return (
    <Box className="discover">
      <Grid
        className="discover-container"
        templateColumns="repeat(2, 1fr)"
        gap="4rem"
        lineHeight="2.5"
        padding="5rem 7rem"
      >
        <GridItem
          className="celo-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="80vh"
          width="35vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.2rem" marginBottom="1rem" ml="10rem">
            CELO
          </Heading>
          <Text className="txt" marginBottom="2rem">
            An open cryptographic protocol that allows applications to make
            transactions with and run smart contracts in a secure and
            decentralized fashion. The Celo blockchain code has shared ancestry
            with Ethereum and maintains full EVM compatibility for smart
            contracts.
          </Text>
          <Button
            className="more"
            onClick={handleClick}
            marginLeft="8rem"
            fontSize="1rem"
            padding="1.5rem 1.5rem"
            bgColor="#7d8597"
          >
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="80vh"
          width="35vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.2rem" marginBottom="1rem" ml="10rem">
            LISK
          </Heading>
          <Text className="txt" marginBottom="2rem">
            The Lisk SDK toolkit consists of a user-friendly, open-source
            software development kit, that provides both aspiring and
            experienced developers the possibility to build scalable blockchain
            applications, and furthermore offers the flexibility to run them on
            their own customized blockchain.
          </Text>
          <Button
            className="more"
            onClick={handleClick}
            marginLeft="8rem"
            fontSize="1rem"
            padding="1.5rem 1.5rem"
            bgColor="#7d8597"
          >
            Learn more
          </Button>
        </GridItem>

       
      </Grid>

     
    </Box>
  );
};

export default Discover;
