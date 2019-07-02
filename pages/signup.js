//how to get a list of all users to compare the sign up attempt to

import React from 'react';
import contentful from '../helpers/contentful';
import Nav from '../components/nav';
import BannerImage from '../components/bannerImage';
import H1 from '../components/header';
import Head from 'next/head';
import styled from 'styled-components';
import SignupContainer from '../components/signupContainer';
import Button from '../components/button';

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    
`
const Warning = styled.div`
    width: 100%;
    margin: auto;
    color: red;
    text-align: center;
`

const Signup = () => {
    return (
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
                content='Sign Up'
            />
            <Warning>For development purposes, do not use your regular password. Site is unsecure.</Warning>
            <SignupContainer></SignupContainer>
            <Wrapper>
                <Button
                    url="/login"
                    name="Login"
                ></Button>
            </Wrapper>
        </Wrapper>
    )
}

export default Signup;