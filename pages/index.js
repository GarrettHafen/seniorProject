import React from "react";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import Break from "../components/break";
import Head from "next/head";
import Tile from "../components/tiles";
import Instructions from "../components/instructions";
import Third from "../components/third"
import styled from "styled-components";
import H1 from "../components/header";

const logInSection = {
  width: "75%",
  height: "300px",
  display: "block",
  margin: "auto",
  textAlign: "center"
};

const middle = {
  width: "30%",
  height: "650px",
  float: "left",
  margin: "20px",
  display: "flex",
  margin: "25px",
  flexDirection: "column",
  justifyContent: "space-between"
};

const left = {
  height: "650px",
  width: "30%",
  float: "left",
  margin: "20px",
  background:
    'linear-gradient( rgba(95,52,33, 0.85), rgba(95,52,33, 0.85) ),url("../static/uprightRoad.png") no-repeat',
  borderRadius: "35px",
  color: "#E1E1DA",
  textAlign: "center",
  fontSize: "1.2em",
  boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.75)"
};

const right = {
  width: "30%",
  height: "650px",
  float: "left",
  margin: "20px",
  display: "flex",
  margin: "25px",
  flexDirection: "column",
  justifyContent: "space-between"
};

const smallSection = {
  height: "200px",
  border: "1px solid blue",
  margin: "5px"
};
const Wrapper = styled.div`
  max-width: 1440px;
`
const Bottom = styled.div`
  width: 100%
  display: flex
  flex-direction: row;
  justify-content: space-evenly
`

const Home = () => {
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
      <H1
        content="Herschel &amp; Ramona Family Ranch"
      />
      <Break src="hr-train.png" />
      <BannerImage
        src="../static/carouselMist.png"
        alt="Misty Image"
        width="1278px"
      />
      <Break src="hr-tumbleweed.png" />
      <div style={logInSection} className="logInSection">
        <Third
          header="fire watches"
          name="Fire Warnings"
          src="static/hr-fish.png"
          paragarph="Fire Saftey is very important at the ranch, click here to check the current fire information."
          url="https://www.nevadafireinfo.org/"
          color="rgba(85, 135, 146, 0.5), rgba(107, 133, 62, 0.5)"
          target="_blank"
        />
        <Third
          header="login"
          name="Login"
          src="static/hr-blank.png"
          paragarph="---"
          url="/login"
          color="rgba(109, 94, 65, 0.5), rgba(85, 135, 146, 0.5)"
          target=""
        />
        <Third
          header="weather"
          name="Check The Weather"
          src="static/hr-fish.png"
          paragarph="Heading out soon? Click here to check the weather in the area."
          url="https://www.weather.com/"
          color="rgba(85, 135, 146, 0.5),rgba(107, 133, 62, 0.5)"
          target="_blank"
        />
      </div>
      <Break src="hr-petroglyphs.png" />
      <Bottom className="bottom">
        <div style={left} className="left">
          <Instructions />
        </div>
        <div style={middle} className="middle">
          <Tile src="wildlife.js" title="Wildlife" image="horses.png" />
          <Tile src="family-history" title="Family History" image="corgi.png" />
          <Tile src="buildings" title="Buildings" image="pond.png" />
        </div>
        <div style={right} className="right">
          <Tile src="/404" title="Work Projects" image="river.png" />
          <Tile src="/404" title="Donations" image="clouds.png" />
          <Tile
            src="/404"
            title="Privacy Policy"
            image="road.png"
          />
        </div>
      </Bottom>
    </Wrapper>
  );
};
//this is a test
export default Home;
