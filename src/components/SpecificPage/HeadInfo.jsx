import React from "react";
import styled from "styled-components";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

const HeadInfo = (props) => {
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
              {props.title}
            </Heading>
            <Text fontSize="md" ml="30px" mt="10px">아티스트: {props.artist}</Text>
            <Text fontSize="md" ml="30px" mt="5px">최근 수정: {props.updated}</Text>
            <Text fontSize="md" ml="30px" mt="5px">생성일: {props.created}</Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default HeadInfo;
