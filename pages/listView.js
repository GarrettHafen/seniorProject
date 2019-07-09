import React, { Component } from "react";
import contentful from "../helpers/contentful";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import Head from "next/head";
import H1 from "../components/header";
import ListItems from "../components/listItems";
import Router from "next/router";
import styled from "styled-components";
import Break from "../components/break";

const Wrapper = styled.div``;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const listView = await contentful.query({
      content_type: "listView",
      "fields.pageUrl": window.location.href.split("/").pop()
    });

    const Security = localStorage.getItem("authorized");
    if (!Security) {
      alert("Please Sign In");
      Router.push("/");
    }
    const arrayLength = listView.items[0].fields.listViewItem.length;
    const listArray = [];

    for (let i = 0; i < listView.items[0].fields.listViewItem.length; i++) {
      const holder = i;
      listArray.push(listView.items[0].fields.listViewItem[holder]);
    }

    this.setState({
      loading: false,
      content: listView.items[0].fields,
      listViewItems: listArray
    });
    //console.log(window.location.href.split('/').pop())
    //console.log(listView.items)
    //console.log(listArray)
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
            {this.state.content.listViewHeader && (
              <H1 content={this.state.content.listViewHeader} />
            )}
            <Break src="hr-horse.png" />

            {this.state.listViewItems &&
              this.state.listViewItems.map((listViewItem, index) => {
                if (index % 2 === 0) {
                  return (
                    <ListItems
                      name={
                        this.state.content.listViewItem[index].fields
                          .listViewElementName
                      }
                      desc={
                        this.state.content.listViewItem[index].fields
                          .listViewElementDescription
                      }
                      img={
                        this.state.content.listViewItem[index].fields
                          .listViewElementImage.fields.file.url
                      }
                      bgColor="rgba(107, 133, 62,.45)"
                      row="row-reverse"
                      textDirection="right"
                      url={
                        this.state.content.listViewItem[index].fields.pageUrl
                      }
                    />
                  );
                  //if mod 5, then insert a break. only if you hvae more than like 15 objects.
                } else {
                  return (
                    <ListItems
                      name={
                        this.state.content.listViewItem[index].fields
                          .listViewElementName
                      }
                      desc={
                        this.state.content.listViewItem[index].fields
                          .listViewElementDescription
                      }
                      img={
                        this.state.content.listViewItem[index].fields
                          .listViewElementImage.fields.file.url
                      }
                      bgColor="rgba(85, 135, 146,.45)"
                      row="row"
                      textDirection="left"
                      url={
                        this.state.content.listViewItem[index].fields.pageUrl
                      }
                    />
                  );
                }
              })}
            <Break src="hr-train.png" />
          </Wrapper>
        ) : (
          <div />
        )}
      </main>
    );
  }
}
