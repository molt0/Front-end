import React from "react";
import styled from "styled-components";
import {
  Input,
  Box,
} from "@chakra-ui/react";



const EmailInput = () => {
  return(
    <Box>
      <Input width="300px" height="50px" left="50px" top="10px" placeholder="E-mail" />
    </Box>
  );
}

export default EmailInput;
