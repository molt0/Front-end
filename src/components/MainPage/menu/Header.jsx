import React from "react";
import {
  Heading,
  Flex,
  Input
} from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
  display: fixed;
  margin-bottom: 30px;
  width: 100%;
  height: 60px;
  background-color: teal;
  top: 0;
  left: 0;
  align-items: center;
  color: white;
  z-index: 999;
`

const Header = () => {

  return (
    <Container>
      <Flex>
        <Heading as="h1" fontSize="30px" letterSpacing={"tighter"} ml="100px">
          Molto
        </Heading>
        <Input ml="60px" h="35px" w="430px" borderRadius="7px" variant="outline" color="black" fontSize="14px" bg="white" placeholder="검색" />
      </Flex>
    </Container>
    
  );
};

export default Header;
