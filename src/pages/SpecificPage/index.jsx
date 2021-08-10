import React from "react";
import styled from "styled-components";
import Header from "../../components/SpecificPage/Header"
import HeadInfo from "../../components/SpecificPage/HeadInfo"
import ButtonMenus from "../../components/SpecificPage/ButtonMenus"

import { Divider } from "@chakra-ui/react"

const SpecificPage = () => {
  return(
    <div>
      <Header/>
      <HeadInfo/>
      <ButtonMenus/>
      <Divider mt="30px" colorScheme="whiteAlpha"/>
    </div>
  );
}

export default SpecificPage;

