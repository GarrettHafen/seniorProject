import React from 'react';
import styled from 'styled-components';
import LoginPiece from '../components/loginPiece';

import Button from '../components/button';

export default props => {

const LoginContainer = styled.form`
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

    return(
        <LoginContainer >
            <LoginLabel>UserName: </LoginLabel>
            <LoginPiece
                name="UserName"
                type="text"
            >
            </LoginPiece>
            <LoginLabel>Password: </LoginLabel>
            <LoginPiece
                name="Password"
                type="password"
            >
            </LoginPiece>
            <Button
                url="/"
                name="Login"
            />
        </LoginContainer>
    )

}