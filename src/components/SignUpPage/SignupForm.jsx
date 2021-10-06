import React, { useState, useEffect } from "react";
import {
  Input,
  Box,
  Text,
  Flex,
  Center,
  Switch,
  Link,
  Spacer,
  InputGroup,
  InputRightElement,
  Icon,
  Button
} from "@chakra-ui/react";
import { WarningIcon, WarningTwoIcon, CheckCircleIcon } from '@chakra-ui/icons'

const SignupForm = () => {

  const [inputs, setInputs] = React.useState({
    user_id: '',
    password: '',
    pwcheck: '',
    user_name: '',
    email: ''
  });

  const { user_id, password, pwcheck, user_name, email } = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target; 
    setInputs({
      ...inputs, 
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      user_id: '',
      password: '',
      pwcheck: '',
      user_name: '',
      email: ''
    })
  };

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [idCheckIcon, setidCheckIcon] = React.useState()
  const [idCheckIconColor, setidCheckIconColor] = React.useState()
  const [idCheckMSG, setidCheckMSG] = React.useState('')

  const [pwCheckIcon, setpwCheckIcon] = React.useState()
  const [pwCheckIconColor, setpwCheckIconColor] = React.useState()
  const [pwCheckMSG, setpwCheckMSG] = React.useState('')

  const [disabled, setdisabled] = React.useState('disabled')

  useEffect( () => {
    if(password!='' && pwcheck!=''){
      password == pwcheck ? setpwCheckIcon(CheckCircleIcon) & setpwCheckIconColor('green.300') & setpwCheckMSG('') : setpwCheckIcon(WarningTwoIcon) & setpwCheckIconColor('red.300') & setpwCheckMSG("비밀번호가 일치하지 않습니다.")
    }else {
      setpwCheckIcon(WarningIcon) & setpwCheckIconColor('gray.300') & setpwCheckMSG('')
    }
    if(user_id!='' && user_name!='' && email!='' && pwCheckIconColor=='green.300' && idCheckIconColor=='green.300') setdisabled('') 
    else setdisabled('disabled') 
   
    const data = {
        id: inputs.user_id		
    }

    fetch('http://localhost:1004/checkid',{ 
        method:"post",
        headers: { "Content-Type":  "application/json" },
        body: JSON.stringify(data),	
    })
    .then(res => res.json())
    .then(json => {
        console.log("json"); 
        if(json.tf === false){		
          setidCheckMSG('이미 존재하는 ID 입니다.');  
          setidCheckIcon(WarningTwoIcon);
          setidCheckIconColor('red.300');
        } else if (user_id === ''){
          setidCheckMSG('');  
          setidCheckIcon(WarningIcon);
          setidCheckIconColor('gray.300');
        } else {
          setidCheckMSG('');  
          setidCheckIcon(CheckCircleIcon);
          setidCheckIconColor('green.300'); 
        }
    }); 
  });
  
  return(
    <Center>
      <Box w="400px">
        <form action="/add" method="POST">
            {/* ID */}
            <InputGroup width="100%" height="40px" >
            <Input name="user_id" onChange={onChange} value={user_id} width="100%" height="50px"  placeholder="아이디" />
            <InputRightElement width="4.5rem">
                <Icon  as={idCheckIcon} w={6} h={6} mt="10px" color={idCheckIconColor} />
            </InputRightElement>
          </InputGroup>
          <Box w="100%" h="30px" pt="12px" color={idCheckIconColor} fontWeight="bold">{idCheckMSG}</Box>
          {/* Pw */}
            <Input
              name="password" onChange={onChange} value={password}
              width="100%" height="100px" mt="30px"
              type={show ? "text" : "password"}
              placeholder="비밀번호"
              height="50px"
            />
          <InputGroup width="100%" height="40px" >
            <Input form="disabled"
              name="pwcheck" onChange={onChange} value={pwcheck} width="100%" height="100px"
              type={show ? "text" : "password"}
              placeholder="비밀번호 확인"
              height="50px"
            />
            <InputRightElement width="4.5rem">
                <Icon  as={pwCheckIcon} w={6} h={6} mt="10px" color={pwCheckIconColor} />
            </InputRightElement>
          </InputGroup>
          <Flex mt="20px">
            <Box flat="left" l="0" color={pwCheckIconColor} fontWeight="bold">{pwCheckMSG}</Box>
            <Spacer/>
            <Switch variant="outline"  onChange={handleClick} size="md"/>
            <Text loat="right" ml="5px" fontSize="sm" color="gray.500">TEXT</Text>
          </Flex>
          {/* nickname */}
          <Input name="user_name" onChange={onChange} value={user_name} width="100%" height="50px" mt="30px" placeholder="별명" />
          
          {/* email */}
          <Input name="email" onChange={onChange} value={email} width="100%" height="50px" mt="20px" placeholder="E-mail" />
          <Link href="../login">
            <Button disabled={disabled} variant="outline" type="submit" width="250px" height="70px" ml="80px" mt="60px"  borderRadius="lg" bg="teal.300" color="#fff" fontSize="xl" fontWeight="extrabold">
                  회원가입
            </Button>
          </Link>
          <Button onClick={onReset}  variant="outline"  width="100px" height="35px" ml="155px" mt="30px"  borderRadius="lg" bg="gray.200" color="gray.500" fontSize="md" fontWeight="extrabold">
                초기화
          </Button>
        </form>
      </Box>
    </Center>
    );
  }
export default SignupForm;