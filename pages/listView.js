import React, { Component } from "react";
import contentful from "../helpers/contentful";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import Head from "next/head";
import H1 from "../components/header";
import ListItems from "../components/listItems";
import styled from "styled-components";
import Router from "next/router";

const Wrapper = styled.div``;

const Security = localStorage.getItem("authorized");

if (!Security) {
    alert("Please Sign In");
    Router.push("/");
}

const Home = ({ content: _ }) => {
    return (
        <Wrapper>
            <Head>
                <link rel="stylesheet" href="/static/base.css" />
            </Head>
            <Nav />
            <BannerImage
                src="../static/bannerImageStorm.png"
                alt="Stormy Image"
                width="1704px"
            />
            {_.listViewHeader && <H1 content={_.listViewHeader} />}
            <ListItems
                name={_.listViewItem[0].fields.listViewElementName}
                desc={_.listViewItem[0].fields.listViewElementDescription}
                img={_.listViewItem[0].fields.listViewElementImage.fields.file.url}
                bgColor="#6B853E"
                row="row"
                textDirection="left"
            />
            <ListItems
                name={_.listViewItem[1].fields.listViewElementName}
                desc={_.listViewItem[1].fields.listViewElementDescription}
                img={_.listViewItem[1].fields.listViewElementImage.fields.file.url}
                bgColor="#6D5E41"
                row="row-reverse"
                textDirection="right"
            />
            <ListItems
                name={_.listViewItem[2].fields.listViewElementName}
                desc={_.listViewItem[2].fields.listViewElementDescription}
                img={_.listViewItem[2].fields.listViewElementImage.fields.file.url}
                bgColor="#558792"
                row="row"
                textDirection="left"
            />
        </Wrapper>
    );
};

Home.getInitialProps = async ({ asPath }) => {
    const res = await contentful.query({
        content_type: "listView",
        "fields.pageUrl": asPath.split("/")[1]
    });
    const Security = localStorage.getItem("authorized");

    if (!Security) {
        alert("Please Sign In");
        Router.push("/");
    }
    return {
        content: res.items[0].fields
    };

};
export default Home;
