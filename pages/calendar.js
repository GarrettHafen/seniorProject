import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import Router from "next/router";
import contentful from "../helpers/contentful";
import styled from "styled-components";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import H1 from "../components/header";
import Head from "next/head";
//import "!css-loader!../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import Break from "../components/break";
import CalendarForm from "../components/calendarFormContainer";

//----------toDo-------
// import their name from login

const localizer = momentLocalizer(moment);
const Wrapper = styled.div`
  height: 2000px;
`;
const CalWrapper = styled.div`
  width: 75%;
  display: block;
  margin: auto;
`;
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const Security = localStorage.getItem("authorized");
    if (!Security) {
      alert("Please Sign In");
      Router.push("/");
    }

    const calendarItems = await contentful.query({
      content_type: "calendarItem"
    });

    const calendarItemsArray = calendarItems.items;
    const myEventsList = [];
    for (let i = 0; i < calendarItemsArray.length; i++) {
      myEventsList.push({
        title: calendarItemsArray[i].fields.fullName,
        startDate: new Date(calendarItemsArray[i].fields.startDate),
        endDate: new Date(calendarItemsArray[i].fields.endDate),
        allDay: true
      });
    }
    this.setState({
      loading: false,
      // content: calendarContent.items[0].fields, // IAN NOTE: didn't know if this was needed
      eventsList: myEventsList
    });
  }
  render() {
    return (
      <main>
        {!this.state.loading ? (
          <Wrapper>
            <Head>
              <link rel="stylesheet" href="/static/base.css" />
              <link href="/static/calendar.css" rel="stylesheet" />
              <link href="/static/calendarPicker.css" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Rye&display=swap" rel="stylesheet" />
            </Head>
            <Nav />
            <BannerImage
              src="../static/bannerImageStorm.png"
              alt="Stormy Image"
              width="100%"
            />
            <H1 content="Calendar" />
            <CalendarForm />
            <Break src="hr-tumbleweed.png" />
            <CalWrapper>
              <Calendar
                localizer={localizer}
                events={this.state.eventsList}
                startAccessor="startDate"
                endAccessor="endDate"
                defaultView={Views.MONTH}
                defaultDate={new Date()}
                views={["month"]}
              />
            </CalWrapper>

            <Break src="hr-fourwheeler.png" />
          </Wrapper>
        ) : (
            <div />
          )}
      </main>
    );
  }
}
//  {
//     title: "test",
//     start: new Date(),
//     end: new Date(),
//     allDay: true
//   },
