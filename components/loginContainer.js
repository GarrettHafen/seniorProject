import React from "react";
import styled from "styled-components";
import LoginPiece from "../components/loginPiece";
import axios from "../helpers/axios";
import Button from "../components/button";

export default props => {
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
  function login() {
    console.log("testingInsideStuff");
    axios()
      .post("/signIn", { email: "", password: "" })
      .then(res => {
        console.log(res);
      });
  }

  return (
    <LoginContainer onSubmit={login}>
      <LoginLabel>UserName: </LoginLabel>
      <LoginPiece name="UserName" type="text" />
      <LoginLabel>Password: </LoginLabel>
      <LoginPiece name="Password" type="password" />
      <Button type="submit" name="Login?" />
    </LoginContainer>
  );
};
