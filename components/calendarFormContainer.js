import React, { Component } from "react";
import styled from 'styled-components';
import Button from "../components/button";
import axios from "../helpers/axios";
import Router from "next/router";
import {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
} from "../lambdas/source/helpers/keys";
import * as contentfulDelivery from "contentful";
import * as contentfulManagement from "contentful-management";

const SignupContainer = styled.form`
height: 300px;
width: 75%;
margin: 50px auto;
display: flex;
flex-direction: row;
`
const LoginLabel = styled.label`
margin: 15px;
font-size: 1.3em;
`
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
        const deliveryClient = contentfulDelivery.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: CONTENTFUL_SPACE_ID,
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: CONTENTFUL_DELIVERY_ACCESS_TOKEN
        });
        // instantiate the managementClient (client used for creating and otherwise managing content)
        // we will use this to create and publish an entry for the the user
        var managementClient = contentfulManagement.createClient({
            // This is the access token for this space. Normally you get the token in the Contentful web app
            accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
        });
        // get calendar entry


        const client = contentfulManagement.createClient({
            accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
        })
        let test;
        client.getSpace(CONTENTFUL_SPACE_ID)
            .then((space) => space.getEntry('2knXpvXfF1fzuVe8qlnQVt'))
            .then((test) => console.log("this is the first test: " + test))
            .catch(console.error)
        // contentful is all about locality, so everything we do will be in 'en-US' by default


        // create the user object
        const createInput = {
            fullName: this.state.form.fullName,
            startDate: this.state.form.startDate,
            endDate: this.state.form.endDate,
            totalGuests: this.state.form.numGuests,
            visitPurpose: this.state.form.purpose
        };
        const space = await managementClient.getSpace(CONTENTFUL_SPACE_ID);
        const environment = await space.getEnvironment("master");
        const newEntry = await environment.createEntry("calendarItem", {
            fields: createInput
        });
        // automatically publish; users shouldn't be drafts
        await newEntry.publish()
        //need to publish calendar too
        // need to push new entry to calendar.fields.calendaritems.en-us
        //await entry.publish();

        //alert the user
        alert("Thank You " + this.state.form.fullName + ". Your event has been created.");
        Router.push("/calendar");
    }

    handleFieldChange(e) {
        var form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form }, () => {
            //console.log(this.state.form);
        });
    }

    async componentDidMount() {
        const deliveryClient = contentfulDelivery.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: CONTENTFUL_SPACE_ID,
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: CONTENTFUL_DELIVERY_ACCESS_TOKEN
        });
        // instantiate the managementClient (client used for creating and otherwise managing content)
        // we will use this to create and publish an entry for the the user
        var managementClient = contentfulManagement.createClient({
            // This is the access token for this space. Normally you get the token in the Contentful web app
            accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
        });
        // get calendar entry


        const client = contentfulManagement.createClient({
            accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
        })
        let test;
        client.getSpace(CONTENTFUL_SPACE_ID)
            .then((space) => space.getEntry('2knXpvXfF1fzuVe8qlnQVt'))
            .then((test) => console.log("this is the first test: " + test))
            .catch(console.error)
        // contentful is all about locality, so everything we do will be in 'en-US' by default



    }


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
                >
                </LoginPiece>
                <LoginLabel>Start Date: </LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.startDate}
                    name="startDate"
                    type="date"
                ></LoginPiece>
                <LoginLabel>End Date: </LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.endDate}
                    name="endDate"
                    type="date"
                >
                </LoginPiece>
                <LoginLabel>Expected Number of Guests</LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.numGuests}
                    name="numGuests"
                    type="number"
                >
                </LoginPiece>
                <LoginLabel>Purpose: </LoginLabel>
                <LoginPiece
                    onChange={e => {
                        this.handleFieldChange(e);
                    }}
                    value={this.state.form.purpose}
                    name="purpose"
                    type="text"
                >
                </LoginPiece>
                <Button
                    type="submit"
                    name="Sign Up"
                />
            </SignupContainer>
        );
    }
}

export default CalendarForm;