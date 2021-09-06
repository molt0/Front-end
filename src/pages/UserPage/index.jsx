import React from "react";
import IdInput from "../../components/UserPage/IdInput";
import PsInput from "../../components/UserPage/PsInput";
import PsChInput from "../../components/UserPage/PsChInput";
import PsChInput2 from "../../components/UserPage/PsChInput2";
import NameInput from "../../components/UserPage/NameInput";
import EmailInput from "../../components/UserPage/EmailInput";
import { Container, Flex, Box, Heading, Button, Image } from "@chakra-ui/react";

const UserPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <Flex mt="100px">
        <Box width="600px" height="900px" maxW="1500px" mx="auto" mt="30px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
          <Heading width="600px" pl="220px" mt="200px">프로필 수정</Heading>
            <Box width="150px" height="600px" float="left">
              <Image
                boxSize="125px"
                borderRadius="full"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mt="150px"
              />
              <Button width="50px" height="50px" top="-40px" left="85px" bg="teal.300" color="#fff" borderRadius="25px" pb="10px" fontSize="xxx-large">+</Button>
            </Box>
            <Box width="350px" height="600px" float="left">
              
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
              <Button variant="outline" width="250px" height="50px" left="50px" top="50px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold" onClick={() => changeStatus()}>
                정보변경
              </Button>
              <Button  variant="outline" width="100px" height="50px" left="50px" top="50px" borderRadius="lg" bg="gray" color="#fff" fontSize="xl" fontWeight="extrabold" onClick={() => changeStatus()}>
                취소
              </Button>
            </Box>
          </Box>
      </Flex>
    </Container>
  );
};

export default UserPage;
