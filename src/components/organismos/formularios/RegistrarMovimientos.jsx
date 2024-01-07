import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Switch } from "@mui/material";
import {
  useMovimientosStore,
  useCategoriasStore,
  useOperaciones,
  ListaGenerica,
  Selector,
  InputNumber,
  InputText,
  useCuentaStore,
  v,
  Btnsave,
  BtnCerrar,
  ConvertirCapitalize,
  Device,
} from "../../../index";
import { useEffect } from "react";

export function RegistrarMovimientos({ setState, state, dataSelect, accion }) {
  const { cuentaItemSelect } = useCuentaStore();
  const { datacategoria, categoriaItemSelect, selectCategoria } =
    useCategoriasStore();
  const { tipo } = useOperaciones();
  const { insertarMovimientos } = useMovimientosStore();

  const [estado, setEstado] = useState(true);
  const [ignorar, setIgnorar] = useState(false);
  const [stateCategorias, setStateCategorias] = useState(false);

  console.log(categoriaItemSelect);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const insertar = async (data) => {
    let estadoText = 0;
    if (estado) {
      estadoText = 1;
    }

    const p = {
      tipo: tipo,
      estado: estadoText,
      fecha: data.fecha,
      descripcion: data.descripcion,
      idcuenta: cuentaItemSelect.id,
      valor: parseFloat(data.monto),
      idcategoria: categoriaItemSelect.id,
    };

    try {
      await insertarMovimientos(p);
      setState();
    } catch (err) {
      alert(err);
    }
  };
  function estadoControl(e) {
    setEstado(e.target.checked);
  }

  function seleccionar(item) {
    selectCategoria(item);
    // setState();
    setStateCategorias(!stateCategorias);
  }

  return (
    <Container onClick={setState}>
      <div
        className="sub-contenedor"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="encabezado">
          <div>
            <h1>Nuevo {tipo == "i" ? "ingreso" : "gasto"}</h1>
          </div>
          <div>
            <span onClick={close}>{<v.iconocerrar />}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(insertar)} className="formulario">
          <section>
            <div>
              <label>Monto:</label>
              <div>
                <InputNumber
                  defaultValue={dataSelect.valor}
                  register={register}
                  placeholder="Ingrese monto"
                  errors={errors}
                  icono={<v.iconocalculadora />}
                />
              </div>
            </div>
            <ContainerFuepagado>
              <span>{<v.iconocheck />}</span>
              <label>Fue pagado:</label>
              <Switch
                onChange={estadoControl}
                checked={estado}
                color="warning"
              />
            </ContainerFuepagado>
            <ContainerFecha>
              <label>Fecha:</label>

              <input
                type="date"
                {...register("fecha", { required: true })}
              ></input>
              {errors.fecha?.type === "required" && (
                <p>El campo es requerido</p>
              )}
            </ContainerFecha>
            <div>
              <label>Descripción:</label>
              <InputText
                defaultValue={dataSelect.descripcion}
                register={register}
                placeholder="Ingrese una descripcion"
                errors={errors}
                style={{ textTransform: "capitalize" }}
              />
            </div>
            <ContainerCategoria>
              <label>Categoria:</label>

              <MySelector onClick={() => setStateCategorias(!stateCategorias)}>
                <div className="textSelect">
                  <span>{categoriaItemSelect?.icono}</span>
                  <span>{categoriaItemSelect?.descripcion}</span>
                </div>
                <span
                  className={() =>
                    setStateCategorias(!stateCategorias) ? "open" : "close"
                  }
                >
                  <v.iconoFlechabajo />
                </span>
              </MySelector>

              {stateCategorias && (
                <ListaGenerica2>
                  <section className="contentClose">
                    {/* <BtnCerrar
                      funcion={() => setStateCategorias(!stateCategorias)}
                    /> */}
                    <Cerrar
                      onClick={() => setStateCategorias(!stateCategorias)}
                    >
                      {<v.iconocerrar />}
                    </Cerrar>
                  </section>
                  <section className="contentItems">
                    {datacategoria.map((item, index) => {
                      return (
                        <ItemContainer2
                          key={index}
                          onClick={() => seleccionar(item)}
                        >
                          <span>{item.icono}</span>
                          <span>{ConvertirCapitalize(item.descripcion)}</span>
                        </ItemContainer2>
                      );
                    })}
                  </section>
                </ListaGenerica2>
              )}
            </ContainerCategoria>
          </section>

          <div className="contentBtnsave">
            <Btnsave
              titulo="Guardar"
              bgcolor="#DAC1FF"
              icono={<v.iconoguardar />}
              className="btnsave"
            />
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  transition: 0.5s;
  top: 0;
  left: 0;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  color: black;

  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;
    color: ${({ theme }) => theme.text};
    label {
      font-weight: 550;
    }
    .encabezado {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-items: center;
      margin-bottom: 20px;
      h1 {
        font-size: 30px;
        font-weight: 700;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      .contentBtnsave {
        padding-top: 20px;
        display: flex;
        justify-content: center;
      }
      section {
        padding-top: 20px;
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
  @keyframes scale-up-bottom {
    0% {
      transform: scale(0.5);
      transform-origin: center bottom;
    }
    100% {
      transform: scale(1);
      transform-origin: center bottom;
    }
  }
`;
/* const ItemContainer = styled.section`
  gap: 10px;
  width: 50%;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.color};
  }
`; */
const ContainerFuepagado = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ContainerCategoria = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;
const ContainerFecha = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  input {
    appearance: none;
    color: ${({ theme }) => theme.text};
    font-family: “Helvetica”, arial, sans-serif;
    font-size: 17px;
    border: none;
    background: ${({ theme }) => theme.bgtotal};
    padding: 4px;
    display: inline-block;
    visibility: visible;
    width: 140px;
    cursor: pointer;
    &:focus {
      border-radius: 10px;

      outline: 0;
    }
  }
`;

const ListaGenerica2 = styled.div`
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

const ItemContainer2 = styled.div`
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

const MySelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid grey;
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
    color: #e14e19;
    border: 2px solid #e14e19;
  }

  .textSelect {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;

const Cerrar = styled.span`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;

  &:hover {
    color: ${() => v.colorselector};
  }
`;
