import React from "react";
import styled from "styled-components";
import {
  Input,
  Box,
} from "@chakra-ui/react";



const IdInput = () => {
  return(
    <Box>
      <Input width="300px" height="50px" left="50px" top="20px" placeholder="아이디" />
    </Box>
  );
}

export default IdInput;
