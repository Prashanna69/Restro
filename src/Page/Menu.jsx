import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MenuCard from "../Components/MenuCard";
import { useLoaderData } from "react-router-dom";

export default function Menu() {
  return (
    <Box bg="#111" minH="100vh" p=" 2rem 3rem">
      <Box bg="#4b4b4b" minH="100vh" borderRadius="2rem">
        <Text
          display="flex"
          justifyContent="center"
          fontSize="4rem"
          color="GrayText"
        >
          Menu
        </Text>
        <SimpleGrid templateColumns="repeat(4,1fr)" gap="1rem" p="2rem">
          <MenuCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
