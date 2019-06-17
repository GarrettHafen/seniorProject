import React from 'react'
import contentful from '../helpers/contentful'
import H1 from '../components/headers'

const Body = ({content: _}) => {
    if (!_.header) {
        return <h2> No Content </h2>;
    } 

    return(
        <div >
            {_.header && (<H1 header={_.header} />)}
            <img src={_.headerImage.fields.file.url} alt="This is an image"></img>
            <p>{_.bodyText}</p>
            <style jsx>{`
                        h1 {
                            color: green;
                            font-size: 3em;
                        }
                        p {
                            color: red;
                        }
                        img {
                            height: 400px;
                            width: 400px;
                        }
                    `}</style>
        </div>
    )
}

Body.getInitialProps = async () => {
    const response = await contentful.query({
        "sys.contentType.sys.id[in]": "work"
        
    });
    console.log(content)
    return { content: response.items[0].fields };
};

export default Body;