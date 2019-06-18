import LI from'../components/listElement';



const BannerImage = props => {
    
    const bannerImageStyle = {
        display: 'block',
        margin: 'auto',
        width: `${props.width}`,
        textAlign: 'center',
        borderRadius: '50px'
    }

    return(
        <img style={bannerImageStyle} src={props.src} alt={props.alt} ></img>
    )
}

export default BannerImage;