import React from 'react';
import contentful from '../helpers/contentful';
import styled from 'styled-components';


const Names = ({content: _}) => {
    console.log(_.listViewItem);

    return(
        <div>this is a div</div>
    )
}
//see abbout.js in naegeli. the filter component

Names.getInitialProps = async ({ asPath }) => {
    const res = await contentful.query({
        content_type: "listView",
        "fields.pageUrl": asPath.split("/")[1]

    });

    /* const links = await contentful.query({
        "sys.id": "3Pc5p5fUehgdgFNIegZpwn"
    }); deal with later */

    return {
        content: res.items[0].fields,
        //navLinks: links.items[0].fields.imageWithLink

    };
};
//this is a test

export default Names;