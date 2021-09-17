import React from "react";
import styled from "styled-components";
import {
  InputRightElement,
  InputGroup,
  Input,
  Button,
  Box,
  Text,
  Link,
  Image,
  Center,
  Icon
} from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons'


const PsInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return(
    <Box>
      <Center>
        <Image
        boxSize="200px"
        objectFit="cover"
        src="https://bit.ly/sage-adebayo"
        alt="Segun Adebayo"
        />
      </Center>
      <Box>
        <Input width="300px" height="50px" left="100px" top="50px" placeholder="아이디" />
      </Box>
      <InputGroup width="300px" height="50px" left="100px" top="80px">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="비밀번호"
          height="50px"
        />
        <InputRightElement width="4.5rem">
          <Button h="35px" size="sm" onClick={handleClick} top="0.32rem" mr="0.25rem">
            {show ? "숨기기" : "보기"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box>
        <Text fontSize="md" ml="110px" mt="65px">이곳이 처음이라면 <Link color="blue">여기</Link>를 눌러주세요.</Text>
      </Box>
      <Button variant="outline" width="200px" height="50px" left="150px" top="30px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            로그인
      </Button>
    </Box>
  );
}


export default PsInput;
