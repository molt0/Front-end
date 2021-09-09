import { 
  Box,  
  Flex, 
  Image
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Album = ({album, isVertHoriz="horizontal"}) =>{
  const [isHoverAlbum, setIsHoverAlbum] = useState(false)
  const horizHoverStyle = {
    border: "1px solid var(--chakra-colors-teal-200)",
    borderRadius:"10px", 
    background:'var(--chakra-colors-teal-100)',
    transform: "scale(1.05, 1.05) ",
    transition:"all 0.1s"
  }
  const vertHoverStyle = {
    background:"linear-gradient(to left, #fdfdfd 0%, var(--chakra-colors-teal-100) 20%, var(--chakra-colors-teal-100) 80%, #fdfdfd 100%)",
    transform: "scale(1.05, 1.05) ",
    transition:"all 0.1s"
  }

  return(
    isVertHoriz == "horizontal" ? 
    (
      <Flex 
        h={200} pt="5px"
        direction='column' 
        alignItems='center' 
        onMouseEnter={() => {setIsHoverAlbum(true)}} 
        onMouseLeave={() => {setIsHoverAlbum(false)}}
        style={isHoverAlbum ? horizHoverStyle : {transition:"transform 0.2s"}}
        overflow="hidden"
      >
        <Box flex="10"><Image src={album.img} alt={album.name} fallbackSrc="https://via.placeholder.com/150" fit="cover" boxSize="100px"/></Box>
        <Box flex="2">{album.name}</Box>
        <Box flex="2">{album.artist}</Box>
        <Box flex="1">{ Math.floor(album.time/60) + ":"+ album.time%60 }</Box>
      </Flex>
    ) :
    (
      <Flex 
        h={100} pl="50px" pr="50px"              
        direction='row' 
        alignItems='center' 
        onMouseEnter={() => {setIsHoverAlbum(true)}} 
        onMouseLeave={() => {setIsHoverAlbum(false)}}
        style={isHoverAlbum ? vertHoverStyle : { transition:"transform 0.2s"}}
        overflow="hidden"
        borderBottom="1px solid var(--chakra-colors-teal-300)"
      >
        <Box flex="3"><Image src={album.img} alt={album.name} fallbackSrc="https://via.placeholder.com/150" fit="cover" boxSize="80px"/></Box>
        <Box flex="9" pl="10px">{album.name}</Box>
        <Box flex="2">{album.artist}</Box>
        <Box flex="1">{ Math.floor(album.time/60) + ":"+ album.time%60 }</Box>
      </Flex>
    )
  );
};

export default Album