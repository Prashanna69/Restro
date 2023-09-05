import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MenuCard from "../Components/MenuCard";

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
        <SimpleGrid column={3} minChildWidth={300} spacing={10} p="2rem">
          <MenuCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
