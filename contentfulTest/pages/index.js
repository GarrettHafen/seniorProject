import React from 'react'
import contentful from '../helpers/contentful'
import H1 from '../components/headers';

const divStyle = {
    backgroundColor: 'grey'
}
const pStyle = {
    color: 'blue'
}
const bodyStyle = {
    backgroundColor: 'black'
}

const Home = ({ content: _}) => {
    if(!_.header){
        return <h2> No Content </h2>
    }return(
        <body style={bodyStyle}>
            <div style={divStyle} >
                {_.header && (<H1 header ={_.header}/>)}
                <img src={_.headerImage.fields.file.url} alt="This is an image"></img>
                <p style={pStyle}>{_.bodyText}</p>
                <style jsx>{`
                    img {
                        height: 400px;
                        width: 400px;
                    }
                `}</style>
            </div>
        </body>
        
    )
}

Home.getInitialProps = async () => {
    const response = await contentful.query({
        "sys.contentType.sys.id[in]": "work"
    });

    return { content: response.items[0].fields };
};

export default Home;


