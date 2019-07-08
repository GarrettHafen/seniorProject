//how to get a list of all users to compare the sign in attempt to

import React from "react";
import contentful from "../helpers/contentful";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import H1 from "../components/header";
import Head from "next/head";
import styled from "styled-components";
import LoginContainerForm from "../components/loginContainer";
import Button from "../components/button";
import Break from "../components/break"

const Wrapper = styled.div`
  width: 100%;
`;
const Warning = styled.div`
  width: 100%;
  margin: auto;
  color: red;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  width: 25%;
  margin: auto;
`

const Login = () => {
  return (
    <Wrapper>
      <Head>
        <link rel="stylesheet" href="/static/base.css" />
        <link href="https://fonts.googleapis.com/css?family=Rye&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <BannerImage
        src="../static/bannerImageStorm.png"
        alt="Stormy Image"
        width="100%"
      />
      <H1 content="Login" />
      <Break src="hr-fourwheeler.png" />
      <LoginContainerForm />
      <Break src="hr-horse.png" />
    </Wrapper>
  );
};

export default Login;
