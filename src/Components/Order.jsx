import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { CiShoppingCart } from "react-icons/ci";

import Alert from "./Alert";
import { NavLink } from "react-router-dom";

export default function Order() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <CiShoppingCart
        cursor="pointer"
        ref={btnRef}
        onClick={onOpen}
        color="white"
        style={{ width: "45px", height: "45px", marginTop: "1rem" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#1f1f1f" color="white">
          <DrawerCloseButton />
          <DrawerHeader as="h2">Your order</DrawerHeader>
          <DrawerBody>
            <Text>Your Cart:</Text>
          </DrawerBody>
          <Divider />
          <DrawerFooter>
            <Flex flexDir="column" gap="0.5rem">
              <Text fontSize="2xl">Total: Rs. 5000</Text>
              <HStack>
                <Button colorScheme="whiteAlpha" onClick={onClose}>
                  Cancel
                </Button>
                <NavLink to="/Checkout">
                  <Button colorScheme="orange" onClick={onClose}>
                    Checkout
                  </Button>
                </NavLink>
              </HStack>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
