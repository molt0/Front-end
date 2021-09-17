import React from "react";
import LoginForm from "../../components/LoginPage/LoginForm";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="500px" height="700px" maxW="1500px" mx="auto" mt="30px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="150px" ml="200px" mt="50px">로그인</Heading>
          <LoginForm />
        </Box>  
      </Flex>
    </Container>
  );
};

export default LoginPage;
