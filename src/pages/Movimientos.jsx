import styled from "styled-components";
import { MovimientoTemplate } from "../components/templates/MovimientoTemplate";

export function Movimientos() {
  return (
    <Container>
      <MovimientoTemplate />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
