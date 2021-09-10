import React from "react";
import styled from "styled-components";
import {
  Box,
  Heading,
  Button
 } from "@chakra-ui/react";

 import { PlusSquareIcon } from "@chakra-ui/icons"

 const Position = styled.div`
  height: 50px;
  
  margin-right: 20px;
 `

const SHeader = () => {
  return(
    <div>
        <Position>
          <Button leftIcon={<PlusSquareIcon />} w="90px" colorScheme="teal" size="sm" float="right" mt="10px">
            수정하기
          </Button>
        </Position>
    </div>
  );
}

export default SHeader;
