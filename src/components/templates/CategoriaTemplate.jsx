import styled from "styled-components";
import {
  Header,
  ContentFiltros,
  Btndesplegable,
  useOperaciones,
  ListaMenuDesplegable,
  DataDesplegableTipo,
  v,
  Btnfiltro,
  TablaCategorias,
  RegistrarCategorias,
  Lottieanimacion,
} from "../../index";

import vaciorojo from "../../assets/vaciorojo.json";
import vacioverde from "../../assets/vacioverde.json";
import { useState } from "react";

export function CategoriaTemplate({ data }) {
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [state, setState] = useState(false);
  const [stateTipo, setStateTipo] = useState(false);
  const { colorCategoria, bgCategoria, tituloBtnDes, setTipo, tipo } =
    useOperaciones();

  function cambiarTipo(tipo) {
    setTipo(tipo);
    setStateTipo(!stateTipo);
    setState(false);
  }

  function closeDesplegable() {
    setStateTipo(false);
    setState(false);
  }

  function openTipo() {
    setStateTipo(!stateTipo);
    setState(false);
  }

  function openUser() {
    setState(!state);
    setStateTipo(false);
  }

  function nuevoRegistro() {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect([]);
  }

  return (
    <Container onClick={closeDesplegable}>
      {openRegistro && (
        <RegistrarCategorias
          dataSelect={dataSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )}

      <header className="header">
        <Header stateConfig={{ state: state, setState: openUser }} />
      </header>
      <section className="tipo">
        <ContentFiltros>
          <div onClick={(e) => e.stopPropagation()}>
            <Btndesplegable
              bgColor={bgCategoria}
              textColor={colorCategoria}
              text={tituloBtnDes}
              funcion={openTipo}
            />
            {stateTipo && (
              <ListaMenuDesplegable
                data={DataDesplegableTipo}
                top="112%"
                funcion={(data) => cambiarTipo(data)}
              />
            )}
          </div>
        </ContentFiltros>
      </section>
      <section className="area2">
        <ContentFiltro>
          <Btnfiltro
            funcion={nuevoRegistro}
            bgcolor={bgCategoria}
            textcolor={colorCategoria}
            icono={<v.agregar />}
          />
        </ContentFiltro>
      </section>
      <section className="main">
        {data.length < 1 && (
          <Lottieanimacion
            alto="300"
            ancho="300"
            animacion={tipo == "i" ? vacioverde : vaciorojo}
          />
        )}
        {data.length > 0 && (
          <TablaCategorias
            data={data}
            SetopenRegistro={SetopenRegistro}
            setdataSelect={setdataSelect}
            setAccion={setAccion}
          />
        )}
      </section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "tipo" 100px
    "area2" 50px
    "main" auto;

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }

  .tipo {
    grid-area: tipo;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;

const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
