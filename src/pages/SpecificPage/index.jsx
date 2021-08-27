import React from "react";
import styled from "styled-components";
import Header from "../../components/SpecificPage/Header";
import HeadInfo from "../../components/SpecificPage/HeadInfo";
import ButtonMenus from "../../components/SpecificPage/ButtonMenus";
import ContentViewer from "../../components/SpecificPage/ContentViewer";

import { Divider, Switch, FormControl, FormLabel } from "@chakra-ui/react";

const Field = styled.div`
  width: 90%;
  height: 90%;

  margin: 0 auto;
  margin-top: 10px;
`;

const SpecificPage = () => {
  return (
    <div>
      <Header />
      <HeadInfo />
      <ButtonMenus />

      <ContentViewer/>

      <Divider mt="30px" colorScheme="whiteAlpha" />
      <Field>
        
      </Field>
    </div>
  );
};

export default SpecificPage;
