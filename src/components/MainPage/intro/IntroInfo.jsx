import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Flex, Center  } from "@chakra-ui/react"
import styled from "styled-components";

const Container = styled.div`
  .tap {
  width: 200px;
  size: "md";
  margin-left: 10px;
  border: 1px solid teal;
  border-radius: 6px;
  
  font-weight: bold;
  color: teal;
  }
  .tabPanel{
    height: 1000px;
  }
`

const IntroInfo = () => {

  return ( 
    <Container>
      <Center>
        <Tabs variant="unstyled" mt="30px">
          <TabList>
            <Tab className="tap" _selected={{ color: "white", bg: "teal" }}>곡 소개</Tab>
            <Tab className="tap" _selected={{ color: "white", bg: "teal" }}>가사</Tab>
            <Tab className="tap" _selected={{ color: "white", bg: "teal" }}>정보</Tab>
            <Tab className="tap" _selected={{ color: "white", bg: "teal" }}>기타</Tab>
            <Tab className="tap" _selected={{ color: "white", bg: "teal" }}>관련 미디어</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="tabPanel">
              <p>MOLTO의 의미/목적에 대해 쓰기</p>
            </TabPanel>
            <TabPanel className="tabPanel">
              <p>MOLTO만의 특징? 이런 거 쓰기</p>
            </TabPanel>
            <TabPanel className="tabPanel">
              <p>MOLTO 사용법</p>
            </TabPanel>
            <TabPanel className="tabPanel">
              <p>푸터에 들어갈 내용</p>
            </TabPanel>
            <TabPanel className="tabPanel">
              <p>시간되면 MOLTO 영상 제작하기</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Container>
  );
};

export default IntroInfo;
