import styled from 'styled-components';


export default props => {
    const Tile = styled.a`
    background: url('../static/${props.image}');
    display: block;
    margin: 5px;
    height: 200px;
    text-align: center;
    border-radius: 35px;
    text-decoration: none;
    color: #E1E1DA;
    text-transform: uppercase; 
    color: #6B853E;   
    :hover {
        color: #E1E1DA;
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('../static/${props.image}');
    }
`
   
    return(
        <Tile href={props.src} >{props.title}</Tile>

        )
   }