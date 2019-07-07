import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Router from "next/router";
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
} from "../lambdas/source/helpers/keys";
// import { createId } from "../lambdas/source/helpers/keys"; // IAN NOTE: here if you need it!
import * as contentfulManagement from "contentful-management";

const SignupContainer = styled.form`
  height: 300px;
  width: 75%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
`;
const LoginLabel = styled.label`
  margin: 15px;
  font-size: 1.3em;
`;
const LoginPiece = styled.input`
  height: 35px;
  border-radius: 5px;
  margin-top: 7px;
  padding-left: 5px;
`;

class CalendarForm extends Component {
  constructor(props) {
    super();
    this.state = { form: {} };

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
        //   calendarItemId: { "en-US": createId() }, // IAN NOTE: the calendar doesn't have this field currently, but I would recommend it
        //   userId: { "en-US": "get this from the token or local storage on login/signup" }, // IAN NOTE: the calendar doesn't have this field currently, but I would recommend it
        fullName: { "en-US": this.state.form.fullName },
        // IAN NOTE: these dates need to be in a 2019-07-30 type format in order for contentful to recognize as a date type.
        // should probably have a validator function that throws an alert when the user inputs the date wrong,
        // or better yet, implement one of those new-fangled date picker things
        startDate: { "en-US": this.state.form.startDate },
        endDate: { "en-US": this.state.form.endDate },
        // IAN NOTE: the following fields aren't persisting to contentful, and no errors are being thrown. Perhaps a data type mismatch? Not sure here?
        totalGuests: { "en-US": this.state.form.totalGuests },
        visitPurpose: { "en-US": this.state.form.visitPurpose }
      };
      const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
      const environment = await space.getEnvironment("master");
      const newEntry = await environment.createEntry("calendarItem", {
        fields: createInput
      });
      // automatically publish; calendarItems shouldn't be drafts
      // IAN NOTE: or should they? idk
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

  async componentDidMount() {}

  render() {
    return (
      <SignupContainer
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
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.startDate}
          name="startDate"
          type="date"
        />
        <LoginLabel>End Date: </LoginLabel>
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.endDate}
          name="endDate"
          type="date"
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
      </SignupContainer>
    );
  }
}

export default CalendarForm;
