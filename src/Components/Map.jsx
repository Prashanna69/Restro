import { AspectRatio } from "@chakra-ui/react";

export default function Map() {
  return (
    <>
      <AspectRatio ratio={16 / 18} mt="2rem">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.343134632529!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185d828cd417%3A0xc5a401d9ac124ace!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1631067356549!5m2!1sen!2snp
"
        />
      </AspectRatio>
    </>
  );
}
