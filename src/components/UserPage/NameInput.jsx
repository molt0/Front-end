import React from "react";
import styled from "styled-components";
import {
  Input,
  Box,
} from "@chakra-ui/react";



const NameInput = () => {
  return(
    <Box>
      <Input width="300px" height="50px" left="50px" top="40px" placeholder="별명" />
    </Box>
  );
}

export default NameInput;
