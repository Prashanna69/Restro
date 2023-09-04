import {
  Avatar,
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Main from "../Page/main";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box bg="#1f1f1f" minH="5rem">
        <Flex align="center" justify="flex-start" ml="2rem">
          <Tabs
            isManual
            colorScheme="whiteAlpha"
            color="White"
            mt="1rem"
            variant="solid-rounded"
          >
            <TabList>
              <HStack spacing="30px">
                <NavLink to="/" element={<Main />}>
                  <Tab>Menu</Tab>
                </NavLink>
                <Tab>Offer</Tab>
                <Tab>Recipe</Tab>
                <Tab>Contact</Tab>
              </HStack>
            </TabList>
          </Tabs>
          <Spacer />
          <HStack spacing="1rem" mr="2rem">
            <InputGroup maxW="20rem" mt="1rem">
              <InputLeftElement pointerEvents="none">
                <CiSearch color="gray" />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Search..."
                color="white"
                border="none"
                borderRadius="2rem"
              />
            </InputGroup>
            <CiShoppingCart
              color="white"
              style={{ width: "45px", height: "45px", marginTop: "1rem" }}
            />
            <Avatar mt="1rem" size="sm" />
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
