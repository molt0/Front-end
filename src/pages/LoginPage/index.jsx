import React from "react";
import LoginForm from "../../components/LoginPage/LoginForm";
import { Container, Flex, Box, Link, Text } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="80px">
        <Box width="500px" height="750px" maxW="1500px" mx="auto" mt="30px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <LoginForm />
          <Text fontSize="sm" ml="110px" mt="100px">이곳이 처음이라면 <Link color="blue">여기</Link>를 눌러주세요.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginPage;
