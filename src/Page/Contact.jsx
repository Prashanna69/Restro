import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import ContactForm from "../Components/ContactForm";
import Map from "../Components/Map";

export default function Contact() {
  return (
    <>
      <Box minH="100vh" bg="#111" p="2rem 3rem">
        <Box minH="100vh" bg="#4b4b4b" borderRadius="2rem" p="2rem 3rem">
          <SimpleGrid templateColumns="repeat(2,1fr)" spacing={5}>
            <Box maxH="100vh" bg="#111" p="2rem 3rem" borderRadius="2rem">
              <Text as="b" color="white" fontSize="3xl">
                Our Location
              </Text>
              <Map />
            </Box>
            <Box maxH="100vh" bg="#111" p="2rem 3rem" borderRadius="2rem">
              <ContactForm />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
