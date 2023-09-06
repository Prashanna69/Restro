import {
  Avatar,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";

import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Main from "../Page/main";
import { NavLink } from "react-router-dom";
import Order from "./Order";
import Recipe from "../Page/Recipe";
import Offer from "../Page/Offer";
import Contact from "../Page/Contact";

export default function NavbarItem() {
  return (
    <>
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
            <NavLink to="/Offer" element={<Offer />}>
              <Tab>Offer</Tab>
            </NavLink>
            <NavLink to="/Recipe" element={<Recipe />}>
              <Tab>Recipe</Tab>
            </NavLink>
            <NavLink to="/Contact" element={<Contact />}>
              <Tab>Contact us</Tab>
            </NavLink>
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
            bg="#111"
          />
        </InputGroup>
        <Order />
        <Avatar mt="1rem" size="sm" />
      </HStack>
    </>
  );
}
