import LI from '../components/listElement';
const navStyle = {
    width: '100%',
    height: '50px',
    position: 'absolute',
    top: '100px',
    backgroundColor: '#6D5E41',
    boxShadow: '0px 10px 10px - 5px rgba(0, 0, 0, 0.75)'

}
const ulStyle = {
    width: '70%',
    height: '50px',
    textAlign: 'right',
    paddingTop: '11px',
    margin: '0',
    boxShadow: '0px 10px 10px - 5px rgba(0, 0, 0, 0.75)'
}

const logoStyle = {
    height: '200px',
    width: '200px',
    filter: ('dropShadow:(0px 0px 99px rgba(255, 255, 255, 1))')
}

const linkStyle = {
    position: 'absolute',
    left: '450px',
    top: '-70px'
}


const Nav = props => (
    <nav style={navStyle}>
        <ul style={ulStyle}>
            <LI 
                src='gallery.js'
                title="Gallery"
            />
            <LI
                src='thingsDo.js'
                title="Things to Do"
            />
            <LI
                src='history.js'
                title="History"
            />
            <LI
                src='calendar.js'
                title="Calendar"
            />
            <LI
                src='login.js'
                title="Login"
            />
        </ul>
        <a style={linkStyle} href="index.html">
            <img style={logoStyle} src="../static/logo2.png"></img>
            {/* see logo.png for without white */}
        </a>
    </nav>
)

export default Nav;