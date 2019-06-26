import React from 'react';
import Nav from '../components/nav';
import BannerImage from'../components/bannerImage';
import Head from 'next/head';
import H1 from '../components/header';


const Home = () => {
    return (
        <div>
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
                content='Test Header'
            ></H1>
            
        </div>
    )
}
//this is a test
export default Home;