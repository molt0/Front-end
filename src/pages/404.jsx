import React from 'react';
import { Button, Link } from '@chakra-ui/react'
import styled from 'styled-components';

const Background = styled.div`
    width: 100vw;
    height: 100vh;

    margin: 0 auto;

    background-color: #91e9c4;
`;
const MainTitle = styled.p`
    font-size: 70px;
`;

const Center = styled.div`
    width: 1200px;
    margin: 0 auto;
`

const NotFoundPage = () =>{
    return(
        <>
            <Background>
                <Center>
                    <MainTitle>404 NOT FOUND!</MainTitle>
                    <Link href="./">
                        <Button>홈페이지로 돌아가기</Button>
                    </Link>
                </Center>
            </Background>
        </>
    )
}

export default NotFoundPage;