import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import {
  Button,
 } from "@chakra-ui/react";

 import { PlusSquareIcon } from "@chakra-ui/icons"

 const Position = styled.div`
  height: 50px;
  
  margin-right: 20px;
 `

const PageHeader = () => {
  return(
    <div>
        <Position>
          <Button size="md" mt="10px" ml="15px" onClick={()=> history.back()}>❮</Button>
          <Link to="/"><Button size="md" mt="10px" ml="5px" >메인화면으로</Button></Link>
          <Button leftIcon={<PlusSquareIcon />} w="90px" colorScheme="teal" size="sm" float="right" mt="10px">
            수정하기
          </Button>
        </Position>
    </div>
  );
}

export default PageHeader;
