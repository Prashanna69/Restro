import { Box, Button, Flex, List, ListItem, Spacer } from "@chakra-ui/react";
export default function Description() {
  const listKey = [
    "Name:",
    "Availability:",
    "Description:",
    "Discount:",
    "Quantity:",
  ];
  return (
    <>
      <Flex align="center" f>
        <List fontSize="2xl">
          {listKey.map((item, index) => (
            <ListItem key={index} mt={`${index * 1}rem`}>
              {item}
            </ListItem>
          ))}
        </List>
        <Button colorScheme="orange" mt="2rem">
          Confirm
        </Button>
      </Flex>
    </>
  );
}
