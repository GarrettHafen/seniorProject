//how to get a list of all users to compare the sign in attempt to

import React from "react";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import H1 from "../components/header";
import Head from "next/head";
import styled from "styled-components";
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

const Error404 = () => {
    return (
        <Wrapper>
            <Head>
                <link rel="stylesheet" href="/static/base.css" />
            </Head>
            <Nav />
            <BannerImage
                src="../static/bannerImageStorm.png"
                alt="Stormy Image"
                width="100%"
            />
            <Break src="hr-petroglyphs.png" />
            <H1 content="Coming Soon" />
            <Break src="hr-trees.png" />
        </Wrapper>
    );
};

export default Error404;
