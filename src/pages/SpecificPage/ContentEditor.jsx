import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";
import { FakeData } from "../../fake-data/EditorData";

import { Button, Switch, FormLabel, Heading } from "@chakra-ui/react";

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

  border: 1px solid #a4e8e0;
`;

const sticky = css`
  position: fixed !important;
`;

const Footer = styled.div`
  width: 75%;
  height: 80px;

  margin-left: 20px;
  padding-left: 10px;

  top: 660px;

  position: fixed;
  z-index: 999;
  ${sticky}

  background-color: rgba(200, 200, 200, 0.8);
  border: 1px solid #fadcd9;
  border-radius: 10px;
`;

const ContentEditor = () => {
  const [content, setContent] = useState([]);
  const instanceRef = useRef(null);

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

        <Footer>
          <Button onClick={sendData}>dd</Button>
        </Footer>
      </EditorContainer>
    </>
  );
};

export default ContentEditor;
