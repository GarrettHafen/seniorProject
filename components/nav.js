import LI from './liElement';
import styled from 'styled-components'
const Nav = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 100px;
    background-color: #6D5E41;
    box-shadow: -10px 10px 10px -5px rgba(0, 0, 0, 0.35), 10px 10px 10px -5px rgba(0, 0, 0, 0.35);
    display:flex;
    flex-direction: row-reverse
`

const UL = styled.ul`
    width: 60%;
    height: 50px;
    text-align: ;left;
    padding-top: 11px;
    margin: 0 0 0 15px;
`

const logoStyle = {
    height: '200px',
    width: '200px',
    filter: ('dropShadow:(0px 0px 99px rgba(255, 255, 255, 1))'),
    position: 'relative',
    top: '-70px'
}



export default props => (
    <Nav>
        <UL> 
            <LI 
                src='gallery.js'
                title="Gallery"
            />
            <LI
                src='things-to-do'
                title="Things to Do"
            />
            <LI
                src='family-history'
                title="Family History"
            />
            <LI
                src='calendar.js'
                title="Calendar"
            />
            <LI
                src='login.js'
                title="Login"
            />
        </UL>
        <a href="/">
            <img style={logoStyle} src="../static/logo2.png"></img>
            {/* see logo.png for without white */}
        </a>
    </Nav>
)
