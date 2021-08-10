import React from "react";
import styled from "styled-components";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

const HeadInfo = () => {
  return (
    <div>
      <Box ml="400px" mt="80px">
        <Flex>
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Box>
            <Heading size="lg" ml="30px" mt="10px">
              여기는 노래 제목
            </Heading>
            <Text fontSize="md" ml="30px" mt="10px">아티스트: 무제</Text>
            <Text fontSize="md" ml="30px" mt="5px">발매일: 무제</Text>
            <Text fontSize="md" ml="30px" mt="5px">장르: POP</Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default HeadInfo;
