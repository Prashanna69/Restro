import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import {
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiYoutube,
  CiWheat,
} from "react-icons/ci";

import { NavLink } from "react-router-dom";

import Contact from "../Page/Contact";

export default function Footer() {
  return (
    <>
      <Box bg="#1f1f1f" minH="15rem">
        <SimpleGrid
          templateColumns="repeat(3,1fr)"
          spacing="2rem"
          p="3rem 3rem"
          color="white"
        >
          <Box>
            <Flex flexDir="column" ml="5rem">
              <Heading size="lg">Follow us on:</Heading>
              <Flex mt="1em">
                <HStack>
                  <CiFacebook style={{ height: "2rem", width: "2rem" }} />
                  <CiInstagram style={{ height: "2rem", width: "2rem" }} />
                  <CiTwitter style={{ height: "2rem", width: "2rem" }} />
                  <CiYoutube style={{ height: "2rem", width: "2rem" }} />
                </HStack>
              </Flex>
              <Heading fontSize="25px" mt="2rem">
                Address
              </Heading>
              <Text mt="10px">Gongabu, Kathmandu</Text>
            </Flex>
          </Box>
          <Box>
            <Flex justify="center" flexDir="column" align="center">
              <Heading size="lg">Opening Hour</Heading>
              <SimpleGrid
                templateColumns="repeat(2,1fr)"
                spacing="1rem"
                p="1rem 2rem"
                color="white"
              >
                <Box>
                  <Flex flexDir="column" gap="2px">
                    <Text>Sunday</Text>
                    <Text>Monday</Text>
                    <Text>Tuesday</Text>
                    <Text>Wedneday</Text>
                    <Text>Thursday</Text>
                    <Text>Friday</Text>
                    <Text>Saturday</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex flexDir="column" gap="2px">
                    <Text>11:00 - 18:00</Text>
                    <Text>11:00 - 18:00</Text>
                    <Text>11:00 - 18:00</Text>
                    <Text>11:00 - 18:00</Text>
                    <Text>11:00 - 18:00</Text>
                    <Text>11:00 - 18:00</Text>
                    <Text>Closed</Text>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Flex>
          </Box>
          <Box>
            <Flex justify="center" align="center" flexDir="column">
              <CiWheat style={{ height: "5rem", width: "5rem" }} />
              <Heading size="lg">Savory Haven Bistro</Heading>
              <Text mt="2px" fontFamily="Lobster">
                Feast Online: Where Flavor Meets Your Screen!
              </Text>
              <NavLink to="/Contact" element={<Contact />}>
                <Button mt="2rem" colorScheme="orange">
                  Contact us
                </Button>
              </NavLink>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
