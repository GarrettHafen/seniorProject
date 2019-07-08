import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Router from "next/router";
import {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
} from "../lambdas/source/helpers/keys";
import { createId } from "../lambdas/source/helpers/crypto"; // IAN NOTE: here if you need it!
import * as contentfulManagement from "contentful-management";
import DatePicker from "react-datepicker";
import "!css-loader!../node_modules/react-datepicker/dist/react-datepicker.css";

const CalendarFormContainer = styled.form`
  height: 450px;
  width: 25%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: left;
`;
const LoginLabel = styled.label`
  margin: 15px 0 5px;
  font-size: 1.3em;
`;
const LoginPiece = styled.input`
  height: 35px;
  border-radius: 5px;
  margin: 0 ;
  padding-left: 5px;
`;

class CalendarForm extends Component {
    constructor(props) {
        super();
        this.state = { form: {}, startDate: new Date(), endDate: new Date() };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();

        var managementClient = contentfulManagement.createClient({
            // This is the access token for this space. Normally you get the token in the Contentful web app
            accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
        });

        // create the calendarItem object
        try {
            // contentful is all about locality, so when creating a new item, everything we do will be in 'en-US' by default
            const createInput = {
                calendarItemId: { "en-US": createId() },
                userId: { "en-US": localStorage.getItem("userID") },
                fullName: { "en-US": this.state.form.fullName },
                startDate: { "en-US": this.state.startDate },
                endDate: { "en-US": this.state.endDate },
                // IAN NOTE: the following fields aren't persisting to contentful, and no errors are being thrown. Perhaps a data type mismatch? Not sure here?
                totalGuests: { "en-US": this.state.form.numGuests },
                visitPurpose: { "en-US": this.state.form.purpose }
            };
            const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
            const environment = await space.getEnvironment("master");
            const newEntry = await environment.createEntry("calendarItem", {
                fields: createInput
            });
            // automatically publish; calendarItems shouldn't be drafts
            await newEntry.publish();

            // alert the user
            alert(
                "Thank You " +
                this.state.form.fullName +
                ". Your event has been created."
            );
            Router.push("/calendar");
            // IAN NOTE: should reload the page or something here so that the data displayed on the calendar is up to date
        } catch (e) {
            // IAN NOTE: you normally do NOT want to print out system errors for users to read, as these errors
            // can contain sensitive information that could be used to hack the system or steal an identity.
            // but this is here for easy debugging purposes
            alert(`Something went wrong: ${e}`);
        }
    }

    handleFieldChange(e) {
        var form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form }, () => {
            //console.log(this.state.form);
        });
    }
    handleChange = ({ startDate, endDate }) => {
        startDate = startDate || this.state.startDate;
        endDate = endDate || this.state.endDate;
        this.setState({ startDate, endDate });
    };

    handleChangeStart = startDate => this.handleChange({ startDate });
    handleChangeEnd = endDate => this.handleChange({ endDate });

    async componentDidMount() { }

    render() {
        return (
            <CalendarFormContainer
                onSubmit={e => {
                    this.handleSubmit(e);
                }}
            >
                <LoginLabel>Full Name: </LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.fullName}
                    name="fullName"
                    type="text"
                />
                <LoginLabel>Start Date: </LoginLabel>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />
                <LoginLabel>End Date: </LoginLabel>
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    minDate={this.state.startDate}
                />
                <LoginLabel>Expected Number of Guests</LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.numGuests}
                    name="numGuests"
                    type="number"
                />
                <LoginLabel>Purpose: </LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.purpose}
                    name="purpose"
                    type="text"
                />
                <Button type="submit" name="Sign Up" />
            </CalendarFormContainer>
        );
    }
}

export default CalendarForm;
