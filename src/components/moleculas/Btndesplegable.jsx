import styled from "styled-components";
import { v } from "../../index";

export function Btndesplegable({ text, bgColor, textColor, funcion }) {
  return (
    <Container $bgColor={bgColor} $textColor={textColor} onClick={funcion}>
      <span className="containerText">
        <v.iconoFlechabajo />
        <h6>{text}</h6>
      </span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-size: 23px;
  font-weight: 500;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: rgba(77, 77, 77, 0.5);
  }
`;
