import {
  Heading,
  Image,
  Flex,
  Box,
  List,
  ListItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Description() {
  const [value, setValue] = useState(1);

  function handleAddition() {
    setValue(value + 1);
  }
  function handleSub() {
    if (value < 1 || value == 1) {
      return setValue(1);
    } else {
      return setValue(value - 1);
    }
  }

  return (
    <>
      <Box>
        <Heading as="h1" ml="1rem">
          Dummy Name
        </Heading>
        <Image
          objectFit="cover"
          src="https://img.freepik.com/premium-photo/food-photography_841014-8181.jpg"
          maxH={{ base: "20rem", lg: "30rem", sm: "20rem" }}
          borderRadius="2rem"
          mt="2rem"
        />
      </Box>
      <Box minH="30rem" p="2rem 3rem" display="flex" alignItems="center">
        <List fontSize="2rem">
          <Flex flexDir="column" gap="2rem" mt="2rem">
            <ListItem>Name:</ListItem>
            <ListItem>Price:</ListItem>
            <ListItem>Description:</ListItem>
            <ListItem>Quantity:</ListItem>
          </Flex>
        </List>
      </Box>
      <Box
        minH="30rem"
        p="2rem 3rem"
        display="flex"
        alignItems="center"
        position="relative"
      >
        <List fontSize="2rem" w="15rem">
          <Flex flexDir="column" gap="2rem" mt="2rem">
            <ListItem>Dummy Name</ListItem>
            <ListItem>Dummy Price</ListItem>
            <ListItem>Dummy Name</ListItem>
            <ListItem>
              <Flex align="center" gap="2px">
                <Button
                  fontSize="2rem"
                  colorScheme="whiteAlpha"
                  onClick={handleSub}
                >
                  -
                </Button>
                <Input
                  type="number"
                  maxW="4rem"
                  value={value}
                  disabled
                  textAlign="center"
                />
                <Button
                  fontSize="2rem"
                  colorScheme="whiteAlpha"
                  onClick={handleAddition}
                >
                  +
                </Button>
              </Flex>
            </ListItem>
          </Flex>
          <Button colorScheme="orange" position="absolute" mt="2rem" ml="7rem">
            Confirm
          </Button>
        </List>
      </Box>
    </>
  );
}
