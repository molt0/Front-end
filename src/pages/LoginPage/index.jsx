import React from "react";
import IdInput from "../../components/LoginPage/IdInput";
import PsInput from "../../components/LoginPage/PsInput";
import FindIdPs from "../../components/LoginPage/FindIdPs";
import SignUp from "../../components/LoginPage/SignUp";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="500px" height="500px" maxW="1500px" mx="auto" mt="30px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="150px" ml="200px" mt="50px">로그인</Heading>
          <IdInput />
          <PsInput />
          <FindIdPs />
          <Button variant="outline" width="200px" height="50px" left="150px" top="30px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            로그인
          </Button>
          <SignUp />
        </Box>  
      </Flex>
    </Container>
  );
};

export default LoginPage;
