import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function MenuCard() {
  const menu = useLoaderData();

  return (
    menu &&
    menu.map((menus) => {
      return (
        <Card
          key={menus.id}
          bg="#1f1f1f"
          _hover={{ bg: "#3f1f1f", transition: "0.4s" }}
        >
          <CardBody>
            <Image src={menus?.image} alt={menus.name} />
            <Text fontSize="xl" color="white" mt="1rem">
              {menus.name}
            </Text>
            <Text color="white" mt="0.5rem">
              {menus.Price}
            </Text>
          </CardBody>
          <Divider color="white" />
          <CardFooter>
            <HStack spacing="10px">
              <Button colorScheme="whiteAlpha" borderRadius="2rem">
                View
              </Button>
              <Button colorScheme="orange" borderRadius="2rem">
                Add to Cart
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      );
    })
  );
}

export const menuLoader = async () => {
  const res = await fetch("http://localhost:3000/Menu");
  return res.json();
};
