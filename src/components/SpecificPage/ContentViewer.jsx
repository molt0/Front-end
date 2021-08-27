import React, { useState } from "react";
import styled from "styled-components";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";
import { Button } from "@chakra-ui/react";

import FakeData from "../../fake-data/EditorData"

const ContentViewer = () => {
  // const [content, setContent] = useState([]);
  
  // setContent(data)

  return (
    <>
      <EditorJs 
        data={FakeData}
        tools={EDITOR_JS_TOOLS}
        readOnly
      />
    </>
  );
};

export default ContentViewer;
