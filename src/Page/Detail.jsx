import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Description from "../Components/Description";

export default function Detail() {
  return (
    <>
      <Box bg="#111" minH="100vh" p="2rem 3rem">
        <Box
          bg="#1f1f1f"
          minH="100vh"
          borderRadius="2rem"
          p="3rem 7rem "
          color="whiteAlpha.700"
          position="relative"
        >
          <Heading as="h1" ml="1rem">
            Dummy Name
          </Heading>
          <Flex columnGap="4rem">
            <Image
              objectFit="cover"
              src="https://img.freepik.com/premium-photo/food-photography_841014-8181.jpg"
              maxH={{ base: "20rem", lg: "30rem", sm: "20rem" }}
              borderRadius="2rem"
              mt="3rem"
            />
            <Description />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
