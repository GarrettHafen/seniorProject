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

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        const listView = await contentful.query({ 'content_type': "listView", "fields.pageUrl": window.location.href.split('/').pop() });

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
        };

        this.setState({ loading: false, content: listView.items[0].fields, listViewItems: listArray })
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
                        </Head>
                        <Nav />
                        <BannerImage
                            src="../static/bannerImageStorm.png"
                            alt="Stormy Image"
                            width="1704px"
                        />
                        {this.state.content.listViewHeader && <H1 content={this.state.content.listViewHeader} />}

                        {this.state.listViewItems && this.state.listViewItems.map((listViewItem, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <ListItems
                                        name={this.state.content.listViewItem[index].fields.listViewElementName}
                                        desc={this.state.content.listViewItem[index].fields.listViewElementDescription}
                                        img={this.state.content.listViewItem[index].fields.listViewElementImage.fields.file.url}
                                        bgColor="#6B853E"
                                        row="row-reverse"
                                        textDirection="right"
                                    />
                                )
                            } else {
                                return (
                                    <ListItems
                                        name={this.state.content.listViewItem[index].fields.listViewElementName}
                                        desc={this.state.content.listViewItem[index].fields.listViewElementDescription}
                                        img={this.state.content.listViewItem[index].fields.listViewElementImage.fields.file.url}
                                        bgColor="#558792"
                                        row="row"
                                        textDirection="left"
                                    />
                                )
                            }
                        })}

                    </Wrapper >
                ) : <div></div>}
            </main>
        );
    }
};



