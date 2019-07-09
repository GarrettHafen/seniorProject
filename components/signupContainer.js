import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import axios from "../helpers/axios";
import Router from "next/router";

const SignupContainer = styled.form`
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
  margin: 0;
  padding-left: 5px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: -5px;
`;

class SignUp extends Component {
  constructor(props) {
    super();
    this.state = { form: {} };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var approvedTest = false;
    //console.log(this.state.form.Email);
    axios()
      .post("/signUp", {
        email: this.state.form.Email,
        password: this.state.form.Password,
        firstName: this.state.form.firstName,
        lastName: this.state.form.lastName,
        approved: approvedTest
      })
      .then(res => {
        if (!res.data.user) {
          alert(
            res.data.error +
              " Please contact an administrator with any questions."
          );
        } else {
          alert(
            "Thank you " +
              res.data.user.name +
              ". You will receive an email when your account has been approved." +
              " Please contact an administrator with any questions."
          );
          Router.push("/");
        }
      });
  }

  handleFieldChange(e) {
    var form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form: form }, () => {
      //console.log(this.state.form);
    });
  }

  componentDidMount() {}

  render() {
    return (
      <SignupContainer
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <LoginLabel>First Name: </LoginLabel>
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.firstName}
          name="firstName"
          type="text"
        />
        <LoginLabel>Last Name: </LoginLabel>
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.lastName}
          name="lastName"
          type="text"
        />
        <LoginLabel>Email: </LoginLabel>
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.Email}
          name="Email"
          type="email"
        />
        <LoginLabel>Password: </LoginLabel>
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.Password}
          name="Password"
          type="password"
        />
        <ButtonWrapper>
          <Button type="submit" name="Signup!" />
          <Button url="/login" name="Login" type="button" />
        </ButtonWrapper>
      </SignupContainer>
    );
  }
}

export default SignUp;
