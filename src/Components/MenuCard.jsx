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
import { Link, NavLink, useLoaderData } from "react-router-dom";
import Detail from "../Page/Detail";

export default function MenuCard() {
  const menu = useLoaderData();

  return (
    menu &&
    menu.map((menus) => {
      return (
        <Card
          key={menus.id}
          bg="#1f1f1f"
          _hover={{ bg: "#3f1f1f", transition: "0.7s" }}
          maxW="17rem"
        >
          <Image
            src={menus?.image}
            alt={menus.name}
            maxH="10rem"
            minW="10rem"
            objectFit="cover"
            borderRadius="1rem"
          />
          <CardBody maxH="20rem">
            <Text fontSize="l" color="white">
              {menus.name}
            </Text>
            <Text fontSize="sm" color="white" mt="0.5rem">
              {menus.Price}
            </Text>
          </CardBody>
          <Divider color="white" />
          <CardFooter>
            <HStack spacing="10px">
              <Link to={`/Detail/${menus.id}`} component={Detail}>
                <Button size="sm" colorScheme="whiteAlpha" borderRadius="2rem">
                  View
                </Button>
              </Link>
              <Button size="sm" colorScheme="orange" borderRadius="2rem">
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
