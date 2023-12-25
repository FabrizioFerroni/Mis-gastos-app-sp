import styled from "styled-components";
import {
  BtnCerrar,
  ConvertirCapitalize,
  Device,
  InputBuscadorLista,
} from "../../index";
import iso from "iso-country-currency";
import { useState } from "react";

export function ListaPaises({ setSelect, setState }) {
  const isocodigos = iso.getAllISOCodes();
  console.log("Códigos de paises: ", isocodigos);
  const [dataResult, setDataResult] = useState([]);
  //   countryName: "España", currency: "EUR", symbol: "€"
  function seleccionar(p) {
    setSelect(p);
    setState(false);
  }
  function buscar(e) {
    let filtrado = isocodigos.filter((item) => {
      return item.countryName === ConvertirCapitalize(e.target.value);
    });
    setDataResult(filtrado);
  }
  return (
    <Container>
      <header className="header">
        <span>Busca tu pais</span>
        {/* <span className="close" onClick={setState}>
          {<v.iconocerrar />}
        </span> */}
        <BtnCerrar funcion={setState} />
      </header>
      <InputBuscadorLista onChange={buscar} placeholder="Buscar..." />
      {dataResult.length > 0 &&
        dataResult.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>{item.countryName}</span>
              {/* <span>{item.currency}</span> */}
              <span>{item.symbol}</span>
            </ItemContainer>
          );
        })}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgtotal};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }
  transition: all 0.3s;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: inherit !important;
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
