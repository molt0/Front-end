import React from "react";
import styled from "styled-components";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

import Rank_Top100_10 from './ranking/Rank_Top10'

const Ranking_Concise = () => {
  return (
    <div>
      <Box bgColor="gray.200" mt="50px" width="200px" height="400px" borderRadius="7px">
      <Rank_Top100_10 />
      </Box>
    </div>
  );
};

export default Ranking_Concise;
