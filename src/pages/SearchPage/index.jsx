import { 
  Box, 
  Button, Switch,
  Flex, 
  Radio, 
  RadioGroup,
  Select, 
  SimpleGrid, 
  Stack,
  Input
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

const NoResult = styled.h1`
   display: ${props => props.visible ? 'block' : 'none'};
    font-size: 30px;

    text-align: center;

    color: red;
`;

const SearchPage = () =>{
  const [isVertHoriz, setIsVertHoriz] = useState("horizontal")
  const [isNoData, setNoData] = useState(false)
  const [searchResultIsNull, setSearchResultIsNull] = useState(false)
  const [query, setQuery] = useState("")
  function VH_more(){
    if(isVertHoriz ==  "horizontal") 
      setIsVertHoriz("vertical") 
    else 
      setIsVertHoriz("horizontal") 
  }

  // 긁어온 음원 목록 (원본)
  const [moltoList, setmoltoList] = useState([
    // {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목30", time:200, like:3211, date: new Date("2021-09-03"), type:"팝"}
    // 객체가 
  ])

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
    
  }, [moltoList, query])

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
        <NoResult visible={searchResultIsNull && isNoData == true}>{query}와 관련된 문서가 없어요..!</NoResult>
      </NoData>

      <SimpleGrid w="1000px" m="0 auto " p="10px" spacing="20px" columns={isVertHoriz == "horizontal" ? "5" : "1"}> 
        <AlbumList albums={moltoList} isVertHoriz={isVertHoriz} isContentSort={isContentSort} genre={genre}/>
      </SimpleGrid>
    </Box>
  );
}

export default SearchPage;