import styled from 'styled-components';

export default props => {

    const ListItem = styled.div`
        width: 65%;
        height: 300px;
        margin: 25px auto;
        display: flex;
        flex-direction: ${props.row};

    `
    const ListLeft = styled.div`
        height: 100%;
        width: 25%;
    `
    const ListRight = styled.div`
        border: 1px solid black;
        height: 100%;
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    `

    const ListImg = styled.img`
        height: 285px;
        width: 285px;
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
                <ListImg src={props.src}></ListImg>
            </ListLeft>
            <ListRight>
                <ListHeader>{props.header}</ListHeader>
                <ListDesc>{props.desc}</ListDesc>
            </ListRight>

        </ListItem>
    )
}