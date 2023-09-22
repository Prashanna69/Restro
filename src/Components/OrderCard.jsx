import { Box, Flex, Text } from "@chakra-ui/react";

export default function OrderCard() {
  return (
    <>
      <Box
        bg="#4b4b4b"
        minH="3rem"
        borderRadius="1rem"
        mt="1rem"
        display="flex"
        alignItems="center"
        p="1rem 1rem"
      >
        <Flex gap="4rem">
          <Text maxW="8rem">Dummy name</Text>
          <Text>Rs. 1000</Text>
        </Flex>
      </Box>
    </>
  );
}
