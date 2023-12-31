import { Box } from "@chakra-ui/react";
import Description from "../Components/Description";

export default function Detail() {
  return (
    <>
      <Box bg="#111" minH="100vh" p="2rem 3rem">
        <Box
          bg="#1f1f1f"
          minH="auto"
          borderRadius="2rem"
          p="3rem 7rem "
          color="whiteAlpha.700"
          mt="5rem"
        >
          <Description />
        </Box>
      </Box>
    </>
  );
}
