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
        ml="2rem"
      >
        <TabList>
          <HStack spacing="30px">
            <NavLink to="/" element={<Main />}>
              <Tab>Home</Tab>
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
        <Avatar
          mt="1rem"
          size="sm"
          src="https://img.freepik.com/premium-photo/minimalist-man-vector-art-illustration_950558-10765.jpg?size=626&ext=jpg&ga=GA1.2.627066378.1692263223&semt=ais"
        />
      </HStack>
    </>
  );
}
