import React from "react";
import styled from "styled-components";
import {
    Box,
    Link,
    Text,
} from "@chakra-ui/react";



const FindIdPs = () => {
  return(
      <Box>
        <Text fontSize="md" ml="110px" mt="65px">이곳이 처음이라면 <Link color="blue">여기</Link>를 눌러주세요.</Text>
      </Box>
  );
}

export default FindIdPs;
