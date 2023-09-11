import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Offer() {
  return (
    <Box
      minH="20rem"
      bg="#1f1f1f"
      p="2rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading size="2xl" color="whiteAlpha.400">
        Best Selling
      </Heading>
      <SimpleGrid columns={2} spacing={5} mt={5}>
        <Box minH="7rem" maxW="5rem" bg="red" />
        <Box minH="7rem" bg="red" />
        <Box minH="7rem" bg="red" />
        <Box minH="7rem" bg="red" />
      </SimpleGrid>
    </Box>
  );
}
