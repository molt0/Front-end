import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Heading,
  Flex,
  SimpleGrid,
  Image
} from "@chakra-ui/react";
import cheerio from 'cheerio';
import request from 'request';


const Rank_Top100 = () => {
  
  const [albumImg, setalbumImg] = useState([]);
  const [title, settitle] = useState([]);
  const [artist, setartist] = useState([]);
  var url = 'http://www.melon.com/chart/';

  var rank = 10;  
  useEffect(() =>  {
      request(url, function(error, response, html){
        if (!error) {
          var $ = cheerio.load(html);
          
          $('.image_typeAll>img').each(function(){
              setalbumImg((prev) => ([
                ...prev,
                $(this).attr("src")
              ]))
          })  
          $('.ellipsis.rank01 > span > a').each(function(){
            settitle((prev) => ([
              ...prev,
              $(this).text()
            ]))
            console.log("test");
          })  
          $('.ellipsis.rank02 > span').each(function(){
            setartist((prev) => ([
              ...prev,
              $(this).text()
            ]))
          })  
        }
      });
    },[])
  
  return(
    <div>
        <Box width="400px" mt="30px" mr="10px">
            <Heading size="lg" textAlign="right" color="gray.500">Top 100</Heading>
            <Box width="100%" height="100%" mt="10px" borderRadius="md" boxShadow="lg" bg="#979191;">
            <SimpleGrid columns={1} spacingX="100px">
            {
                title.map((titleName, i) => (
                  <Box key={i} width="380px" height="80px" mt="10px" ml="10px" lineHeight="80px" fontWeight="extrabold" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
                    <Flex>
                      <div className="rank">{i+1}</div>
                      <Image borderRadius="full" boxSize="50px" src={albumImg[i]} alt="Segun Adebayo" />
                      <div className="title">{titleName}</div>
                      <div className="artist">{artist[i]}</div>
                    </Flex>
                  </Box>
                ))
              }
            </SimpleGrid>
            </Box>
        </Box>
        
    </div>
  );
}

export default Rank_Top100;
