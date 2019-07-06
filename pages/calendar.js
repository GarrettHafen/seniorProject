import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import contentful from '../helpers/contentful';
import styled from "styled-components";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import H1 from "../components/header";
import Head from "next/head";
import "!css-loader!../node_modules/react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const Wrapper = styled.div`
  height: 2000px;
`;
const CalWrapper = styled.div`
  width: 75%;
  display: block;
  margin: auto;
`;
const myEventsList = [
  {
    title: "test",
    start: new Date(),
    end: new Date(),
    allDay: true
  },
  {
    title: "longTest",
    start: new Date(2019, 6, 8),
    end: new Date(2019, 6, 11),
    allDay: true
  },
  {
    title: "anotherTest",
    start: new Date(2019, 6, 10),
    end: new Date(2019, 6, 10),
    allDay: true
  }
];

const Home = props => {
  //console.log(_.calendarItems[0].fields.fullName);
  return (
    <Wrapper>
      <Head>
        <link rel="stylesheet" href="/static/base.css" />
        <link href="/static/calendar.css" rel="stylesheet" />
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
  )
}

Home.getInitialProps = async ({ asPath }) => {
  const res = await contentful.query({
    content_type: "calendar",
    "fields.pageUrl": asPath.split("/")[1]

  });

  return {
    content: res.items[0].fields
  };
};
export default Home;
