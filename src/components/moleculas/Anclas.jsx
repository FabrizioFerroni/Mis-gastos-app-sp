import styled from "styled-components";
import { Icono } from "../atomos/Icono";

export function Anclas({ titulo, bgcolor, icono, to }) {
  return (
    <Container bgcolor={bgcolor}>
      <Icono>{icono}</Icono>
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="btn"
      >
        {titulo}
      </a>
    </Container>
  );
}
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  gap: 10px;
  background-color: initial;
  z-index: 2;
  .btn {
    background-color: ${(props) => props.bgcolor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em black;
    transition: 0.2s;
    white-space: 1px;
    color: black;
    text-decoration: none;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
`;
