import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

const Header = () => {
  const [toggles, setToggles] = useState([
    { isToggle: true, text: "곡 소개", type: 'intro' },
    { isToggle: false, text: "가사", type: 'lyrics'},
    { isToggle: false, text: "정보", type: 'info' },
    { isToggle: false, text: "기타", type: 'etc' },
    { isToggle: false, text: "관련 미디어", type: 'relate' },
  ]);
  //i is for index
  const onClick = (index) => {
    setToggles((prevState) =>
      toggles.map((x, mapIndex) =>
      mapIndex === index
      ? { isToggle: true, text: x.text, type: x.type}
      : { isToggle: false, text: x.text, type: x.type}
      )

      //컴포넌트랑 통신, 여기에서 api 불러오기

        // Api.get(`specific/${URLdivided[0]}/${URLdivided[1]}/${toggles[index].type}`).then((res)=>{
      //   console.log(toggles[index].type)
      //   console.log(res.data)
      //   setContent(res.data)
      // })
    );
  };

  return (
    <div>
      <Flex mt="30px" ml="50px">
        {toggles.map((toggle, i) =>
          toggle.isToggle ? (
            <Button
              w="200px"
              colorScheme="teal"
              size="md"
              ml="10px"
              onClick={() => onClick(i)}
            >
              {toggle.text}
            </Button>
          ) : (
            <Button
              w="200px"
              colorScheme="teal"
              size="md"
              variant="outline"
              ml="10px"
              onClick={() => onClick(i)}
            >
              {toggle.text}
            </Button>
          )
        )}
      </Flex>
    </div>
  );
};

export default Header;
