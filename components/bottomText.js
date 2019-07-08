import styled from "styled-components";

export default props => {
  const BottomText = styled.div`
    margin: 20px;
  `;
  return <BottomText>{props.bottomText}</BottomText>;
};
