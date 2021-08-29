import React from "react";
import styled from "styled-components";
import {
  Box
} from "@chakra-ui/react";

const Footer = () => {
  return(
    <Box 
        align="center"
        justify="space-between"
        mt="100px"
        w="100%"
        padding={10}
        bg="teal.600"
        color="white"
     >
       여기는 푸터!
    </Box>
  );
}

export default Footer;