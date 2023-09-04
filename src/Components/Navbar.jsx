import { Box, Flex } from "@chakra-ui/react";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <>
      <Box bg="#1f1f1f" minH="5rem">
        <Flex align="center" justify="flex-start" ml="5rem">
          <NavbarItem />
        </Flex>
      </Box>
    </>
  );
}
