import React, { useState, useRef } from "react";
import styled from "styled-components";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";

import { Button, Switch, FormLabel } from "@chakra-ui/react";

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
`;

const EditorContainer = styled.div`
  margin: 0 auto;

  width: 1200px;
  height: 800px;

  border: 1px solid #A4E8E0;
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;

  background-color: #ebe8e8;
`;

const ContentEditor = () => {
  const [content, setContent] = useState([]);
  const instanceRef = useRef(null);

  async function sendData() {
    const savedContent = await instanceRef.current.save();
  
    console.log(savedContent);
  }

  const setReadOnly = () =>{
    instanceRef.current.readOnly.toggle();
  }

  return (
    <>
      <ControlContainer>
        <Flex>
          <Button size="md">❮</Button>
        </Flex>

        <Flex>
          <FormLabel htmlFor="email-alerts" mb="0">
            미리보기 모드
          </FormLabel>
          <Switch size="lg" id="email-alerts" />
        </Flex>
      </ControlContainer>

      <EditorContainer>
        <EditorJs
          data={content}
          onChange={(e) => {
            setContent(content);
          }}
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
        />
        
        <Button onClick={setReadOnly}>dd</Button>
      </EditorContainer>

      <Footer />
    </>
  );
};

export default ContentEditor;
