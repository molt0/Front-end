import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Flex, Center, Link  } from "@chakra-ui/react"
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
              <li> 다른 페이지로 넘어가는 예비 링크버튼입니다.</li>
              <br/>
              문서 페이지 <Link href="specific/view/제목:아티스트명 "><Button ml="142px">바로가기</Button></Link><br/> 
              검색 페이지 <Link href="/search  "><Button ml="142px">바로가기</Button></Link> <br/>
              로그인 페이지 / ID/PW : itsw <Link href="/login  "><Button ml="25px">바로가기</Button></Link><br/>
              회원가입 페이지 / ID/PW : itsw <Link href="/signup  "><Button ml="8px">바로가기</Button></Link><br/>
              <br/>
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
