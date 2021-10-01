import React, {useState, useEffect} from "react";
import styled from "styled-components";
import HeadInfo from "../../components/SpecificPage/HeadInfo";
import ButtonMenus from "../../components/SpecificPage/ButtonMenus";
import {Link} from "react-router-dom"

import { PlusSquareIcon } from "@chakra-ui/icons"

import Api from "../../Api"
import { useHistory } from "react-router-dom";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";

import { FakeData } from "../../fake-data/EditorData"

import Header from "../../components/global/Header"

// import Background from "../../components/global/Background";

import { Divider, Switch, FormControl, FormLabel, Button } from "@chakra-ui/react";

const ContentContainer = styled.div`
  margin: 0 auto;

  width: 1200px;

  box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -webkit-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 4px 106px 12px rgba(0,0,0,0.1);

  border-radius: 20px;
`;

const Spacer = styled.div`
  width: 100%;
  height: 70px;
`;


const HideWhenScroll = styled.div`
  width: 100%;

  opacity: ${props => props.visibilty ? 1 : 0};
  transition: all 0.3s ease-in-out;
`;

const Position = styled.div` 
height: 50px;

margin-right: 20px;
`;


const IfDataLoadFailed = styled.div`
  display: ${props => props.failed ? 'block' : 'none'};
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  & Button{
    margin-top: 15px;
    width: 350px;

    left: 15%;
  }
  
  
`;

const FailedBox = styled.div`
  font-family: 'Quicksand', sans-serif !important;
  position: absolute;

  width: 500px;
  height: 350px;

  left: 50%;
  transform: translate(-50%, 50%);

  border-radius: 10px;

  background-color: #fff;
`
const FailedTitle = styled.p`
    text-align: center;

    margin-top: 30px;

    color: #899e6e;
    font-size: 30px;
`

const FailedMsg = styled.p`
  text-align: center;

  margin-top: 10px;

  color: #899e6e;
`

const SpecificPage = ({match}) => {
  const { title_artist } = match.params

  const [URLdivided, setURLdivided] = useState([]); //[0]:제목, [1]:아티스트
  const [isURLFailed, setURLFailed] = useState(false);
  const [docsExist, setDocsExist] = useState(false);

  const [content, setContent] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [footerVisible, setVisible] = useState(false);




  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    setVisible(!(scrollPosition > 15))
    console.log(footerVisible)
  });


    //when page loaded
useEffect(()=>{
  console.log("page mounted: 나누어진 URL 값을 저장하기 위해 컴포넌트가 2번 로딩됩니다")
  console.log(`URL Param Detected: ${title_artist}, intro`)
  console.log('------------------------------------------')

  setURLdivided(title_artist.split(':'))
  //여기다가 URLdivided 검사하면 작동 안함(useState async때문에 ㅠ)
}, [])

// get information from server if URLdivided value changed
useEffect( ()=>{
  async function fetchApi(){
    if( URLdivided[0] === undefined || URLdivided[1] === undefined)
      setURLFailed(true)
    else 
      setURLFailed(false) 
  }
  
  //'then' keyword is possible because of 'async' keyword ^.^!
  fetchApi().then(()=>{
    
    // setParams({title: URLdivided[0], artist: URLdivided[1], type: 'intro'})
    // console.log("<- RENDERED TWINCE BECAUSE OF UseState")

    Api.get(`specific/${URLdivided[0]}/${URLdivided[1]}/intro`).then((res)=>{
      console.log(res.data)
      setContent(res.data)
    })
    
  })  

}, [URLdivided]);


  return (
    <div>
       <IfDataLoadFailed failed={isURLFailed}>
        <FailedBox>
          <FailedTitle>정보 불러오기를 실패했습니다 :(</FailedTitle>
          <FailedMsg> URL 정보가 올바르지 않거나, 예상치 못한 오류가 발생했습니다!</FailedMsg>
          <FailedMsg>
            다음 항목을 확인해주세요: <br /> <br />
            - URL의 형태는 '제목:아티스트' 형태여야 합니다. <br />
            - 잘못된 요청을 하지 않았는지 확인해주세요
          </FailedMsg>
          <Button colorScheme="blue" onClick={()=>history.back()}>이전 페이지로 이동하기</Button>
          <Link href="/"> <Button>홈페이지로 돌아가기</Button></Link>
        </FailedBox>
      </IfDataLoadFailed>

      <HideWhenScroll visibilty={footerVisible}>
        <Header />
      </HideWhenScroll>
      <Spacer />
      <ContentContainer>
      <Position>
          <Button size="md" mt="10px" ml="15px" onClick={()=> history.back()}>❮</Button>
          <Link to="/"><Button size="md" mt="10px" ml="5px" >메인화면으로</Button></Link>
          <Link to={`/specific/editor/${title_artist}`}>
            <Button leftIcon={<PlusSquareIcon />} w="90px" colorScheme="teal" size="sm" float="right" mt="10px">
              수정하기
            </Button>
          </Link>
      </Position>
 
        <HeadInfo />
        <ButtonMenus />
        <EditorJs 
        data={content}
        tools={EDITOR_JS_TOOLS}
        readOnly
      />
        <Divider mt="30px" colorScheme="whiteAlpha" />
        
      </ContentContainer>

    </div>
  );
};

export default SpecificPage;
