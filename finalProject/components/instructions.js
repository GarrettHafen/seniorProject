import styled from 'styled-components';

const Instructions = styled.div``

const InstructionList = styled.ul``

const LI = styled.li`
    color:pink;
`

export default props => (
    <Instructions>
        <h1>Login Instructions</h1>
        <p>Use these instructions to login. If you need help, contact an administrator</p>
        < InstructionList>
            <LI>Sign Up</LI>
            <LI>Don't use your normal password</LI>
            <LI>Wait for an email</LI>
        </InstructionList>
    </Instructions>
);