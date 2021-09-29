import React from "react";
import SignupForm from "../../components/SignUpPage/SignupForm";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="600px" height="800px" maxW="1500px" mx="auto" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="150px" margin="0 auto" marginY="40px">회원가입</Heading>
          <SignupForm />
        </Box>  
      </Flex>
    </Container>
  );
};

export default SignUpPage;
