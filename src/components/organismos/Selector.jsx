import styled from "styled-components";
import { v } from "../../index";

export function Selector({ color, state, funcion, text1, text2 }) {
  return (
    <Container color={color} onClick={funcion}>
      <div>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <span className={state ? "open" : "close"}>
        <v.iconoFlechabajo />
      </span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  gap: 10px;
  padding: 10px;
  transition: 0.3s;
  font-weight: 600;

  .open {
    transition: 0.3s;
    transform: rotate(180deg);
  }

  .close {
    transition: 0.3s;
    transform: rotate(0deg);
  }

  &:hover {
    background-color: ${(props) => props.color};
    color: #000000;
  }
`;
