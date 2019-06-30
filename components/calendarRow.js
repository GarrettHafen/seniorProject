import styled from 'styled-components';
import React from 'react';
import CalendarSpot from '../components/calendarSpot';

export default props => {
    const CalendarRow = styled.div`
        width: 75%;
        height: 150px;
        border: 1px solid black;
        margin: auto;
        display: flex; 
        flex-direction: row;
        justify-content: space-around;
        padding: 1px;
    `
    const Wrapper = styled.div``
    return(
        <Wrapper>
            <CalendarRow style="height: 40px;" class="weekDays">
                <CalendarSpot
                    number='Sunday'
                />
                <CalendarSpot
                    number='Monday'
                />
                <CalendarSpot
                    number='Tuesday'
                />
                <CalendarSpot
                    number='Wednesday'
                />
                <CalendarSpot
                    number='Thursday'
                />
                <CalendarSpot
                    number='Friday'
                />
                <CalendarSpot
                    number='Saturday'
                />
            </CalendarRow>
            <CalendarRow class="oneThroughSeven">
                <CalendarSpot
                    number='1'
                />
                <CalendarSpot
                    number='2'
                />
                <CalendarSpot
                    number='3'
                />
                <CalendarSpot
                    number='4'
                />
                <CalendarSpot
                    number='5'
                />
                <CalendarSpot
                    number='6'
                />
                <CalendarSpot
                    number='7'
                />
            </CalendarRow>
            <CalendarRow class="eightThrough14">
                <CalendarSpot
                    number='8'
                />
                <CalendarSpot
                    number='9'
                />
                <CalendarSpot
                    number='10'
                />
                <CalendarSpot
                    number='11'
                />
                <CalendarSpot
                    number='12'
                />
                <CalendarSpot
                    number='13'
                />
                <CalendarSpot
                    number='14'
                />
            </CalendarRow>
            <CalendarRow class="fifteenThrough21">
                <CalendarSpot
                    number='15'
                />
                <CalendarSpot
                    number='16'
                />
                <CalendarSpot
                    number='17'
                />
                <CalendarSpot
                    number='18'
                />
                <CalendarSpot
                    number='19'
                />
                <CalendarSpot
                    number='20'
                />
                <CalendarSpot
                    number='21'
                />
            </CalendarRow>
            <CalendarRow class="twentyTwoThrough28">
                <CalendarSpot
                    number='22'
                />
                <CalendarSpot
                    number='23'
                />
                <CalendarSpot
                    number='24'
                />
                <CalendarSpot
                    number='25'
                />
                <CalendarSpot
                    number='26'
                />
                <CalendarSpot
                    number='27'
                />
                <CalendarSpot
                    number='28'
                />
            </CalendarRow>
            <CalendarRow class="twentyNineThroughSeven">
                <CalendarSpot
                    number='29'
                />
                <CalendarSpot
                    number='30'
                />
                <CalendarSpot
                    number='31'
                />
                <CalendarSpot
                    number='1'
                />
                <CalendarSpot
                    number='2'
                />
                <CalendarSpot
                    number='3'
                />
                <CalendarSpot
                    number='4'
                />
            </CalendarRow>
        </Wrapper>
    )
}