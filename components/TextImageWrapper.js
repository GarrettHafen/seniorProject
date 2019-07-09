import styled from "styled-components";
import SideImageText from "../components/sideImageText";
import TopImage from "../components/topImage";
export default props => {
  const TextImageWrapper = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: ${props.rowDirection};
    justify-content: center;
    align-items: center;
  `;

  return (
    <TextImageWrapper>
      <SideImageText sideImageText={props.sideImageText} />
      <TopImage src={props.topImage} alt={props.topImageAlt} />
    </TextImageWrapper>
  );
};
