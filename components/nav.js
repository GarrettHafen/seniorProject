import LI from '../components/listElement';
const navStyle = {
    width: '100%',
    height: '50px',
    position: 'absolute',
    top: '100px',
    backgroundColor: '#6D5E41',
    boxShadow: '-10px 10px 10px -5px rgba(0, 0, 0, 0.35), 10px 10px 10px -5px rgba(0, 0, 0, 0.35',
    display:'flex',
    flexDirection:'row-reverse'
}
const ulStyle = {
    width: '60%',
    height: '50px',
    textAlign: 'left',
    paddingTop: '11px',
    margin: '0 0 0 15px'
}

const logoStyle = {
    height: '200px',
    width: '200px',
    filter: ('dropShadow:(0px 0px 99px rgba(255, 255, 255, 1))'),
    position: 'relative',
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
        </ul>
        <a href="index.html">
            <img style={logoStyle} src="../static/logo2.png"></img>
            {/* see logo.png for without white */}
        </a>
    </nav>
)

export default Nav;