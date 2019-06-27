import React from 'react';
import Nav from '../components/nav';
import BannerImage from'../components/bannerImage';
import Break from '../components/break';
import Head from 'next/head';
import Tile from '../components/tiles';
import Instructions from '../components/instructions';
import Third from '../components/third'


const logInSection = {
    width: '65%',
    height: '300px',
    display: 'block',
    margin: 'auto',
    textAlign: 'center'
}

const middle = {
    width: '30%',
    height: '650px',
    float: 'left',
    margin: '25px',
    display: 'flex',
    margin: '25px',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const left = {
    height: '650px',
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
    height: '650px',
    float: 'left',
    margin: '25px',
    display: 'flex',
    margin: '25px',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const smallSection = {
    height: '200px',
    border: '1px solid blue',
    margin: '5px'
}

const Home = () => {
    return(
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
            <Break
                src='hr-train.png'
            />
            <BannerImage
                src='../static/carouselMist.png'
                alt='Misty Image'
                width='1278px'
            />
            <Break
                src='hr-tumbleweed.png'
            />
            <div style={logInSection} className="logInSection">
                <Third
                    header="fire watches"
                    name="Fire Warnings"
                    src="static/hr-fish.png"
                    paragarph="Fire Saftey is very important at the ranch, click here to check the current fire information."
                    url="https://www.nevadafireinfo.org/"
                    color="rgba(85, 135, 146, 0.5), rgba(107, 133, 62, 0.5)"
                ></Third>
                <Third
                    header="login"
                    name="Login"
                    src="static/hr-blank.png"
                    paragarph="---"
                    url="https://www.nevadafireinfo.org/"
                    color="rgba(109, 94, 65, 0.5), rgba(85, 135, 146, 0.5)"
                ></Third>
                <Third
                    header="weather"
                    name="Check The Weather"
                    src="static/hr-fish.png"
                    paragarph="Heading out soon? Click here to check the weather in the area."
                    url="https://www.nevadafireinfo.org/"
                    color="rgba(85, 135, 146, 0.5),rgba(107, 133, 62, 0.5)"
                ></Third>
            </div>
            <Break
                src='hr-petroglyphs.png'
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
                        src='familyHistory'
                        title='Family History'
                        image='corgi.png'
                    />
                    <Tile
                        src='buildings'
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