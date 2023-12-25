import styled from "styled-components";
import { BtnCerrar, ConvertirCapitalize, Device } from "../../index";
export function ListaGenerica({ data, setState, funcion }) {
  function seleccionar(item) {
    funcion(item);
    setState();
  }

  return (
    <Container>
      <section className="contentClose">
        <BtnCerrar funcion={setState} />
      </section>
      <section className="contentItems">
        {data.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>{item.icono}</span> -
              <span>{ConvertirCapitalize(item.descripcion)}</span>
            </ItemContainer>
          );
        })}
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  bottom: 88%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;

  @media ${() => Device.tablet} {
    width: 400px;
  }
`;

const ItemContainer = styled.section`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #303030;
  }
`;
