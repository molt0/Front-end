import React from "react";
import styled from "styled-components";
import {
  Input,
  Box,
  Button
} from "@chakra-ui/react";



const IdInput = () => {
  return(
    <Box>
      <Input width="250px" height="50px" left="100px" top="20px" placeholder="아이디" />
      <Button variant="outline" width="50px" height="50px" left="100px" mb="-30px" top="2px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="m" fontWeight="extrabold">
        중복<br/>확인
      </Button>
    </Box>
  );
}

export default IdInput;
