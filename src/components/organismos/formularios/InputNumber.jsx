import styled from "styled-components";

export function InputNumber({
  style,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,
  icono,
}) {
  const handleKeyDown = (event) => {
    // Permitir solo números, punto, coma, flecha hacia arriba y flecha hacia abajo
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "ArrowUp",
      "ArrowDown",
    ];

    // Permitir números y los caracteres específicos
    if (!(/[0-9.,]/.test(event.key) || allowedKeys.includes(event.key))) {
      event.preventDefault();
    }
  };

  return (
    <Container>
      <ContainerTextoicono>
        <span>{icono}</span>
        <input
          step="0.01"
          min="0"
          style={style}
          onChange={onChange}
          type="number"
          onKeyDown={handleKeyDown}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register("monto", {
            required: true,
            Number: true,
            pattern: /^[0-9]*([.,][0-9]{0,2})?$/,
          })}
        ></input>
      </ContainerTextoicono>

      {errors.valor?.type === "required" && <p>Campo requerido</p>}
      {errors.valor?.type === "Number" && <p>Ingrese un número valido</p>}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  input {
    background: ${({ theme }) => theme.bgtotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;
    &:focus {
      border-bottom: none;
    }
    &::placeholder {
      color: #c8c8c8;
    }
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Puede ser necesario para algunas versiones de Safari */
  }
  p {
    color: #ff6d00;
    font-size: 12px;
  }
`;
const ContainerTextoicono = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
`;
