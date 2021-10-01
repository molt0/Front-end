import React from "react";
import Header from "../../components/MainPage/menu/Header";
import SideMenu from "../../components/MainPage/menu/SideMenu";
import RecentSearch from "../../components/MainPage/RecentSearch";
import Footer from '../../components/MainPage/Footer';
import HeadInfo from '../../components/MainPage/intro/HeadInfo';
import IntroInfo from '../../components/MainPage/intro/IntroInfo';
import ModifiedList from '../../components/MainPage/ModifiedList';
import Ranking_Concise from '../../components/MainPage/Ranking_Concise';
import styled from "styled-components";

import { Flex, Heading, Spacer, Center, Box } from "@chakra-ui/react";

const Container = styled.div`
  z-index: 0;
  border-radius: 20px;

  width: 1200px;

  box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -webkit-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
`

const MainPage = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <Box position="absolute" mt="50px" left="40px">
        <ModifiedList/>
        <Ranking_Concise/>
      </Box>
      
      <Center>
        <Container>
            <HeadInfo />
            <IntroInfo />   
        </Container>
      </Center>
      <Footer />
    </>
  );
};

export default MainPage;
