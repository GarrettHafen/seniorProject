import styled from 'styled-components'

const HoverText = styled.a`
    text-decoration: none;
    color: #E1E1DA;
    text-transform: uppercase;    
    :hover {
        color: #6B853E;
        border-bottom: 1px solid #6B853E;
    }
`

const liStyle = {
    display: 'inline-block',
    listStyle: 'none',
    textAlign: 'center',
    padding: '5px 10px 0 15px'
}


const LI = props => (
    <li style={liStyle}><HoverText href={props.src}>{props.title}</HoverText></li>
)

export default LI;
