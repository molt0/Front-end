import { 
  Box, 
  Button, Switch,
  Flex,
  Text, 
  Radio, 
  RadioGroup,
  Select, 
  SimpleGrid, 
  Stack,
  Input,
  Center,
  Divider,
  
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,

  Alert,
  AlertIcon,
  
  FormControl,
  FormLabel,

  useDisclosure 
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import AlbumList from '../../components/SearchPage/AlbumList'
import styled, { css } from "styled-components";
import Api from '../../Api'

const NoData = styled.div`
  display: ${props => props.noData ? 'block' : 'none'};
  width: 100%;
  height: 100px;

  & p{
    font-size: 50px;
    text-align: center;

    margin-top: 290px;
  }
`;

const NoResult = styled.div`
   display: ${props => props.visible ? 'block' : 'none'};

   & h1{
    font-size: 30px;
    text-align: center;
    color: red;
   }
   
`;

const SearchPage = () =>{
  const [isVertHoriz, setIsVertHoriz] = useState("horizontal")
  const [isNoData, setNoData] = useState(false)
  const [searchResultIsNull, setSearchResultIsNull] = useState(false)
  const [query, setQuery] = useState("")
  const [radioType, setRadioType] = useState("1")
  const [TypeMsg, setTypeMsg] = useState("")
  const [titleOrArist, setTitleArtist] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  function VH_more(){
    if(isVertHoriz ==  "horizontal") 
      setIsVertHoriz("vertical") 
    else 
      setIsVertHoriz("horizontal") 
  }

  // 긁어온 음원 목록 (원본)
  const [moltoList, setmoltoList] = useState([
    // OBJECT STORE ON HERE
  ])

  useEffect(()=>{
    setmoltoList([])
  },[])

   // 검색 데이터 존재 여부 검사
   useEffect(()=>{
    if(moltoList.length === 0){
      setNoData(true)
    }else{
      setNoData(false)
    }
    // 검색창이 비어있는지 검사
    if(query == "")
      setSearchResultIsNull(false)
    

    if(radioType === "1")
      setTypeMsg("아티스트 이름은 무엇인가요?")
    else
      setTypeMsg("제목은 무엇인가요?")

  }, [moltoList, query, radioType])

  // 순서 정렬
  const [isContentSort, setIsContentSort] = useState("")

  // 장르 필터
  const [genre, setGenre] = useState("")

  async function getData(){
    console.log(query)
    setmoltoList([])

    Api.get(`/search/${query}`).then((res)=>{
      console.log(res.data)

      if(res.data.result === false)
        setSearchResultIsNull(true)
      else
        setmoltoList(res.data.result)
    })
  }

  function createDocumnet(){

    if(titleOrArist === "")
      return;
    
    if(radioType === "1" && titleOrArist !== "")
      window.location.href = `/specific/editor/${query}:${titleOrArist}`

    if(radioType === "2" && titleOrArist !== "")
      window.location.href = `/specific/editor/${titleOrArist}:${query}`
  }


  return (
    <Box >
      <Flex h={50} lineHeight="50px" bgColor="#70ebe0">
        <Box ml={5}>
          <Select w={200} placeholder="모든 장르" onChange={(e)=>{setGenre(e.target.value) }}>
            <option value="발라드">발라드</option>
            <option value="팝">팝</option>
            <option value="락">락</option>
            <option value="힙합">힙합</option>
          </Select>
        </Box>

        <Input variant="filled" placeholder="Filled" width="700px" mt="5px" ml="10vw" 
        onChange={(e)=>{setQuery(e.target.value)}} />
        <Button colorScheme="teal" size="md" ml="10px" mt="5px" onClick={getData}>
          검색
        </Button>

        <Flex flex="1" justifyContent="space-around">
          <RadioGroup w="300px" onChange={(value)=>{setIsContentSort(value)}}>
            <Stack direction="row">
              <Radio value="최신" >최신순</Radio>
              <Radio value="인기" >인기순</Radio>
            </Stack>
          </RadioGroup>
          <Stack direction="row" width="90px">
            <Box>세로</Box>
            <Switch w={50} h={50} lineHeight="60px" size="lg" onChange={VH_more}/>
          </Stack>
        </Flex>
      </Flex>

      <NoData noData={isNoData}>
        <p>검색창에 노래제목을 검색해보세요!</p>
        <NoResult visible={searchResultIsNull && isNoData == true}>
        <h1>[{query}] 관련된 문서가 없어요..!</h1>
        <Center>
          <Button onClick={onOpen} mt="20px">✨ 직접 문서 만들기</Button>
        </Center>
          <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>문서 만들기</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody pb={6}>

              <Alert status="info">
                <AlertIcon />
                 키워드&nbsp; <strong>{query}</strong>&nbsp;은(는) 무엇인가요?
              </Alert>


              <RadioGroup defaultValue="1" mt="10px" onChange={setRadioType} value={radioType}>
              <Stack spacing={5} direction="row">
                <Radio colorScheme="blue" value="1">
                  제목
                </Radio>
                <Radio colorScheme="green" value="2">
                  아티스트
                </Radio>
              </Stack>
            </RadioGroup>

            <Divider mt="20px"/>

              
              <Alert status="warning">
                <AlertIcon />
                 {TypeMsg}
              </Alert>
                <Input placeholder="내용을 입력" mt="5px" onChange={(e)=>{setTitleArtist(e.target.value) }} />
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createDocumnet}>
                만들기!
              </Button>
              <Button onClick={onClose}>취소</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </NoResult>

      </NoData>

      <SimpleGrid w="1000px" m="0 auto " p="10px" spacing="20px" columns={isVertHoriz == "horizontal" ? "5" : "1"}> 
        <AlbumList albums={moltoList} isVertHoriz={isVertHoriz} isContentSort={isContentSort} genre={genre}/>
      </SimpleGrid>
    </Box>
  );
}

export default SearchPage;