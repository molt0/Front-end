import React from "react";
import styled from "styled-components";
import {
  Box,
  Heading, 
 } from "@chakra-ui/react";

const Header = () => {
  return(
    <div>
        <Box ml="300px" mt="30px" >
            <Heading size="md">곡 정보</Heading>
        </Box>
    </div>
  );
}

export default Header;
