import styled from "styled-components";

export default props => {
  const SingleImage = styled.img`
    width: 30%;
    border-radius: 4%;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  `;

  return <SingleImage src={props.src} alt={props.alt} />;
};
