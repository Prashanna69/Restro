import {
  Heading,
  Image,
  Flex,
  Box,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
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

  const menu = useLoaderData();

  return (
    menu &&
    menu.map((menus) => {
      return (
        <>
          <Flex key={menu.id}>
            <Box>
              <Heading as="h1" ml="1rem" minW="20rem">
                {menus?.name}
              </Heading>
              <Image
                objectFit="cover"
                position="center"
                src={menus?.image}
                maxH={{ base: "20rem", lg: "30rem", sm: "20rem" }}
                borderRadius="2rem"
                mt="2rem"
              />
            </Box>
            <Box
              minH="30rem"
              mt="5rem"
              p="2rem 1rem"
              display="flex"
              alignItems="center"
            >
              <Flex flexDir="column" gap="2rem" mt="2rem" fontSize="1.3rem">
                <Flex gap="3.4rem" align="center">
                  <Text>Name:</Text>
                  {menus.name}
                </Flex>
                <Flex gap="4rem" align="center">
                  <Text>Price:</Text>
                  {menus.Price}
                </Flex>
                <Flex gap="1rem" textAlign="left">
                  Description:<Text as="span">{menus.Desc}</Text>
                </Flex>

                <Flex gap="2rem" align="center">
                  Quantity:{" "}
                  <Flex align="center" gap="3px">
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
                      bg="#111"
                      fontFamily="bold"
                      color="orange.200"
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
                </Flex>
                <Flex justify="flex-end">
                  <Button colorScheme="orange" mt="1rem">
                    Confirm
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </>
      );
    })
  );
}

export const menuLoader = async () => {
  const res = await fetch("http://localhost:3000/Menu");
  return res.json();
};
