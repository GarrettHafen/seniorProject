import React from 'react';
import Nav from '../components/nav';
import BannerImage from'../components/bannerImage';
import Break from '../components/break';
import Head from 'next/head';
import Tile from '../components/tiles';
import Instructions from '../components/instructions'

const bodyStyle = {
    height: '100%'
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
    float: 'left',
    margin: '25px',
    background: 'linear-gradient( rgba(95,52,33, 0.85), rgba(95,52,33, 0.85) ),url("../static/uprightRoad.png") no-repeat',
    borderRadius: '35px',
    color: '#E1E1DA',
    textAlign: 'center',
    fontSize: '1.2em'
}

const right = {
    width: '30%',
    height: '600px',
    float: 'left',
    margin: '25px'
}

const smallSection = {
    height: '200px',
    border: '1px solid blue',
    margin: '5px'
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
            <Break
                src='hr-horse.png'
            />
            <div  className="bottom">
                <div style={left} className="left">
                    
                    <Instructions
                    
                    />
                </div>
                <div style={middle} className="middle">
                    <Tile
                        src='wildlife.js'
                        title='Wildlife'
                        image="horses.png"
                    />
                    <Tile
                        src='familyHistory.js'
                        title='Family History'
                        image='corgi.png'
                    />
                    <Tile
                        src='buildings.js'
                        title='Buildings'
                        image='pond.png'
                    />
                </div>
                <div style={right} className="right">
                    <Tile
                        src='workProjects.js'
                        title='Work Projects'
                        image='river.png'
                    /><Tile
                        src='donations.js'
                        title='Donations'
                        image='clouds.png'
                    /><Tile
                        src='privacyPolicy.js'
                        title='Privacy Policy'
                        image='road.png'
                    />
                </div>
            </div>
        </div>
    )
}
//this is a test
export default Home;