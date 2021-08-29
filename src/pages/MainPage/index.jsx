import React from "react";
import Desc_slide from "../../components/MainPage/Desc_slide";
import RecentSearch from "../../components/MainPage/RecentSearch";
import Rank_Top100 from "../../components/MainPage/ranking/Rank_Top100";
import Rank_Day from "../../components/MainPage/ranking/Rank_Day";
import Rank_Week from "../../components/MainPage/ranking/Rank_Week";
import Footer from '../../components/MainPage/Footer'

import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
      <Desc_slide />
      <Container maxW="1100px" mx="auto">  
        <RecentSearch />
        <Flex mt="100px">
          <Heading fontSize="30px" color="gray.500" mr="30px">MUSIC<br/>RANKING</Heading>
          <Rank_Top100 />
          <Spacer /> 
          <Rank_Day />
          <Spacer />
          <Rank_Week />
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
