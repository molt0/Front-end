import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

const Header = () => {
  const [toggles, setToggles] = useState([
    { isToggle: true, text: "곡 소개" },
    { isToggle: false, text: "가사" },
    { isToggle: false, text: "정보" },
    { isToggle: false, text: "기타" },
    { isToggle: false, text: "관련 미디어" },
  ]);

  //i is for index
  const onClick = (index) => {
    setToggles((prevState) =>
      toggles.map((x, mIndex) =>
        mIndex === index
          ? { isToggle: true, text: x.text }
          : { isToggle: false, text: x.text }
      )
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
