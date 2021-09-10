import { 
  Box, 
  Button, 
  Flex, 
  Radio, 
  RadioGroup,
  Select, 
  SimpleGrid, 
  Stack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Album from "./Album"

const albums = () =>{
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
    {img:"음원_사진", artist:"아티스트_이름", name:"노래_제목16", time:200, like:32, date: new Date("2021-09-01"), type:"락"}
  ])

  // 정렬을 거친 음원 목록
  const [albums, setAlbums] = useState(moltoList);

  // 새로고침 임시방편
  const [re, setRenewal] = useState()
  function renewal(){
    setRenewal(albums.map((album, index) => (
      <Album album={album} isVertHoriz={isVertHoriz} key={index} />
    )))
  }

  // 가로 세로모드 
  const [isVertHoriz, setIsVertHoriz] = useState("horizontal");
  function VH_more(e){
    if(isVertHoriz ==  "horizontal"){
      setIsVertHoriz("vertical");
    }else{
      setIsVertHoriz("horizontal");
    }
  }

  function latestTrend(sun){
    if(sun == "인기순"){
      albums.sort((a, b) => { 
        return b.like - a.like 
      });
    }
    else{
      albums.sort((a, b) => {
        return b.date.getTime() - a.date.getTime() 
      });
    }

    renewal();
  }

  function strainer(value){
    setAlbums(moltoList)

    if(value != ""){
      setAlbums(albums.filter((element)=>{ 
        if(element.type == value) return true
      }))
      
    }
    
    
    renewal();

    console.log(value)
    console.log(albums)
  }

  return(
    <Box >
      <Flex h={50} lineHeight="50px" bgColor="#70ebe0">
        <Box flex="8" ml={5}>
          <Select w={200} placeholder="장르별" onChange={(e)=>{strainer(e.target.value)}}>
            <option value="발라드">발라드</option>
            <option value="팝">팝</option>
            <option value="락">락</option>
            <option value="힙합">힙합</option>
          </Select>
        </Box>

        <Flex flex="2" justifyContent="space-around">
          <RadioGroup w="200px" onChange={(value)=>{latestTrend(value)}}>
            <Stack direction="row">
              <Radio value="최신순" >최신순</Radio>
              <Radio value="인기순" >인기순</Radio>
            </Stack>
          </RadioGroup>
          <Button w={50} h={50} border="1px solid black" borderRadius="5px" onClick={VH_more}>
            {isVertHoriz == "horizontal" ? "↔" : "↕"}
          </Button>
        </Flex>
      </Flex>

      <SimpleGrid w="1000px" m="0 auto " p="10px" spacing="20px" columns={isVertHoriz == "horizontal" ? "5" : "1"}> 
        {albums.map((album, index) => { return (<Album album={album} isVertHoriz={isVertHoriz} key={index} />)} )}
      </SimpleGrid>
    </Box>
  );
}

export default albums;