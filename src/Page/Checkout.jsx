import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Payment from "../Components/Payment";

export default function Checkout() {
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
            <Heading fontSize="4xl">Checkout</Heading>
            <Heading fontSize="l" mt="2rem">
              Personal Detail
            </Heading>
            <Flex gap="2rem">
              <List mt="2rem">
                <Flex gap="1rem">
                  <ListItem minW="7rem">Name: </ListItem>
                  <Input
                    bg="#1f1f1f"
                    border="none"
                    size="sm"
                    type="text"
                    placeholder="Name"
                    borderRadius="2rem"
                    isRequired
                  />
                </Flex>
                <Flex gap="1rem" mt="2rem">
                  <ListItem minW="7rem">Phone Number: </ListItem>
                  <Input
                    bg="#1f1f1f"
                    border="none"
                    size="sm"
                    type="number"
                    placeholder="+977"
                    borderRadius="2rem"
                    isRequired
                  />
                </Flex>
              </List>

              <Box bg="#1f1f1f" p="2rem 2rem" borderRadius="2rem" minW="22rem">
                <Heading fontSize="l">Total Summary</Heading>
                <List mt="1rem">
                  <Flex>
                    <ListItem>Number of Items(3): </ListItem>
                    <Spacer />
                    <ListItem>Rs. 1200</ListItem>
                  </Flex>
                  <Flex>
                    <ListItem>Discount: </ListItem>
                    <Spacer />
                    <ListItem>Rs. 0</ListItem>
                  </Flex>
                  <Flex>
                    <ListItem>Tax: </ListItem>
                    <Spacer />
                    <ListItem>Rs. 0</ListItem>
                  </Flex>
                  <Flex>
                    <ListItem>Service Charge: </ListItem>
                    <Spacer />
                    <ListItem>Rs. 200</ListItem>
                  </Flex>
                  <Divider />
                  <Flex mt="1rem">
                    <ListItem>Total: </ListItem>
                    <Spacer />
                    <ListItem>Rs. 1400</ListItem>
                  </Flex>
                </List>
              </Box>
            </Flex>
            <Divider mt="2rem" />
            <Flex flexDir="column">
              <Text mt="2rem" fontSize="xl">
                Choose your payment type
              </Text>
            </Flex>
            <Payment />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
