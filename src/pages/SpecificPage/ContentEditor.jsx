import React, { useState } from "react";
import styled from "styled-components";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import { Button, Switch, FormControl, FormLabel } from "@chakra-ui/react";

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

  background-color: #ececec;

`;

const EditorContainer = styled.div`
  margin: 0 auto;

  width: 95%;
  height: 800px;
`;

const ContentEditor = () => {
  const [content, setContent] = useState("");

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

      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        
      />

    </EditorContainer>
      {content}
      
    </>
  );
};

export default ContentEditor;
