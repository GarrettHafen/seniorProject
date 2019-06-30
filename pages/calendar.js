import React from 'react';
import contentful from '../helpers/contentful';
import Nav from '../components/nav';
import BannerImage from '../components/bannerImage';
import H1 from '../components/header';
import Head from 'next/head';
import styled from 'styled-components';
import CalendarRow from '../components/calendarRow';

const Wrapper = styled.div`
    width: 100%;
`
//https://github.com/intljusticemission/react-big-calendar/blob/master/examples/demos/selectable.js big calendar, click day to add event. has navigation options
const Calendar = () => {
    return (
        <Wrapper>
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
                content='Calendar'
            />

            <CalendarRow></CalendarRow>

        </Wrapper>
    )
}

export default Calendar;