import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { useFormik } from "formik";
import Alert from "./Alert";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      sub: "",
      msg: "",
    },
    // onSubmit: async (values, { resetForm }) => {
    //   await new Promise((r) => setTimeout(r, 500));

    //   resetForm();
    // },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <Flex justify="center" flexDir="column" alignContent="center">
        <Heading size="2xl" color="white" mt="5rem">
          Contact Us
        </Heading>

        <form
          onSubmit={formik.handleSubmit}
          style={{ minWidth: "20rem", marginTop: "3rem" }}
        >
          <Flex flexDir="column" gap="2rem" color="white">
            <Input
              id="name"
              placeholder="Name"
              border="none"
              bg="#1f1f1f"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              border="none"
              bg="#1f1f1f"
              required
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              type="text"
              id="sub"
              placeholder="Subject"
              border="none"
              bg="#1f1f1f"
              required
              onChange={formik.handleChange}
              value={formik.values.sub}
            />
            <Textarea
              resize="none"
              required
              id="msg"
              placeholder="Message"
              border="none"
              bg="#1f1f1f"
              onChange={formik.handleChange}
              value={formik.values.msg}
            />
            <Button type="submit" colorScheme="orange">
              Submit
            </Button>
            {/* <Alert /> */}
          </Flex>
        </form>
      </Flex>
    </>
  );
}
