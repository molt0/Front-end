import { 
  Box, 
  Button, Switch,
  Flex, 
  Radio, 
  RadioGroup,
  Select, 
  SimpleGrid, 
  Stack
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AlbumList from '../../components/SearchPage/AlbumList'

const SearchPage = () =>{
  const [isVertHoriz, setIsVertHoriz] = useState("horizontal")
  function VH_more(){
    if(isVertHoriz ==  "horizontal") 
      setIsVertHoriz("vertical") 
    else 
      setIsVertHoriz("horizontal") 
  }

  // 긁어온 음원 목록 (원본)
  const [moltoList, setmoltoList] = useState([
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목1", time:200, like:4431, date: new Date("2021-09-05"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목2", time:200, like:322, date: new Date("2021-09-01"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목3", time:200, like:333, date: new Date("2021-09-05"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목4", time:200, like:241, date: new Date("2021-09-03"), type:"힙합"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목5", time:200, like:5546, date: new Date("2021-09-03"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목6", time:200, like:6432, date: new Date("2021-09-04"), type:"힙합"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목7", time:200, like:4327, date: new Date("2021-09-03"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목8", time:200, like:844, date: new Date("2021-09-04"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목9", time:200, like:9131, date: new Date("2021-09-03"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목10", time:200, like:1220, date: new Date("2021-09-03"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목11", time:200, like:1333, date: new Date("2021-09-04"), type:"힙합"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목12", time:200, like:1132, date: new Date("2021-09-03"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목13", time:200, like:113, date: new Date("2021-09-02"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목14", time:200, like:1321, date: new Date("2021-09-03"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목15", time:200, like:3211, date: new Date("2021-09-03"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목16", time:200, like:32, date: new Date("2021-09-01"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목17", time:200, like:4431, date: new Date("2021-09-05"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목18", time:200, like:322, date: new Date("2021-09-01"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목19", time:200, like:333, date: new Date("2021-09-05"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목20", time:200, like:241, date: new Date("2021-09-03"), type:"힙합"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목21", time:200, like:5546, date: new Date("2021-09-03"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목22", time:200, like:6432, date: new Date("2021-09-04"), type:"힙합"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목23", time:200, like:4327, date: new Date("2021-09-03"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목23", time:200, like:844, date: new Date("2021-09-04"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목24", time:200, like:9131, date: new Date("2021-09-03"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목25", time:200, like:1220, date: new Date("2021-09-03"), type:"락"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목26", time:200, like:1333, date: new Date("2021-09-04"), type:"힙합"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목27", time:200, like:1132, date: new Date("2021-09-03"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목28", time:200, like:113, date: new Date("2021-09-02"), type:"팝"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목29", time:200, like:1321, date: new Date("2021-09-03"), type:"발라드"},
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목30", time:200, like:3211, date: new Date("2021-09-03"), type:"팝"}
  ])

  // 순서 정렬
  const [isContentSolt, setIsContentSolt] = useState("")

  // 장르 필터
  const [gangr, setGangr] = useState("")


  return (
    <Box >
      <Flex h={50} lineHeight="50px" bgColor="#70ebe0">
        <Box flex="2" ml={5}>
          <Select w={200} placeholder="모든 장르" onChange={(e)=>{setGangr(e.target.value) }}>
            <option value="발라드">발라드</option>
            <option value="팝">팝</option>
            <option value="락">락</option>
            <option value="힙합">힙합</option>
          </Select>
        </Box>

        <Flex flex="1" justifyContent="space-around">
          <RadioGroup w="300px" onChange={(value)=>{setIsContentSolt(value)}}>
            <Stack direction="row">
              <Radio value="최신" >최신순</Radio>
              <Radio value="인기" >인기순</Radio>
            </Stack>
          </RadioGroup>
          <Stack direction="row">
            <Box>세로</Box>
            <Switch w={50} h={50} lineHeight="60px" size="lg" onChange={VH_more}/>
          </Stack>
        </Flex>
      </Flex>

      <SimpleGrid w="1000px" m="0 auto " p="10px" spacing="20px" columns={isVertHoriz == "horizontal" ? "5" : "1"}> 
        <AlbumList albums={moltoList} isVertHoriz={isVertHoriz} isContentSolt={isContentSolt} gangr={gangr}/>
      </SimpleGrid>
    </Box>
  );
}

export default SearchPage;