import styled from "styled-components";
import { v, useUsuarioStore } from "../../index";

export function CardTotales({ total, title, icono }) {
  const { datausuarios } = useUsuarioStore();

  return (
    <Container>
      <div className="totalPadre">
        <div className="contentTextos">
          <section>
            <span className="title">{title}</span>
            <b>{<v.iconoFlechabajo />}</b>
          </section>
          <span className="total">
            {datausuarios.moneda} {total}
          </span>
        </div>

        <div className="contentIcono">
          <span>{icono}</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px;
  margin: 10px;
  border-radius: 15px;

  .totalPadre {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .contentTextos {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 14px;
      }

      .total {
        font-size: 22px;
        font-weight: 500;
      }

      section {
        display: flex;
        gap: 10px;
        display: flex;
        align-items: center;
      }
    }

    .contentIcono {
      background-color: #53b257;
      min-width: 50px;
      min-height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #ffffff;
        font-size: 25px;
      }
    }
  }
`;
