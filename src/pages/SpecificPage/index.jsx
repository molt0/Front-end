import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PageHeader from "../../components/SpecificPage/Header";
import HeadInfo from "../../components/SpecificPage/HeadInfo";
import ButtonMenus from "../../components/SpecificPage/ButtonMenus";

import Api from "../../Api"

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";

import { FakeData } from "../../fake-data/EditorData"

import Header from "../../components/global/Header"

// import Background from "../../components/global/Background";

import { Divider, Switch, FormControl, FormLabel } from "@chakra-ui/react";

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
      <HideWhenScroll visibilty={footerVisible}>
        <Header />
      </HideWhenScroll>
      <Spacer />
      <ContentContainer>
        <PageHeader address={title_artist}/>
 
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
