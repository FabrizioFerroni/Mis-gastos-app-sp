import styled from "styled-components";

export const ColorContent = styled.div`
  justify-content: center;
  min-height: ${(p) => p.$alto};
  width: ${(p) => p.$ancho};
  display: block;
  background-color: ${(p) => p.$color};
  border-radius: 50%;
  text-align: center;
`;
