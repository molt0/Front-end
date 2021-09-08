import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";
import { FakeData } from "../../fake-data/EditorData";

import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Button, Switch, FormLabel, Heading } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

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

const InfoBtn = styled.div`
  cursor: pointer;

  width: 250px;
  height: 50px;
  
  margin-left: 100px;

  text-align: center;
  border-radius: 30px;

  transition: 0.1s ease-in-out;
  &:hover{
    background-color: #e6e6e6;
    transform: scale(1.05)
  }
`;

const EditorContainer = styled.div`
  z-index: 0;
  margin: 0 auto;

  width: 1200px;

  border: 1px solid #a4e8e0;

  box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -webkit-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
`;

const sticky = css`
  position: fixed !important;
`;


const Toolbar = styled.div`
  z-index: 999;

  display: inline-block;
  opacity: ${props => props.visibilty ? 1 : 0};
  transition: all 0.3s ease-in-out;

  height: 80px;

  @media only screen and (max-width: 1600px) {
    width: 70rem;
  }

  @media only screen and (max-width: 1300px) {
    width: 90%;
  }
  
`;

const ToolbarFlex = styled.div`
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
  //Modal
  const { isOpen, onOpen, onClose } = useDisclosure()


  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
}

  
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      setVisible(scrollPosition > 80 ? true : false)
      console.log(footerVisible)
  });

  async function sendData() {
    const savedContent = await instanceRef.current.save();

    console.log("savedConent");
    console.log(savedContent);
    
    toast.success("저장이 완료되었습니다!",
      {position: "bottom-left"},
      {autoClose: 1500},
      {theme: "colored"}
    );
  }

  const setReadOnly = () => {
    instanceRef.current.readOnly.toggle();
  };

  const openModal = () =>{

  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정보 수정</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            모달 테스트
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <ControlContainer>
        <Flex>
          <Button size="md">❮</Button>
        </Flex>

        <InfoBtn onClick={onOpen}>
          <Heading as="h4" size="md" mt="13px">
            {FakeData.document_info.title}
          </Heading>
        </InfoBtn>


        <Flex>
            <FormLabel htmlFor="email-alerts" mb="0" mt="13px" fontSize="14px">
              미리보기 모드
            </FormLabel> 
          <Switch
            mt="8px"
            size="lg"
            id="email-alerts"
            onChange={(e) => {
              setReadOnly();
            }}
          />
          <Button colorScheme="green" onClick={sendData} mr="30px">저장</Button>
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
        
        
      </EditorContainer>

      <Toolbar visibilty={footerVisible}>
          <ToolbarFlex>
            <DocName><p>{FakeData.document_info.title}</p></DocName>
            
            <Button colorScheme="green" onClick={sendData}>저장</Button>
          </ToolbarFlex>
      </Toolbar>
      <ToastContainer/>
    </>
  );
};

export default ContentEditor;
