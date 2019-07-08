import styled from 'styled-components';

export default props => {

    const H1 = styled.h1`
        color: #6B853E;
        display: block;
        width: 75%;
        margin: 75px auto 25px;
        text-align: center;
        font-size: 6em;
        font-family: 'Rye', cursive;
        font-weight: lighter;


    text-shadow: 1px 1px 1px #6d5e41;  
    `

    return (
        <H1>
            {props.content}
        </H1>
    )
}

