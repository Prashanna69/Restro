import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

import React from "react";

export default function Alert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent bg="#1f1f1f" color="white">
          <AlertDialogCloseButton />
          <AlertDialogHeader as="h1">Confirm?</AlertDialogHeader>
          <Divider />
          <AlertDialogBody>
            <Text>Are you sure?</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <HStack spacing="10px">
              <Button colorScheme="whiteAlpha" onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="orange">Confirm</Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
