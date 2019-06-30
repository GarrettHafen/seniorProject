import styled from 'styled-components';
import ListImg from '../components/listImg';
import ListHeader from '../components/listHeader';
import ListDesc from './listItems';

const ListItem = props => {

    
    const ListLeft = styled.div`
        height: 100%;
        width: 25%;
        background-color:green;
    `
    const ListRight = styled.div`
        border: 1px solid black;
        height: 100%;
        width: 75%;
        max-width:1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    `

    const ListImg = styled.img`
        height: auto;
        max-width: 300px;
        margin: 7px auto 0;
        display: block;

    `

    const ListHeader = styled.h3`
    
    `
    const ListDesc = styled.p`
    
    `

    return(
        <ListItem>
            <ListLeft>
                <ListImg/>
            </ListLeft>
            <ListRight>
                <ListHeader>{props.header}</ListHeader>
                <ListDesc>{props.desc}</ListDesc>
            </ListRight>

        </ListItem>
    )
}

