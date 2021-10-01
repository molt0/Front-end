import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Input,
  Box,
  Button,
  Center,
  InputRightElement,
  InputGroup,
  Icon,
  Text,
  Flex,
  Switch,
  Link
} from "@chakra-ui/react";
import { WarningIcon, WarningTwoIcon, CheckCircleIcon } from '@chakra-ui/icons'
import Api from "../../Api";


const IdInput = () => {

  const [inputs, setInputs] = React.useState({
    id: '',
    pw: '',
    pwcheck: '',
    nickname: '',
    email: ''
  });

  const { id, pw, pwcheck, nickname, email } = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target; 
    setInputs({
      ...inputs, 
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      id: '',
      pw: '',
      pwcheck: '',
      nickname: '',
      email: ''
    })
  };

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [pwCheckIcon, setpwCheckIcon] = React.useState()
  const [pwCheckIconColor, setpwCheckIconColor] = React.useState()

  useEffect(() => {
    if(pw!='' && pwcheck!=''){
      pw == pwcheck ? setpwCheckIcon(CheckCircleIcon) & setpwCheckIconColor('green.300') : setpwCheckIcon(WarningTwoIcon) & setpwCheckIconColor('red.300')
    }else {
      setpwCheckIcon(WarningIcon) & setpwCheckIconColor('gray.300')
    }
  });
  
  
  return(
    <Center>
      <Box w="400px">
        {/* ID */}
        <Input name="id" onChange={onChange} value={id} width="100%" height="50px" mt="10px" placeholder="아이디" />
        <Button variant="outline" float="right" mt="10px" width="100%" height="40px"borderRadius="lg" bg="teal.300" color="#fff" fontSize="m" fontWeight="extrabold">
          중복확인
        </Button>
        
        {/* Pw */}
          <Input
            name="pw" onChange={onChange} value={pw}
            width="100%" height="100px" mt="30px"
            type={show ? "text" : "password"}
            placeholder="비밀번호"
            height="50px"
          />
        <InputGroup width="100%" height="40px" >
          <Input
            name="pwcheck" onChange={onChange} value={pwcheck} width="100%" height="100px"
            type={show ? "text" : "password"}
            placeholder="비밀번호 확인"
            height="50px"
          />
          <InputRightElement width="4.5rem">
              <Icon  as={pwCheckIcon} w={6} h={6} mt="10px" color={pwCheckIconColor} />
          </InputRightElement>
        </InputGroup>
        <Flex  float="right" mt="20px">
          <Switch variant="outline"  onChange={handleClick} size="md"/>
          <Text ml="5px" fontSize="sm" color="gray.500">TEXT</Text>
        </Flex>

        {/* nickname */}
        <Input name="nickname" onChange={onChange} value={nickname} width="100%" height="50px" mt="30px" placeholder="별명" />
        
        {/* email */}
        <Input name="email" onChange={onChange} value={email} width="100%" height="50px" mt="20px" placeholder="E-mail" />
        <Link href="../login">
          <Button variant="outline"  width="250px" height="70px" ml="80px" mt="60px"  borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
                회원가입
          </Button>
        </Link>
        <Button onClick={onReset}  variant="outline"  width="100px" height="35px" ml="155px" mt="30px"  borderRadius="lg" bg="gray.200" color="gray.500" fontSize="md" fontWeight="extrabold">
              초기화
        </Button>
      </Box>
    </Center>
  );
}

export default IdInput;
