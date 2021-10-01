import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Heading,
  Flex,
  SimpleGrid,
  Image,
  Collapse,
  Button,
  Spacer,
  Text
} from "@chakra-ui/react";
import cheerio from 'cheerio';
import request from 'request';


const Rank_Top100 = () => {
  const [albumImg, setalbumImg] = useState([]);
  const [title, settitle] = useState([]);
  const [artist, setartist] = useState([]);
  var url = 'http://www.melon.com/chart/';

  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  var rank = 0;  
  useEffect(() =>  {
    request(url, function(error, response, html){
      if (!error && rank <10) {
        var $ = cheerio.load(html);
        $('.ellipsis.rank01 > span > a').each(function(){
          if(rank<10){
            settitle((prev) => ([
              ...prev,
              $(this).text()
            ]))
            rank++;
          } else return 0; 
        })  
        $('.ellipsis.rank02 > span').each(function(){
          if(rank<20){
            setartist((prev) => ([
              ...prev,
              $(this).text()
            ]))
            rank++;
          } else { rank=0; return 0;} 
        })  
      }
    });
  },[])
  
  return(
    <>
      <Flex paddingX="10px" paddingY="8px">
        <Heading fontSize="22px" color="orange">Top 10</Heading>
        <Spacer/>
        <Button h="27px"><Text fontSize="7px">더보기</Text></Button>
      </Flex>
      <SimpleGrid columns={1} spacingX="100px">
      {
          title.map((titleName, i) => (
            <Box key={i} width="180px" height="30px" mt="5px" ml="10px" lineHeight="80px" fontWeight="extrabold" borderRadius="md" boxShadow="lg" overflow="hidden" bg="#fbfbfb;">
              <Flex  mt="-25px">
                <Box className="rank" w="25px" fontSize="13px" textAlign="center">
                  {i+1}              
                </Box>
                <Spacer />
                <Box className="title" w="90px" fontSize="9px">
                  {titleName}                        
                </Box>
                <Spacer />
                <Box className="artist" w="50px" fontSize="3px">
                  {artist[i]}                 
                </Box>
              </Flex>
            </Box>
          ))
        }
      </SimpleGrid>      
    </>
  );
}

export default Rank_Top100;
