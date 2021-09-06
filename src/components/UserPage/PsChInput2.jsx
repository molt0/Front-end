import React from "react";
import styled from "styled-components";
import {
  InputGroup,
  Input,
  Box,
} from "@chakra-ui/react";



const PsInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return(
    <Box>
      <InputGroup width="300px" height="50px" left="50px" top="30px">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="비밀번호 확인"
          height="50px"
        />
      </InputGroup>
    </Box>
  );
}

export default PsInput;
