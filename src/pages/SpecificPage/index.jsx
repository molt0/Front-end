import React from "react";
import styled from "styled-components";
import SHeader from "../../components/SpecificPage/Header";
import HeadInfo from "../../components/SpecificPage/HeadInfo";
import ButtonMenus from "../../components/SpecificPage/ButtonMenus";
import ContentViewer from "../../components/SpecificPage/ContentViewer";

import { Divider, Switch, FormControl, FormLabel } from "@chakra-ui/react";

const ContentContainer = styled.div`
  margin: 0 auto;

  width: 1200px;

  box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -webkit-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);

  border-radius: 20px;
`;

const SpecificPage = () => {
  return (
    <div>
      <ContentContainer>
        <SHeader />
        
        <HeadInfo />
        <ButtonMenus />

        <ContentViewer/>

        <Divider mt="30px" colorScheme="whiteAlpha" />
      </ContentContainer>
    </div>
  );
};

export default SpecificPage;
