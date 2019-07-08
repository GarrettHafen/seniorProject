import styled from "styled-components";
import TextImageWrapper from "../components/TextImageWrapper";
import BottomText from "../components/bottomText";
export default props => {
  const TopWrapper = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  `;
  return (
    <TopWrapper>
      <TextImageWrapper
        sideImageText={props.sideImageText}
        topImage={props.topImage}
        topImageAlt={props.topImageAlt}
      />
      <BottomText bottomText={props.bottomText} />
    </TopWrapper>
  );
};
