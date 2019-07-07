import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import contentful from '../helpers/contentful';
import styled from "styled-components";
import Nav from "../components/nav";
import BannerImage from "../components/bannerImage";
import H1 from "../components/header";
import Head from "next/head";
import "!css-loader!../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import Break from '../components/break'
import CalendarForm from '../components/calendarFormContainer'


//----------toDo-------
// import their name from login

const localizer = momentLocalizer(moment); // or globalizeLocalizer
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
    super()
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    const calendarContent = await contentful.query({ 'content_type': "calendar" });

    const Security = localStorage.getItem("authorized");
    if (!Security) {
      alert("Please Sign In");
      Router.push("/");
    }
    const calendarItemsArray = [];
    for (let i = 0; i < calendarContent.items[0].fields.calendarItems.length; i++) {
      calendarItemsArray.push(calendarContent.items[0].fields.calendarItems[i]).fields;
    };

    const myEventsList = [
    ]
    for (let i = 0; i < calendarItemsArray.length; i++) {
      myEventsList.push(
        {
          title: calendarItemsArray[i].fields.fullName,
          startDate: new Date(calendarItemsArray[i].fields.startDate),
          endDate: new Date(calendarItemsArray[i].fields.endDate),
          allDay: true
        }
      )
    }

    this.setState({ loading: false, content: calendarContent.items[0].fields, eventsList: myEventsList })
    // console.log(calendarContent.items[0].fields.calendarItems[0])
    // console.log(calendarContent.items[0])
    // console.log(calendarItemsArray)
    //console.log(myEventsList)
  }
  render() {
    return (
      <main>
        {!this.state.loading ? (
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
            <CalendarForm>

            </CalendarForm>
            <Break
              src="hr-tumbleweed.png"
            />
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

            <Break
              src="hr-fourwheeler.png"
            />


          </Wrapper>
        ) : <div></div>}
      </main>
    )
  }
}
//  {
//     title: "test",
//     start: new Date(),
//     end: new Date(),
//     allDay: true
//   },