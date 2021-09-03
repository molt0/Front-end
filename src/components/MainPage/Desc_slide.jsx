import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../global/Header";
import { Box } from "@chakra-ui/react";
import cat from './cat.jpg';

const HeaderMenu = styled(Header)`
  z-index: 999;
`

const Desc_slide = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  const [MainbgColor, setbgColor] = React.useState("none")
  const changeheader = () => setbgColor(a);

  var a;
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    a = scrollPosition > 400 ? "teal.300" : "none";
    changeheader(a)
    return () => {
      window.removeEventListener('scroll', updateScroll);
    }
  });
  return (
    <>
      <HeaderMenu bgColor={MainbgColor} bgblur="blur(10px)" />
      <Box w="100%" h="450px" backgroundImage={cat} bgColor="orange.200" backgroundSize="cover" backgroundRepeat="no-repeat">
        <>
          asdf
      </>
      </Box>
    </>
  );
}

export default Desc_slide;
