import styled from "styled-components";
import {
  CategoriaTemplate,
  Lottieanimacion,
  useCategoriasStore,
  useOperaciones,
  useUsuarioStore,
  SpinnerLoader,
} from "../index";
import { useQuery } from "@tanstack/react-query";

import vaciorojo from "../assets/vaciorojo.json";
import vacioverde from "../assets/vacioverde.json";

export function Categorias() {
  const { tipo } = useOperaciones();
  const { datausuarios } = useUsuarioStore();
  const { datacategoria, mostrarCategorias } = useCategoriasStore();
  useQuery({
    queryKey: [
      "mostrar categorias",
      `Usuario: ${datausuarios.id}, tipo: ${tipo}`,
    ],
    queryFn: () =>
      mostrarCategorias({ idusuario: datausuarios.id, tipo: tipo }),
  });

  return <CategoriaTemplate data={datacategoria}></CategoriaTemplate>;
}
