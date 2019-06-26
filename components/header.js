import styled from 'styled-components';
import ListItem from '../components/listItem';

export default props => {

    const H1 = styled.h1`
        color: green;
        display: block;
        width: 75%;
        margin: 100px auto;
        text-align: center;
        font-size: 4em;
    `
    const Wrapper = styled.div``

    return(
        <Wrapper>
            <H1>
                {props.content}
            </H1>
            <ListItem
                row='row-reverse'
                src='../static/stormSqaure.png'
                header='header Test'
                desc='This is a long explanation of something that will be contained herein.'
            ></ListItem>
            <ListItem
                row='row'
                src='../static/stormSqaure.png'
                header='header Test'
                desc='This is a long explanation of something that will be contained herein.'
            ></ListItem>
            <ListItem
                row='row-reverse'
                src='../static/stormSqaure.png'
                header='header Test'
                desc='This is a long explanation of something that will be contained herein.'
            ></ListItem>
        </Wrapper>
    )
}