import styled from 'styled-components';

export default props => {

    const Button = styled.button`
        border: 1px solid #6D5E41;
        border-radius: 8px;
        font-size: 1em;   
        background-color: #6D5E41;
        color: #E1E1DA;
        cursor: pointer;
        &:focus {outline:0;}
    `
    const A = styled.a`
        text-decoration: none;   

    `
    return(
        <A href={props.url} target="_blank"><Button>{props.name}</Button></A>

    )
}