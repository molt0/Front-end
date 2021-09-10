import React from 'react';
import { Button, Link } from '@chakra-ui/react'

const NotFoundPage = () =>{
    return(
        <>
            <h1>페이지를 찾을 수 없습니다!</h1>
            <Link href="./">
                <Button>홈페이지로 돌아가기</Button>
            </Link>
        </>
    )
}

export default NotFoundPage;