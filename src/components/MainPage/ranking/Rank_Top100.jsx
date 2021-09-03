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
  Spacer
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
        <Box width="310px" mt="30px" mr="10px">
          <Flex>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
            <Spacer />
            <Heading fontSize="28px" mt="10px" textAlign="right" color="gray.500">Top 100</Heading>
          </Flex>
          <Box width="100%" height="100%" mt="10px" borderRadius="md" boxShadow="lg" bg="#eeeded;">
            <Collapse startingHeight={800} in={show}>
              <SimpleGrid columns={1} spacingX="100px">
              {
                  title.map((titleName, i) => (
                    <Box key={i} width="290px" height="70px" mt="10px" ml="10px" lineHeight="80px" fontWeight="extrabold" borderRadius="md" boxShadow="lg" bg="#fbfbfb;">
                      <Flex>
                        <Box className="rank" w="40px" h="100%" mt="-5px" fontSize="17px" textAlign="center">
                          {i+1}                        
                        </Box>
                        <Spacer />
                        <Image borderRadius="full" mt="5px " boxSize="50px" src={albumImg[i]} alt="Segun Adebayo" />                       
                        <Spacer />
                        <Box className="title" ml="20px" w="160px" h="100%" fontSize="13px">
                          {titleName}                       
                        </Box>
                        <Spacer />
                        <Box className="artist" w="40px" h="100%" fontSize="10px">
                          {artist[i]}                    
                        </Box>
                      </Flex>
                    </Box>
                  ))
                }
              </SimpleGrid>
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
                  Show {show ? "Less" : "More"}
                </Button>
          </Box>
        </Box>
        
    </div>
  );
}

export default Rank_Top100;
