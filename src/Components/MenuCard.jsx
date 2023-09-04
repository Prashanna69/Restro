import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";

export default function MenuCard() {
  return (
    <Card bg="#1f1f1f" _hover={{ bg: "#3f1f1f", transition: "0.4s" }}>
      <CardBody>
        <Image
          src="https://img.freepik.com/premium-photo/food-photography_841014-8174.jpg?size=626&ext=jpg&ga=GA1.1.627066378.1692263223&semt=ais"
          alt="Biryani"
        />
        <Text fontSize="xl" color="white" mt="1rem">
          Khana Platter
        </Text>
        <Text color="white" mt="0.5rem">
          Rs. 800
        </Text>
      </CardBody>
      <Divider color="white" />
      <CardFooter>
        <Button colorScheme="red" borderRadius="2rem">
          Order
        </Button>
      </CardFooter>
    </Card>
  );
}
