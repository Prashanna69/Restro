import { Box, Flex } from "@chakra-ui/react";

import NavbarItem from "./NavbarItem";

import { CiWheat } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <Box
        bg="#1f1f1f"
        minH="5rem"
        position="fixed"
        minW="100%"
        zIndex="99"
        boxShadow="0px 0px 20px 10px black"
      >
        <Flex align="center" justify="flex-start">
          <CiWheat
            color="white"
            style={{ height: "4rem", width: "4rem", marginTop: "0.5rem" }}
          />
          <NavbarItem />
        </Flex>
      </Box>
    </>
  );
}
