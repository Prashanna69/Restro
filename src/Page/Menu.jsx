import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MenuCard from "../Components/MenuCard";

export default function Menu() {
  return (
    <Box bg="red.500" minH="100vh" p=" 2rem 3rem">
      <Box bg="whiteAlpha.500" minH="100vh" borderRadius="2rem">
        <Text display="flex" justifyContent="center" fontSize="4rem">
          Menu
        </Text>
        <SimpleGrid templateColumns="repeat(4,1fr)" gap="1rem" p="2rem">
          <MenuCard />
          <Box height="20rem" w="15rem" bg="black"></Box>
          <Box height="20rem" w="15rem" bg="black"></Box>
          <Box height="20rem" w="15rem" bg="black"></Box>
          <Box height="20rem" w="15rem" bg="black"></Box>
          <Box height="20rem" w="15rem" bg="black"></Box>
          <Box height="20rem" w="15rem" bg="black"></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
