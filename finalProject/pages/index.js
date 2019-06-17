import React from 'react';
import Nav from '../components/nav';
import BannerImage from'../components/bannerImage';
import Break from '../components/break';
import Head from 'next/head';

const bodyStyle = {
    background: 'url(static/bg.png)',
    backgroundRepeat: 'repeat',
    height: '10000px'
}

const logInSection = {
    width: '65%',
    height: '300px',
    display: 'block',
    margin: 'auto',
    border: '1px solid black'
}

const middle = {
    width: '30%',
    height: '600px',
    float: 'left',
    margin: '25px'
}

const left = {
    height: '600px',
    width: '30%',
    border: '1px solid black',
    float: 'left',
    margin: '25px'
}

const right = {
    width: '30%',
    height: '600px',
    float: 'left',
    margin: '25px'
}

const smallSection = {
    height: '200px',
    border: '1px solid blue'
}

const Home = () => {
    return(
        <div style={bodyStyle}>
            <Head>
                <link rel="stylesheet" href="/static/base.css"></link>
            </Head>
            <Nav></Nav>
            <BannerImage
                src='../static/bannerImageStorm.png'
                alt='Stormy Image'
                width='1704px'
            />
            <Break
                src='hr-fourwheeler.png'
            />
            <BannerImage
                src='../static/carouselMist.png'
                alt='Misty Image'
                width='1278px'
            />
            <Break
                src='hr-fishy.png'
            />
            <div style={logInSection} className="logInSection"></div>
            <div  className="bottom">
                <div style={left} className="left"></div>
                <div style={middle} className="middle">
                    <div style={smallSection} className="wildLife"></div>
                    <div style={smallSection} className="familyHistory"></div>
                    <div style={smallSection} className="buildings"></div>
                </div>
                <div style={right} className="right">
                    <div style={smallSection} className="workProjects"></div>
                    <div style={smallSection} className="donations"></div>
                    <div style={smallSection} className="privacyPolicy"></div>
                </div>
            </div>
        </div>
    )
}
//this is a test
export default Home;