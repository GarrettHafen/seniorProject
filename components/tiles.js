import styled from 'styled-components';


export default props => {
    const Tile = styled.a`
    background: url('../static/${props.image}') no-repeat;
    display: block;
    margin: 5px;
    height: 200px;
    text-align: center;
    border-radius: 35px;
    text-decoration: none;
    color: #E1E1DA;
    text-transform: uppercase; 
    font-size: 2.5em;
    text-shadow: 2px 2px 12px black, 2px 2px 12px black;  
    :hover {
        color: #E1E1DA;
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('../static/${props.image}');
    }
`

    const TileInside = styled.div`
        padding-top: 15%;
    `
   
    return(
        <Tile href={props.src} >
            <TileInside>{props.title}</TileInside>
        </Tile>

        )
   }