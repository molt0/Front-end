import React from "react";
import { Box, Heading, Button, Container, Link } from "@chakra-ui/react";


const RecentSearch = () => {
  return(
    <Box mt="100px">
      <Heading size="sm" color="gray.500">최근 목록</Heading>
      <Box width="1100px" height="150px" maxW="1100px" mx="auto" mt="10px" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
        <Link href="/login">
          <Button className="btn" variant="outline" width="140px" height="37px" left="44%" top="35%" borderRadius="lg" bg="teal.300" color="#fff" fontSize="sm" fontWeight="extrabold">
            로그인
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default RecentSearch;
