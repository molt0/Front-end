import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";


import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";
import { FakeData } from "../../fake-data/EditorData";

import { Button, Switch, FormLabel, Heading } from "@chakra-ui/react";

const keyframes = require('styled-components').keyframes
const Flex = styled.div`
  display: flex;
`;

const ControlContainer = styled.div`
  width: 100%;
  height: 80px;

  margin: 0 auto;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;

  background-color: #fbfbfb;

  & Button{
    margin-left: 20px;
    float: right;
  }

  
`;


const EditorContainer = styled.div`
  margin: 0 auto;

  width: 1200px;

  border: 1px solid #a4e8e0;
`;

const sticky = css`
  position: fixed !important;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

const Footer = styled.div`
  display: inline-block;
  display: ${props => props.visibilty ? 'block' : 'none'};
  
  height: 80px;

  @media only screen and (max-width: 1600px) {
    width: 70rem;
  }

  @media only screen and (max-width: 1300px) {
    width: 90%;
  }
  
  animation: ${props => props.visibilty ? fadeIn : fadeOut};
  transition: visibility 1s linear;
`;

const FooterFlex = styled.div`
  justify-content: space-between;

  display: flex;
  top: 90%;
  right: 0;
  margin-right: 170px;

  width: 400px;
  height: 65px;

  

  position: fixed;
  z-index: 999;
  ${sticky}

  background-color: rgba(200, 200, 200, 0.8);
  border: 1px solid #fadcd9;
  border-radius: 10px;

  & Button{
    float: right;
    margin-top: 10px;
    margin-right: 25px;
  }
`

const DocName = styled.div`

  margin-top: 20px;
  margin-left: 20px;
`

const ContentEditor = () => {
  const [content, setContent] = useState([]);
  const instanceRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [footerVisible, setVisible] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
}

  
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      setVisible(scrollPosition > 100 ? true : false)
      console.log(footerVisible)
  });

  async function sendData() {
    const savedContent = await instanceRef.current.save();

    console.log("savedConent");
    console.log(savedContent);
  }

  const setReadOnly = () => {
    instanceRef.current.readOnly.toggle();
  };

  return (
    <>
      <ControlContainer>
        <Flex>
          <Button size="md">❮</Button>
        </Flex>

        <Heading as="h4" size="md">
          {FakeData.document_info.title}
        </Heading>

        <Flex>
          <FormLabel htmlFor="email-alerts" mb="0">
            미리보기 모드
          </FormLabel>
          <Switch
            size="lg"
            id="email-alerts"
            onChange={(e) => {
              setReadOnly();
            }}
          />
        </Flex>
      </ControlContainer>

      <EditorContainer>
        <EditorJs
          data={FakeData.document_content}
          onChange={(e) => {
            // setContent(content);
          }}
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
        />

        <Footer visibilty={footerVisible}>
          <FooterFlex>
            <DocName><p>{FakeData.document_info.title}</p></DocName>
            
            <Button colorScheme="green" onClick={sendData}>저장</Button>
          </FooterFlex>
        </Footer>
      </EditorContainer>
    </>
  );
};

export default ContentEditor;
