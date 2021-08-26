import React from "react";
import IdInput from "../../components/LoginPage/IdInput";
import PsInput from "../../components/LoginPage/PsInput";
import { Container, Flex, Box, Heading } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="500px" height="600px" maxW="1500px" mx="auto" mt="10px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="100px" ml="200px" mt="50px">Login</Heading>
          <IdInput />
          <PsInput />
        </Box>  
      </Flex>
    </Container>
  );
};

export default LoginPage;
