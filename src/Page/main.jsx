import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Menu from "./Menu";

export default function Main() {
  return (
    <>
      <Box
        bgImage="url('https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?size=626&ext=jpg&ga=GA1.2.627066378.1692263223&semt=ais')"
        minHeight="18em"
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        alignItems="center"
        fontFamily="Courier New"
        p="2rem"
      >
        <Text fontSize="4rem" color="wheat" fontWeight="500">
          Your Restaurant
        </Text>
        <Button colorScheme="red" maxW="10rem">
          Order now
        </Button>
      </Box>
      <Menu />
    </>
  );
}
