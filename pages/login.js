import React from 'react';
import contentful from '../helpers/contentful';
import Nav from '../components/nav';
import BannerImage from '../components/bannerImage';
import H1 from '../components/header';
import Head from 'next/head';
import styled from 'styled-components';
import LoginContainer from '../components/loginContainer';
import Button from '../components/button';

const Wrapper = styled.div`
    width: 100%;
`
const Warning = styled.div`
    width: 100%;
    margin: auto;
    color: red;
    text-align: center;
`

const Login = () => {
    return(
        <Wrapper>
            <Head>
                <link rel="stylesheet" href="/static/base.css"></link>
            </Head>
            <Nav></Nav>
            <BannerImage
                src='../static/bannerImageStorm.png'
                alt='Stormy Image'
                width='1704px'
            />
            <H1
               content= 'Login' 
            />
            <Warning>For development purposes, do not use your regular password. Site is unsecure.</Warning>
            <LoginContainer></LoginContainer>
            
        </Wrapper>
    )
}

export default Login;