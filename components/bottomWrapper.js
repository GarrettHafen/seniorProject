import styled from "styled-components";
import SingleImage from "../components/singleImage";

export default props => {
  const BottomWrapper = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  //images need to be passed through in the form of an array.
  // can you grab the alt from the description?
  return (
    <BottomWrapper>
      <SingleImage
        src={props.SingleImages[0].fields.file.url}
        alt={props.SingleImages[0].fields.description}
      />
      <SingleImage
        src={props.SingleImages[1].fields.file.url}
        alt={props.SingleImages[1].fields.file.description}
      />
      <SingleImage
        src={props.SingleImages[2].fields.file.url}
        alt={props.SingleImages[0].fields.file.description}
      />
    </BottomWrapper>
  );
};
