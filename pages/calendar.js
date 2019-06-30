
import contentful from '../helpers/contentful';
import Nav from '../components/nav';
import BannerImage from '../components/bannerImage';
import H1 from '../components/header';
import Head from 'next/head';
import styled from 'styled-components';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <BigCalendar
                    culture='en-GB'
                    events={this.props.tasks}
                    views={['month', 'week']} />
            </div>
        );
    }
}