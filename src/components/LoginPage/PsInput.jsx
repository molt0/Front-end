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
      <InputGroup width="300px" left="100px" top="70px">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button variant="outline" width="200px" height="50px" left="150px" top="250px" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
        로그인
      </Button>
    </Box>
  );
}

export default PsInput;
