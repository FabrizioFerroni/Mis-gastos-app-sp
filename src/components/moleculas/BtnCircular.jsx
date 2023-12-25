import styled from "styled-components";
export function BtnCircular({
  icono,
  width,
  height,
  bgcolor,
  textColor,
  fontsize,
  x,
  y,
}) {
  return (
    <Container
      bgcolor={bgcolor}
      textColor={textColor}
      width={width}
      height={height}
      fontsize={fontsize}
      y={y}
      x={x}
    >
      <span>{icono}</span>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(${(props) => props.x}) translateY(${(props) => props.y});
  span {
    color: ${(props) => props.textColor};
    font-size: ${(props) => props.fontsize};
  }
`;
