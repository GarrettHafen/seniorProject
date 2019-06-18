import styled from 'styled-components';

const Instructions = styled.div`
    
    height: 100%;
    width: 75%;
    margin: 0 auto;
    padding-top: 100px;
`

const Details = styled.p`
    margin-top:0;
    color: #6B853E;
    font-size: 1.1em;
`
const InstructionList = styled.ul`
    width: 80%;
`

const LI = styled.li`
    margin: 20px 0;
`

export default props => (
    <Instructions>
        <h1>Login Instructions</h1>
        <Details>Use these instructions to login. If you need help, contact an administrator</Details>
        < InstructionList>
            <LI>Click the login button above or at the top of the page</LI>
            <LI>If you need an account, please click the Sign Up button</LI>
            <LI>You will receive an email when your account has been approved</LI>
            <LI>If you have trouble, please contact an administrator</LI> 
        </InstructionList>
    </Instructions>
);