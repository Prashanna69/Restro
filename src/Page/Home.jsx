import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MenuCard from "../Components/MenuCard";

export default function Home() {
  return (
    <Box bg="#111" minH="auto" p=" 2rem 3rem">
      <Box bg="#4b4b4b" minH="auto" borderRadius="1rem">
        <Text
          display="flex"
          justifyContent="center"
          fontSize="4rem"
          color="GrayText"
        >
          Our Special Menu
        </Text>
        <SimpleGrid
          column={3}
          minChildWidth={100}
          spacing={{ base: "10px", lg: "20px" }}
          p="2rem"
        >
          <MenuCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
