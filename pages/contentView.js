import React, { Component } from "react";
import contentful from "../helpers/contentful";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import Head from "next/head";
import H1 from "../components/header";
import styled from "styled-components";
import Break from "../components/break";
import TopWrapper from "../components/topWrapper";
import BottomWrapper from "../components/bottomWrapper";

const Wrapper = styled.div`
    max-width: 1440px
    margin:auto;
`;
const ContentViewItemWrapper = styled.div``;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const contentView = await contentful.query({
      content_type: "contentView",
      "fields.pageUrl": window.location.href.split("/")[window.location.href.split("/").length - 2]
    });
    const Security = localStorage.getItem("authorized");
    if (!Security) {
      alert("Please Sign In");
      Router.push("/");
    }
    const arrayLength = contentView.items[0].fields.contentViewSection.length;
    const contentArray = [];
    //console.log(contentView.items[0].fields.contentViewSection[0]);
    for (let i = 0; i < arrayLength; i++) {
      const holder = i;
      contentArray.push(contentView.items[0].fields.contentViewSection[holder]);
    }
    //    console.log(contentView.items[0].fields.contentViewSection[0].fields.topImage.fields.file.url);
    this.setState({
      loading: false,
      content: contentView.items[0].fields,
      contentViewSections: contentArray
    });
  }
  render() {
    return (
      <main>
        {!this.state.loading ? (
          <Wrapper>
            <Head>
              <link rel="stylesheet" href="/static/base.css" />
              <link
                href="https://fonts.googleapis.com/css?family=Rye&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Nav />
            <BannerImage
              src="../static/bannerImageStorm.png"
              alt="Stormy Image"
              width="100%"
            />
            {this.state.content.contentViewHeader && (
              <H1 content={this.state.content.contentViewHeader} />
            )}
            <Break src="hr-horse.png" />
            {this.state.contentViewSections &&
              this.state.contentViewSections.map(
                (contentViewSection, index) => {
                  //console.log("index = " + index);
                  if (index % 2 === 0) {
                    return (
                      <ContentViewItemWrapper>
                        <TopWrapper
                          sideImageText={
                            this.state.content.contentViewSection[index].fields
                              .sideImageText
                          }
                          topImage={
                            this.state.content.contentViewSection[index].fields
                              .topImage.fields.file.url
                          }
                          topImageAlt={
                            this.state.content.contentViewSection[index].fields
                              .topImageAlt
                          }
                          bottomText={
                            this.state.content.contentViewSection[index].fields
                              .bottomText
                          }
                          rowDirection="row-reverse"
                        />
                        <Break src="hr-tumbleweed.png" />
                        <BottomWrapper
                          SingleImages={
                            this.state.content.contentViewSection[index].fields
                              .singleImages
                          }
                        />
                        <Break src="hr-fishy.png" />
                      </ContentViewItemWrapper>
                    );
                  } else {
                    return (
                      <ContentViewItemWrapper>
                        <TopWrapper
                          sideImageText={
                            this.state.content.contentViewSection[index].fields
                              .sideImageText
                          }
                          topImage={
                            this.state.content.contentViewSection[index].fields
                              .topImage.fields.file.url
                          }
                          topImageAlt={
                            this.state.content.contentViewSection[index].fields
                              .topImageAlt
                          }
                          bottomText={
                            this.state.content.contentViewSection[index].fields
                              .bottomText
                          }
                          rowDirection="row"
                        />
                        <Break src="hr-tumbleweed.png" />
                        <BottomWrapper
                          SingleImages={
                            this.state.content.contentViewSection[index].fields
                              .singleImages
                          }
                        />
                        <Break src="hr-fishy.png" />
                      </ContentViewItemWrapper>
                    );
                  }
                }
              )}
          </Wrapper>
        ) : (
            <div />
          )}
      </main>
    );
  }
}
