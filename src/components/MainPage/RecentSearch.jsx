import React from "react";
import styled from "styled-components";
import {
  Link,
  Box,
  Heading, 
  Button,
  Container
} from "@chakra-ui/react";



const RecentSearch = () => {
  return(
    <Box mt="30px">
      <Heading size="md" color="gray.500">최근 목록</Heading>
      <Box width="1500px" height="200px" maxW="1500px" mx="auto" mt="10px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
        <Link href="login" _hover={{ textDecoration: 'none' }}>
          <Button onclick="locantion.href='login'" variant="outline" width="200px" height="50px" left="44%" top="35%" borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
            로그인
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default RecentSearch;
