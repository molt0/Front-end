import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PageHeader from "../../components/SpecificPage/Header";
import HeadInfo from "../../components/SpecificPage/HeadInfo";
import ButtonMenus from "../../components/SpecificPage/ButtonMenus";
import ContentViewer from "../../components/SpecificPage/ContentViewer";

import Header from "../../components/global/Header"

// import Background from "../../components/global/Background";

import { Divider, Switch, FormControl, FormLabel } from "@chakra-ui/react";

const ContentContainer = styled.div`
  margin: 0 auto;

  width: 1200px;

  box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -webkit-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);

  border-radius: 20px;
`;

const Spacer = styled.div`
  width: 100%;
  height: 70px;
`;


const HideWhenScroll = styled.div`
  width: 100%;

  opacity: ${props => props.visibilty ? 1 : 0};
  transition: all 0.3s ease-in-out;
`;

const SpecificPage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [footerVisible, setVisible] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    setVisible(!(scrollPosition > 15))
    console.log(footerVisible)
  });

  return (
    <div>
      <HideWhenScroll visibilty={footerVisible}>
        <Header />
      </HideWhenScroll>
      <Spacer />
      <ContentContainer>
        <PageHeader />

        
        <HeadInfo />
        <ButtonMenus />

        <ContentViewer/>

        <Divider mt="30px" colorScheme="whiteAlpha" />
        
      </ContentContainer>

    </div>
  );
};

export default SpecificPage;
