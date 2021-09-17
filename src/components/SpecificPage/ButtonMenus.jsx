import React from "react";
import styled from "styled-components";
import { Button, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Flex mt="30px" ml="50px">
        <Button w="200px" colorScheme="teal" size="md" >
          곡 소개
        </Button>
        <Button w="200px" colorScheme="teal" size="md" variant="outline"  ml="10px">
          가사
        </Button>
        <Button w="200px" colorScheme="teal" size="md" variant="outline"  ml="10px">
          정보
        </Button>
        <Button w="200px" colorScheme="teal" size="md" variant="outline"  ml="10px">
          기타
        </Button>
        <Button w="200px" colorScheme="teal" size="md" variant="outline"  ml="10px">
          관련 미디어
        </Button>
      </Flex>
    </div>
  );
};

export default Header;
