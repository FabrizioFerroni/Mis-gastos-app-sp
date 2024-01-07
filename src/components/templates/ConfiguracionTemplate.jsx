import styled from "styled-components";
import {
  Header,
  ListaPaises,
  Selector,
  v,
  useUsuarioStore,
  ConvertirCapitalize,
  ListaGenerica,
  TemasData,
  Btnsave,
  CardEliminarData,
} from "../../index";
import { useState } from "react";
export function ConfiguracionTemplate() {
  const { datausuarios, editarTemaMonedaUser } = useUsuarioStore();
  const [select, setSelect] = useState([]);
  const [selectTema, setSelecttema] = useState([]);
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);

  // moneda
  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.countryName ? select.countryName : datausuarios.pais;
  const paisSeleccionado = `${moneda} - ${pais}`;

  // Tema
  const iconoBD = datausuarios.tema === "0" ? "🌞" : "🌚";
  const temaBD = datausuarios.tema === "0" ? "claro" : "oscuro";
  const temaInicial = selectTema.tema ? selectTema.tema : temaBD;
  const iconoInicial = selectTema.icono ? selectTema.icono : iconoBD;
  const temaSeleccionado = `${iconoInicial} - ${ConvertirCapitalize(
    temaInicial
  )}`;

  const editar = async () => {
    const temaElegido = selectTema.descripcion === "claro" ? "0" : "1";
    const p = {
      tema: temaElegido,
      moneda: moneda,
      pais: pais,
      id: datausuarios.id,
    };

    await editarTemaMonedaUser(p);
  };

  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area2">
        <h1>Ajustes</h1>
        <ContentCard>
          <span>Moneda:</span>
          <Selector
            state={stateListaPaises}
            color={v.colorselector}
            text1={paisSeleccionado}
            funcion={() => setStateListaPaises(!stateListaPaises)}
          />
          {stateListaPaises && (
            <ListaPaises
              setSelect={(p) => setSelect(p)}
              setState={() => setStateListaPaises(!stateListaPaises)}
            />
          )}
        </ContentCard>
        <ContentCard>
          <span>Tema:</span>
          <Selector
            text1={temaSeleccionado}
            color={v.colorselector}
            state={stateListaTemas}
            funcion={() => setStateListaTemas(!stateListaTemas)}
          ></Selector>
          {stateListaTemas && (
            <ListaGenerica
              data={TemasData}
              setState={() => setStateListaTemas(!stateListaTemas)}
              funcion={setSelecttema}
            />
          )}
        </ContentCard>

        <Btnsave
          titulo="Guardar"
          bgcolor={v.colorselector}
          icono={<v.iconoguardar />}
          funcion={editar}
        />

        <CardEliminarData />
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
    "area2" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 30px;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
    }
  }
`;

const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;
