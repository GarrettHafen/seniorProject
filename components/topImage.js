import styled from "styled-components";

export default props => {
  const TopImage = styled.img`
    max-width: 500px;
    border-radius: 4%;
  `;
  return <TopImage src={props.src} alt={props.topImageAlt} />;
};
