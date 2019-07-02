import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import myEventsList from "../helpers/events";
import styled from "styled-components";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import H1 from "../components/header";
import Head from "next/head";
//import "!css-loader!react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const Wrapper = styled.div`
  height: 2000px;
`;
const CalWrapper = styled.div`
  width: 75%;
  display: block;
  margin: auto;
`;

const MyCalendar = props => (
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
    <H1 content="Calendar" />
    <CalWrapper>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        defaultDate={new Date()}
        views={["month"]}
      />
    </CalWrapper>
  </Wrapper>
);

export default MyCalendar;
