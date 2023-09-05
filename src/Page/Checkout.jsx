import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Checkout() {
  const [value, setValue] = useState("");

  const handleButtonClick = (e) => {
    setValue(e);
  };
  console.log(value);
  const openLink = () => {
    if (value === "1") {
      window.open("https://web.khalti.com/#/", "_blank");
    } else {
      window.open("https://merchant.esewa.com.np/auth/login", "_blank");
    }
  };

  return (
    <>
      <Box
        bg="#111"
        minH="100vh"
        p="2rem 3rem"
        display="flex"
        justifyContent="center"
      >
        <Flex align="center">
          <Box
            bg="#4b4b4b"
            minH="auto"
            p="2rem 3rem"
            color="whitesmoke"
            borderRadius="2rem"
          >
            <Heading as="h1">Checkout</Heading>
            <Flex justify="center" flexDir="column" align="center">
              <Text mt="2rem" fontSize="xl">
                Choose your payment type
              </Text>
            </Flex>
            <Flex mt="2rem" gap="1rem" justifyContent="center">
              <Button
                onClick={() => handleButtonClick("1")}
                bgImage="data:image/png;base64,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"
                bgPos="center"
                bgSize="cover"
                minH="5rem"
                minW="5rem"
                borderRadius="1rem"
                _focus={{ border: "1px solid orange" }}
                cursor="pointer"
                variant="unstyled"
              ></Button>

              <Button
                onClick={() => handleButtonClick("2")}
                bgImage="data:image/png;base64,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"
                minH="5rem"
                minW="5rem"
                borderRadius="1rem"
                _focus={{ border: "1px solid orange" }}
                cursor="pointer"
                bgPos="center"
                bgSize="cover"
                variant="unstyled"
              ></Button>
            </Flex>
            <Flex justify="center" gap="2rem">
              <Button colorScheme="orange" mt="2rem" onClick={openLink}>
                Confirm
              </Button>
              <NavLink to="/">
                <Button colorScheme="whiteAlpha" mt="2rem">
                  Cancel
                </Button>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
