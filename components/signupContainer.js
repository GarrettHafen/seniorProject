import React from 'react';
import styled from 'styled-components';
import LoginPiece from './loginPiece';

import Button from './button';

export default props => {

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

    return (
        <SignupContainer >
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
            <LoginLabel>Email: </LoginLabel>
            <LoginPiece
                name="Email"
                type="email"
            >
            </LoginPiece>
            <Button
                url="/"
                name="Sign Up"
            />
        </SignupContainer>
    )

}