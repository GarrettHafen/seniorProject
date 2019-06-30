import styled from 'styled-components';
import React from 'react';
import CalendarSpot from '../components/calendarSpot';

export default props => {
    const CalendarSpot = styled.div`
        display:grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 2fr;
        border: 1px solid green;
        width: calc(100%/7);
    `
    const Number = styled.div`
    `

    return (
        <CalendarSpot>
            <Number>{props.number}</Number>
        </CalendarSpot>
    )
}