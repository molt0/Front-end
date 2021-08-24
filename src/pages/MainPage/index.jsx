import React from "react";
import RecentSearch from "../../components/MainPage/RecentSearch";
import Rank_Top100 from "../../components/MainPage/Rank_Top100";
import Rank_Day from "../../components/MainPage/Rank_Day";
import Rank_Week from "../../components/MainPage/Rank_Week";
import { Container, Flex, Heading } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Container maxW="1500px" mx="auto">
      <RecentSearch />
      <Flex mt="100px">
        <Heading size="lg" color="gray.500">MUSIC RANKING</Heading>
        <Rank_Top100 />
        <Rank_Day />
        <Rank_Week />
      </Flex>
    </Container>
  );
};

export default MainPage;
