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
        h={250} pt="5px"
        border="3px solid var(--chakra-colors-teal-500);" 
        borderRadius={10} bg='var(--chakra-colors-teal-300);' 
        direction='column' 
        alignItems='center' 
        onMouseEnter={() => {setIsHoverAlbum(true)}} 
        onMouseLeave={() => {setIsHoverAlbum(false)}}
        style={isHoverAlbum ? hoverStyle : {transition:"transform 0.2s"}}
        overflow="hidden"
      >
        <Box flex="10"><img src={album.img} alt={album.name} /></Box>
        <Box flex="2">{album.name}</Box>
        <Box flex="2">{album.artist}</Box>
        <Box flex="1">{ Math.floor(album.time/60) + ":"+ album.time%60 }</Box>
      </Flex>
    ) :
    (
      <Flex 
        h={150} pl="50px" pr="50px"
        bg="var(--chakra-colors-teal-300)" border="2px solid var(--chakra-colors-teal-500)" borderRadius="5px"                       
        direction='row' 
        alignItems='center' 
        onMouseEnter={() => {setIsHoverAlbum(true)}} 
        onMouseLeave={() => {setIsHoverAlbum(false)}}
        style={isHoverAlbum ? hoverStyle : {transition:"transform 0.2s"}}
        overflow="hidden"
      >
        <Box flex="3"><img src={album.img} alt={album.name} /></Box>
        <Box flex="9" pl="10px">{album.name}</Box>
        <Box flex="2">{album.artist}</Box>
        <Box flex="1">{ Math.floor(album.time/60) + ":"+ album.time%60 }</Box>
      </Flex>
    )
  );
};

export default Album