import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../global/Header";
import { Box } from "@chakra-ui/react";
import cat from './cat.jpg';

const Desc_slide = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  const [MainbgColor, setbgColor] = React.useState("none")
  const changeheader = () => setbgColor(a);

  var a;
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      a = scrollPosition > 400 ? "teal.300" : "none";
      changeheader(a)
      console.log(MainbgColor)
  });
  return(
    <>
    <Header bgColor={MainbgColor} bgblur="blur(10px)"/>
    <Box w="100%" h="450px" backgroundImage={cat} backgroundSize="cover" backgroundRepeat="no-repeat">
      <>
        asdf
      </>
    </Box>
    </>
  );
}

export default Desc_slide;
