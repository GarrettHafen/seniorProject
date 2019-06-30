import styled from 'styled-components';
import ListItem from '../components/listItem';

export default props => {

    const H1 = styled.h1`
        color: green;
        display: block;
        width: 75%;
        margin: 100px auto;
        text-align: center;
        font-size: 4em;
    `

    return(
        <H1>
            {props.content}
        </H1>      
    )
}

