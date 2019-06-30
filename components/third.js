import styled from 'styled-components';
import Button from '../components/button';

export default props => {
    const Third = styled.div `
        width: 25%;
        border-radius:4px;
        height: 100%;
        float: left;
        margin: 0 15px;
        padding: 0 25px;
        background: linear-gradient( ${props.color} );

    `
    const Img = styled.img`
        margin-top: 45px;
    `
    const H3 = styled.h3`
        margin-top: 5px;
        text-transform: uppercase;
    `
    return( 
        
        <Third>
            <Img src={props.src}></Img>
            <H3>{props.header}</H3>
            <p>{props.paragarph}</p>
            <Button
                name={props.name}
                url={props.url}
            ></Button>
        </Third>
    )
}