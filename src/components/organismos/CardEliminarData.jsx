import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { v } from "../../styles/variables";
import { Device, useCategoriasStore, useUsuarioStore } from "../../index";
import Swal from "sweetalert2";

export function CardEliminarData() {
  const { eliminarCategoriaTodas } = useCategoriasStore();
  const { datausuarios } = useUsuarioStore();

  const eliminar = async () => {
    Swal.fire({
      title: "¿Estás seguro(a)?",
      text: "Una vez eliminado, ¡no podrá recuperar estos registros!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const p = {
          idusuario: datausuarios.id,
        };
        await eliminarCategoriaTodas(p);
      }
    });
  };

  return (
    <Container>
      <h2>Resetear todo</h2>
      <span>
        <ul>
          <b>ADVERTENCIA:</b>
          <li>
            Esta acción es irreversible, una vez ejecutada se eliminaran todos
            tus registros de movimientos incluso las categorias registradas.
          </li>
          <li>Se reseteara tambien los saldos acumulados en tus cuentas.</li>
        </ul>
        {/* <br /> */}
      </span>
      <Btnsave
        titulo="Borrar datos"
        bgcolor="rgba(247, 92, 92, 0.87)"
        funcion={eliminar}
      />
      <div className="contentImg">
        <img src={v.logo} />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(255, 99, 99, 0.87);
  height: 100%;
  background: rgb(42, 1, 1);
  background: linear-gradient(
    18deg,
    rgba(252, 69, 69, 0.12) 9%,
    rgba(252, 69, 69, 0.3) 100%
  );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  gap: 20px;

  h2 {
    color: rgba(252, 69, 69, 0.72);
  }

  span,
  ul,
  li {
    color: rgba(251, 82, 82, 0.67);
    font-size: 100%;
  }

  ul {
    padding: 0px 5px;
  }

  li {
    margin-left: 10%;
  }

  @media ${() => Device.tablet} {
    span,
    ul,
    li {
      color: rgba(251, 82, 82, 0.67);
      font-size: 110%;
    }
    ul {
      padding: 0px 25px;
    }

    li {
      margin-left: 5%;
    }
  }

  .contentImg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5%; //20%
    opacity: 0.18;
    margin: 30px;
    img {
      width: 100%;
      animation: flotar 1.7s ease-in-out infinite alternate;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
