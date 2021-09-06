import React from "react";
import IdInput from "../../components/SignUpPage/IdInput";
import PsChInput from "../../components/SignUpPage/PsChInput";
import PsChInput2 from "../../components/SignUpPage/PsChInput2";
import NameInput from "../../components/SignUpPage/NameInput";
import EmailInput from "../../components/SignUpPage/EmailInput";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="600px" height="500px" maxW="1500px" mx="auto" mt="30px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="150px" ml="180px" mt="50px">회원가입</Heading>
          <IdInput />
          <PsChInput />
          <PsChInput2 />
          <NameInput />
          <EmailInput />
          <Button variant="outline" width="250px" height="70px" left="120px" top="60px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            회원가입
          </Button>
        </Box>  
      </Flex>
    </Container>
  );
};

export default SignUpPage;
