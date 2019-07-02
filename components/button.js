import styled from "styled-components";
import { prototype } from "stream";

export default props => {
  const Button = styled.button`
    border: 1px solid #6d5e41;
    border-radius: 8px;
    font-size: 1em;
    background-color: #6d5e41;
    color: #e1e1da;
    cursor: pointer;
    margin: 15px;
    &:focus {
      outline: 0;
    }
  `;
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <A href={props.url} target={props.target}>
      <Button {...props}>{props.name}</Button>
    </A>
  );
};
