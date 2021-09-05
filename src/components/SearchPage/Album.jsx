import { 
  Box, 
  Center, 
  Flex, scaleFadeConfig, Spacer  
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Album = ({album, isVertHoriz="horizontal"}) =>{
  const [isHoverAlbum, setIsHoverAlbum] = useState(false)
  const hoverStyle = {
    // background : "var(--chakra-colors-teal-200)",
    
      transform: "scale(1.05, 1.05) ",
      transition:"transform 0.1s"
    }

  return(
    isVertHoriz == "horizontal" ? 
    (
      <Flex 
        h={200}
        border="3px solid var(--chakra-colors-teal-500);" 
        borderRadius={10} bg='var(--chakra-colors-teal-300);' 
        direction='column' 
        alignItems='center' 
        onMouseEnter={() => {setIsHoverAlbum(true)}} 
        onMouseLeave={() => {setIsHoverAlbum(false)}}
        style={isHoverAlbum ? hoverStyle : {transition:"transform 0.2s"}}
      >
        <Box flex="10"><img src={album.img} alt={album.name} /></Box>
        <Box flex="2">{album.name}</Box>
        <Box flex="2">{album.artist}</Box>
        <Box flex="1">{ Math.floor(album.time/60) + ":"+ album.time%60 }</Box>
      </Flex>
    ) :
    (
      <Flex 
        h={100} pl="50px" pr="50px"
        // 세로 정렬 앨범 스타일
        // bgGradient="linear(to-l, #fdfdfd 0%, var(--chakra-colors-teal-300) 10%, var(--chakra-colors-teal-300) 90%, #fdfdfd 100%)" // 1번 그라데이션 효과
        bg="var(--chakra-colors-teal-300)" border="2px solid var(--chakra-colors-teal-500)" borderRadius="5px"                       // 2번 사각형 효과
        direction='row' 
        alignItems='center' 
        onMouseEnter={() => {setIsHoverAlbum(true)}} 
        onMouseLeave={() => {setIsHoverAlbum(false)}}
        style={isHoverAlbum ? hoverStyle : {transition:"transform 0.2s"}}
      >
        <Box flex="2"><img src={album.img} alt={album.name} /></Box>
        <Box flex="10">{album.name}</Box>
        <Box flex="2">{album.artist}</Box>
        <Box flex="1">{ Math.floor(album.time/60) + ":"+ album.time%60 }</Box>
      </Flex>
    )
  );
};

export default Album