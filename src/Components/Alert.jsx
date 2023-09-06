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

export default function Alert({ isOpen, onClose }) {
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
          <AlertDialogHeader as="h1">Submitted</AlertDialogHeader>
          <Divider />
          <AlertDialogBody>
            <Text>Thank you! Your message has been submitted</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <HStack spacing="10px">
              <Button colorScheme="orange" onClick={onClose}>
                Ok
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
