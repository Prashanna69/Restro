import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box bg="#1f1f1f" minH="15rem">
        <SimpleGrid
          templateColumns="repeat(4,1fr)"
          spacing="2rem"
          p="2rem 4rem"
        ></SimpleGrid>
      </Box>
    </>
  );
}
