import React from "react";
import IdInput from "../../components/UserPage/IdInput";
import PsInput from "../../components/UserPage/PsInput";
import PsChInput from "../../components/UserPage/PsChInput";
import PsChInput2 from "../../components/UserPage/PsChInput2";
import NameInput from "../../components/UserPage/NameInput";
import EmailInput from "../../components/UserPage/EmailInput";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";

const UserPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="600px" height="600px" maxW="1500px" mx="auto" mt="30px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="150px" ml="180px" mt="50px">정보수정</Heading>
          
          <IdInput />
          <PsChInput />
          <PsChInput2 />
          <NameInput />
          <Button variant="outline" width="50px" height="50px" left="350px" mb="0" mt="-10px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            수정
          </Button>
          <EmailInput />
          <Button variant="outline" width="50px" height="50px" left="350px" mb="0" mt="-60px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            수정
          </Button>
          <PsInput />
          <Button variant="outline" width="250px" height="50px" left="120px" top="50px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            정보변경
          </Button>
        </Box>  
      </Flex>
    </Container>
  );
};

export default UserPage;
