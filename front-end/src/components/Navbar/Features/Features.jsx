import React from "react";
import { Container, Flex, Box, Text, Grid } from "@chakra-ui/react";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Overall, quick learning is a valuable skill that empowers individuals to adapt to change, stay competitive in dynamic environments, and achieve their personal and professional goals more efficiently.",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    desc: "All time support is a great tool for developing applications that integrate with the frameworks",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    desc: "An assessment or evaluation of a certificate is a great tool for developing application that integrate with the frame workflow ",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <Box as="section" py={10}>
      <Container maxW="container.lg">
        <Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
          {FeatureData.map((item, index) => (
            <Box key={index} textAlign="center">
              <Box fontSize="2.5rem" mb={3}>
                <i className={item.icon}></i>
              </Box>
              <Text fontWeight="semibold" mb={1}>{item.title}</Text>
              <Text>{item.desc}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;