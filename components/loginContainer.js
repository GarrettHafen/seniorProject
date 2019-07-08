import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import axios from "../helpers/axios";
import Router from "next/router";

const LoginContainer = styled.form`
  height: 250px;
  width: 25%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const LoginLabel = styled.label`
  margin: 15px 0;
  font-size: 1.3em;
`;
const LoginPiece = styled.input`
  height: 35px;
  border-radius: 5px;
  margin: 0 ;
  padding-left: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: -5px;
`

class Login extends Component {
  constructor(props) {
    super();
    this.state = { form: {} };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state.form.Email);
    axios()
      .post("/signIn", {
        email: this.state.form.Email,
        password: this.state.form.Password
      })
      .then(res => {
        if (!res.data.user) {
          alert(res.data.error + " Please contact an administrator with any questions.");
        } else {
          alert("Welcome " + res.data.user.name);
          localStorage.setItem("authorized", true);
          localStorage.setItem("userID", res.data.user.userId)
          Router.push("/");
        }
      })
  }

  handleFieldChange(e) {
    var form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form: form }, () => {
      //console.log(this.state.form);
    });
  }

  componentDidMount() { }

  render() {
    return (
      <LoginContainer
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <LoginLabel>Email: </LoginLabel>
        <LoginPiece
          onChange={e => {
            this.handleFieldChange(e);
          }}
          value={this.state.form.Email}
          name="Email"
          type="text"
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
          <Button type="submit" name="Login!" />
          <Button url="/signup" name="Sign Up" type="button" />
        </ButtonWrapper>
      </LoginContainer>
    );
  }
}

export default Login;
