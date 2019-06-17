

const Break = props => {
    
    const hrStyle = {
        background: `url(../static/${props.src})no-repeat top center`,
        clear: 'both',
        width: '100%',
        border: 'none',
        height: '60px',
        margin: '25px 0'
    }

    return(
        <hr style={hrStyle}></hr>
   )
}

export default Break;