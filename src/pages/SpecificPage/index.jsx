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

  const [isURLFailed, setURLFailed] = useState(false);
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


  useEffect(()=>{
    console.log("page mounted")
    console.log(`URL Param Detected: ${title_artist}, intro`)
  
      const URLdivided = title_artist.split(':')
      const title = URLdivided[0]
      const artist = URLdivided[1]
      const type = 'intro'
     
      if(title_artist === undefined || 
                title === undefined ||
               artist === undefined){
          setURLFailed(true)
        }
      else{
          setURLFailed(false)
      }
      
      console.log(title)
      console.log(artist)
      console.log(type)


      Api.get(`specific/${title}/${artist}/${type}`).then((res)=>{
        console.log(res.data)
      })
     
  
  }, []);

  return (
    <div>
      <HideWhenScroll visibilty={footerVisible}>
        <Header />
      </HideWhenScroll>
      <Spacer />
      <ContentContainer>
        <PageHeader />
 
        <HeadInfo />
        <ButtonMenus />
        <EditorJs 
        data={FakeData.document_content}
        tools={EDITOR_JS_TOOLS}
        readOnly
      />
        <Divider mt="30px" colorScheme="whiteAlpha" />
        
      </ContentContainer>

    </div>
  );
};

export default SpecificPage;
