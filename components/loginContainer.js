import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import axios from "../helpers/axios";

const LoginContainer = styled.form`
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
        <Button type="submit" name="Login!" />
      </LoginContainer>
    );
  }
}

export default Login;
