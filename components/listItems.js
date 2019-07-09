//contain loop to populate as many ListItem as we need
import React from "react";
import styled from "styled-components";

export default props => {
  const ListItems = styled.a`
    display: flex;
    flex-direction: ${props.row};
    width: 55%;
    margin: 25px auto;
    background: ${props.bgColor};
    border-radius: 4px;
    text-decoration: none;
    color: black;
  `;
  const WrapperImg = styled.div`
    width: 250px;
    height: auto;
    margin: 5px;
  `;
  const WrapperText = styled.div`
    flex-direction: column;
    width: 70%;
    margin: auto;
    text-align: ${props.textDirection};
  `;

  const ListItemName = styled.div`
    font-size: 1.5em;
    padding: 0 15px;
  `;
  const ListItemDesc = styled.div`
    font-size: 1.1em;
    padding: 15px;
  `;
  const ListItemImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
  `;

  return (
    <ListItems href={props.url}>
      <WrapperImg>
        <ListItemImg src={props.img} />
      </WrapperImg>
      <WrapperText>
        <ListItemName>{props.name}</ListItemName>
        <ListItemDesc>{props.desc}</ListItemDesc>
      </WrapperText>
    </ListItems>
  );
};
