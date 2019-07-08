import React from 'react';
import contentful from '../helpers/contentful';
import Nav from '../components/nav';
import BannerImage from '../components/bannerImage';
import H1 from '../components/header';
import Head from 'next/head';
import styled from 'styled-components';
import SignupContainer from '../components/signupContainer';
import Break from '../components/break';


const Wrapper = styled.div`
    width: 100%;
    
`
const Warning = styled.div`
    width: 100%;
    margin: 15px auto;
    color: red;
    text-align: center;
`

const Signup = () => {
    return (
        <Wrapper>
            <Head>
                <link rel="stylesheet" href="/static/base.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Rye&display=swap" rel="stylesheet" />
            </Head>
            <Nav></Nav>
            <BannerImage
                src='../static/bannerImageStorm.png'
                alt='Stormy Image'
                width='100%'
            />
            <H1
                content='Sign Up'
            />
            <Break src="hr-tumbleweed.png" />
            <Warning>For development purposes, do not use your regular password. Site is unsecure.</Warning>
            <SignupContainer></SignupContainer>
            <Break src="hr-train.png" />
        </Wrapper>
    )
}

export default Signup;