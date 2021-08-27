import React from "react";
import styled from "styled-components";
import {
  InputRightElement,
  InputGroup,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";



const PsInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return(
    <Box>
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
    </Box>
  );
}

export default PsInput;
