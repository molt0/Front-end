import React, { useState, useEffect, useRef,  useCallback} from "react";
import styled, { css } from "styled-components";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/EditorPlugins";
import { useHistory } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Flex, Button, Switch, FormLabel, Heading, InputGroup, InputLeftAddon, Input, Divider, Link } from "@chakra-ui/react";

import Api from '../../Api'

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

// const Flex = styled.div`
//   display: flex;
// `;

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

  background-color: #e6e6e6;
  transition: 0.1s ease-in-out;
  &:hover{
    background-color: #dfdfdf;
    border-radius: 2px solid #e6e6e6;
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

const ModalFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  `;

const ModalBtnFlex = styled.div`
  display: flex;
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

const IfContentNotExist = styled.div`
  display: ${props => props.notExist ? 'block' : 'none'};
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

const NoticeBox = styled.div`
  font-family: 'Quicksand', sans-serif !important;
  position: absolute;

  width: 500px;
  height: 350px;

  left: 50%;
  transform: translate(-50%, 50%);

  border-radius: 10px;

  background-color: #fff;
`
const InfoTitle = styled.p`
    text-align: center;

    margin-top: 30px;

    color: #899e6e;
    font-size: 30px;
`

const InfoMsg = styled.p`
  text-align: center;

  margin-top: 10px;

  color: #899e6e;
`

const ContentEditor = ({match}) => {
  const { title_artist } = match.params  

  const [content, setContent] = useState({title: "", artist:"", contents:{}});
  const [URLdivided, setURLdivided] = useState([]); //[0]:제목, [1]:아티스트
  const [isContentsNotExist, setContentNotExist] = useState(false)
  const [isURLFailed, setURLFailed] = useState(false);
  const [readOnlyBoolean, ReadOnlyStatus] = useState(false);
  const instanceRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [footerVisible, setVisible] = useState(false);
  //Modal
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory();

  //카테고리 선택 toggle
  const [toggles, setToggles] = useState([
    {index:0, isToggle: true, text: "곡 소개", type: 'content_intro' },
    {index:1, isToggle: false, text: "가사", type: 'content_lyrics'},
    {index:2, isToggle: false, text: "정보", type: 'content_info' },
    {index:3, isToggle: false, text: "기타", type: 'content_etc' },
    {index:4, isToggle: false, text: "관련 미디어", type: 'content_relate' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState();

  const categoryClick = (index) =>{
    setToggles(()=>
      toggles.map((y, mapIndex)=>
        mapIndex === index
          ? {index: mapIndex, isToggle: true, text: y.text, type: y.type}
          : {index: mapIndex, isToggle: false, text: y.text, type: y.type}
          )
      );
      setSelectedCategory(index)
      console.log(toggles)
      //axios events
      Api.get(`specific/${URLdivided[0]}/${URLdivided[1]}/${toggles[index].type}`).then((res)=>{
        setContent({title: "", artist:"", contents:{}})
        console.log(toggles[index].type)
        console.log(res.data)
        setContent(res.data)
      })
      
  }


  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
}

// get Scorll Behaviour  
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      setVisible(scrollPosition > 80)
  },);

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
  async function checkUrl(){
    if( URLdivided[0] === undefined || URLdivided[1] === undefined)
      setURLFailed(true)
    else 
      setURLFailed(false)   
  }
  
    
  //'then' keyword is possible because of 'async' keyword ^.^!
  checkUrl().then(()=>{
    
    // setParams({title: URLdivided[0], artist: URLdivided[1], type: 'intro'})
    // console.log("<- RENDERED TWINCE BECAUSE OF UseState")
    

    setSelectedCategory(0)
    Api.get(`specific/${URLdivided[0]}/${URLdivided[1]}/content_intro`).then((res)=>{
      setContent({title: "", artist:"", contents:{}})
      console.log(URLdivided[0])
      console.log(URLdivided[1])
      console.log(res.data)
      //받아온 데이터가 undefined인지 확인
      if(res.data.title === undefined || res.data.artist === undefined ){
        setURLFailed(true)
        
        
      }else{
        setURLFailed(false)
        setContent(res.data)     
      }
     
      
        
    })

   
  }) 

}, [URLdivided])

useEffect( ()=>{
  
  console.log(content.contents[Object.keys(content.contents)]) //콘솔로그는 content.contents의 내용을 출력
  
  if(content.contents === false )
    setContentNotExist(true)
  else
    setContentNotExist(false)
 
}, [content])

  async function sendData() {
    if(readOnlyBoolean === true){
      toast.error(<div>저장 실패! <br />보기모드를 해제해주세요</div>,
      {position: "bottom-left"},
      {autoClose: 1500},
      {theme: "colored"}
    );
    return
    }
      
    const savedContent = await instanceRef.current.save();

    console.log("savedConent");
    console.log(savedContent);

    if(savedContent.blocks.length === 0){
      toast.warning("내용이 비어있습니다!",
      {position: "bottom-left"},
      {autoClose: 1500},
      {theme: "colored"}
    );
    }else{
      toast.success("저장이 완료되었습니다!",
      {position: "bottom-left"},
      {autoClose: 1500},
      {theme: "colored"}
    );

    console.log(toggles[selectedCategory].type)
    //몇번째 토글인지 페이지 로딩 됬을 때, 저장 버튼 누를떄 알아야 함
    Api.post(`/specific/${URLdivided[0]}/${URLdivided[1]}/${toggles[selectedCategory].type}`,{ savedContent })
    }

  }

  const setReadOnly = () => {
    instanceRef.current.readOnly.toggle();
    readOnlyBoolean === true ? 
    ReadOnlyStatus(false) : ReadOnlyStatus(true)   
  };


  return (
    <>
      <IfDataLoadFailed failed={isURLFailed}>
        <NoticeBox>
          <InfoTitle>정보 불러오기를 실패했습니다 :(</InfoTitle>
          <InfoMsg> URL 정보가 올바르지 않거나, 예상치 못한 오류가 발생했습니다!</InfoMsg>
          <InfoMsg>
            다음 항목을 확인해주세요: <br /> <br />
            - URL의 형태는 '제목:아티스트' 형태여야 합니다. <br />
            - 잘못된 요청을 하지 않았는지 확인해주세요
          </InfoMsg>
          <Button colorScheme="blue" onClick={()=>history.back()}>이전 페이지로 이동하기</Button>
          <Link href="/"> <Button>홈페이지로 돌아가기</Button></Link>
        </NoticeBox>
      </IfDataLoadFailed>
            
      <IfContentNotExist notExist={isContentsNotExist === true ? true : false} >
        <NoticeBox>
          <InfoTitle>해당 문서는 존재하지 않아요!</InfoTitle>
          <InfoMsg> 아직까지 만들어지지 않은 문서인거 같아요.</InfoMsg>
          <InfoMsg> 직접 문서를 만드시거나 홈페이지로 돌아갈 수 있어요</InfoMsg>
          <Button colorScheme="blue" onClick={()=>{setContentNotExist(false); console.log("문서를 직접 만듭니다")}}>✏️ 직접 만들기!</Button>
          <Link href="/"> <Button>🏠 홈페이지로 돌아가기</Button></Link>
          <Button onClick={()=>{ history.goBack()}}>➖ 이전 페이지로 이동</Button>
        </NoticeBox>
      </IfContentNotExist>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정보 수정</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalFlex>
            <InputGroup>
              <InputLeftAddon children="곡 제목" />
              <Input type="tel" placeholder="제목을 입력하세요" onChange={(e)=>{}} value={content.title} />
            </InputGroup>
            <InputGroup mt="10px">
              <InputLeftAddon children="아티스트" />
              <Input type="tel" placeholder="제목을 입력하세요" onChange={(e)=>{}} value={content.artist} />
            </InputGroup>
            <Flex>
              <Button mt="10px" colorScheme="green" size="sm" width="80px" ml="230px">저장</Button>
              <Button mt="10px" colorScheme="green" size="sm" width="80px" ml="5px" variant="outline">초기화</Button>
            </Flex>

            <Divider mt="20px" />
            {toggles.map((toggle, i) =>
              toggle.isToggle 
              ? (<Button key={i} mt="5px" colorScheme="blue" onClick={()=> categoryClick(i)}>{toggle.text}</Button>)
              : (<Button key={i} mt="5px" onClick={()=> categoryClick(i)}>{toggle.text}</Button>)
            )}
            
        
            </ModalFlex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <ControlContainer>
        <Flex>
          <Button size="md" onClick={()=>history.back()}>❮</Button>
        </Flex>

        <InfoBtn onClick={onOpen}>
          <Heading as="h4" size="md" mt="13px">
            {`${URLdivided[0]} (${URLdivided[1]})`}
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
          data={content.contents[Object.keys(content.contents)]}
          onChange={(e) => {
            // setContent(content);
          }}
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
          enableReInitialize="false"
        />
        
        
      </EditorContainer>

      <Toolbar visibilty={footerVisible}>
          <ToolbarFlex>
            <DocName><p>{content.title}</p></DocName>
            
            <Button colorScheme="green" onClick={sendData}>저장</Button>
          </ToolbarFlex>
      </Toolbar>
      <ToastContainer/>
    </>
  );
};

export default ContentEditor;
