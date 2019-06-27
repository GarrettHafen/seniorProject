import React, { Component } from 'react';
import styled from 'styled-components';


export default class ListItem extends Component{
    
    constructor() {
        super()
        this.state = {
            loading:true
        }
    }

    componentDidMount(){
        var state = this
        Contentful.query({content_type: "listViewElement", "fileds.pageUrl": aspath.split("/")[1]}).then((response) =>{
            state.setState({loading: false, content: response.items[0].fields})
        }) 
    }

    const ListItem = styled.div`
        width: 65%;
        height: 300px;
        margin: 25px auto;
        display: flex;
        flex-direction: ${props.row};

    `
    const ListLeft = styled.div`
        height: 100%;
        width: 25%;
        background-color:green;
    `
    const ListRight = styled.div`
        border: 1px solid black;
        height: 100%;
        width: 75%;
        max-width:1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    `

    const ListImg = styled.img`
        height: auto;
        max-width: 300px;
        margin: 7px auto 0;
        display: block;

    `

    const ListHeader = styled.h3`
    
    `
    const ListDesc = styled.p`
    
    `

    return (
        <ListItem>
            <ListLeft>
                <ListImg src={props.src}></ListImg>
            </ListLeft>
            <ListRight>
                <ListHeader>{props.header}</ListHeader>
                <ListDesc>{props.desc}</ListDesc>
            </ListRight>

        </ListItem>
    )
}


}