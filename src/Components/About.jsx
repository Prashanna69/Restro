import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

import Chef from "../media/chef.mp4";

export default function About() {
  return (
    <>
      <Box
        bgImage="url('https://img.freepik.com/free-photo/iftar-party-middle-eastern-traditional-lunch-ai-generated-image_511042-1647.jpg')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        minH="10rem"
        color="whiteAlpha.500"
        display="flex"
        p="4rem 3rem"
        justifyContent="center"
        position="relative"
      >
        <Box
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="100%"
          background="black"
          opacity="0.9"
          zIndex="1"
        ></Box>
        <HStack spacing={10}>
          <video
            src={Chef}
            autoPlay
            muted
            loop
            style={{
              width: "30rem",
              borderRadius: "1rem",
              position: "absolute",
              zIndex: "3",
            }}
          />

          <Flex zIndex="2">
            <Box
              bg="#4b4b4b"
              p="2rem 3rem"
              borderRadius="2rem"
              maxW="50rem"
              ml="23rem"
            >
              <Box ml="8rem">
                <Flex>
                  <Heading size="xl">About Us</Heading>
                </Flex>
                <Text color="white" mt="1rem" textAlign="left" fontSize="md">
                  Welcome to Savory Haven Bistro, where culinary artistry meets
                  warm hospitality. Since 2020, we've delighted guests for 3
                  years with creative dishes crafted from locally sourced
                  ingredients. Our chefs blend tradition and innovation to cater
                  to diverse palates. Our inviting ambiance, a mix of modern
                  elegance and timeless charm, sets the stage for memorable
                  experiences, be it a romantic dinner, family gathering, or
                  business meeting. Beyond the kitchen, our dedicated team
                  ensures every visit is special. We're committed to
                  sustainability and community support, minimizing our
                  environmental impact and giving back. Thank you for choosing
                  Savory Haven Bistro. Whether you're a regular or first-time
                  visitor, we're dedicated to ensuring an exceptional
                  experience. We look forward to welcoming you!
                </Text>

                <Button colorScheme="orange" mt="2rem">
                  Read more
                </Button>
              </Box>
            </Box>
          </Flex>
        </HStack>
      </Box>
    </>
  );
}
