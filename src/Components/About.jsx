import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

import Chef from "../media/chef.mp4";

export default function About() {
  return (
    <>
      <Box
        bg="#111"
        minH="10rem"
        color="whiteAlpha.500"
        p="2rem 3rem"
        display="flex"
        justifyContent="center"
      >
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
            }}
          />

          <Flex>
            <Box
              bg="#4b4b4b"
              p="2rem 3rem"
              borderRadius="2rem"
              maxW="50rem"
              ml="23rem"
            >
              <Flex justify="center">
                <Heading size="xl">About Us</Heading>
              </Flex>
              <Text
                color="white"
                mt="1rem"
                textAlign="left"
                ml="8rem"
                fontSize="md"
              >
                Welcome to Savory Haven Bistro, where culinary artistry meets
                warm hospitality. Since [Year], we've delighted guests for
                [Number of Years] years with creative dishes crafted from
                locally sourced ingredients. Our chefs blend tradition and
                innovation to cater to diverse palates. Our inviting ambiance, a
                mix of modern elegance and timeless charm, sets the stage for
                memorable experiences, be it a romantic dinner, family
                gathering, or business meeting. Beyond the kitchen, our
                dedicated team ensures every visit is special. We're committed
                to sustainability and community support, minimizing our
                environmental impact and giving back. Thank you for choosing
                Savory Haven Bistro. Whether you're a regular or first-time
                visitor, we're dedicated to ensuring an exceptional experience.
                We look forward to welcoming you!
              </Text>

              <Button colorScheme="orange" ml="8rem" mt="2rem">
                Read more
              </Button>
            </Box>
          </Flex>
        </HStack>
      </Box>
    </>
  );
}
