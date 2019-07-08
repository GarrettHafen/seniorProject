import styled from "styled-components";

export default props => {
  const SideImageText = styled.div`
    width: 40%;
    margin: 0 30px;
    max-height: 500px;
    overflow: scroll;
  `;
  return <SideImageText>{props.sideImageText}</SideImageText>;
};
