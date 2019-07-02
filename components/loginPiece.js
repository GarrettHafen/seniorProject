import React from "react";
import styled from "styled-components";

export default props => {
  const LoginPiece = styled.input`
    height: 35px;
    border-radius: 5px;
    margin-top: 7px;
    padding-left: 5px;
  `;
  return (
    <LoginPiece type={props.type} name={props.name} placeholder={props.name} />
  );
};
