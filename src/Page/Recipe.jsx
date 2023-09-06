import { Box, Flex, Text } from "@chakra-ui/react";

import { FaTools } from "react-icons/fa";
export default function Recipe() {
  return (
    <>
      <Box minH="100vh" bg="#111" p="2rem 3rem">
        <Box
          bg="#4b4b4b"
          minH="100vh"
          borderRadius="1rem"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <FaTools color="white" style={{ width: "100px", height: "100px" }} />
          <Text fontSize="2xl" mt="2rem">
            This feature will be added soon.
          </Text>
        </Box>
      </Box>
    </>
  );
}
