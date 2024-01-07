import { create } from "zustand";
import {
  EditarCategoria,
  EliminarCategorias,
  EliminarCategoriasTodas,
  InsertarCategorias,
  MostrarCategorias,
} from "../index";

export const useCategoriasStore = create((set, get) => ({
  datacategoria: [],
  categoriaItemSelect: [],
  parametros: {},
  mostrarCategorias: async (p) => {
    console.log(p);
    const response = await MostrarCategorias(p);
    set({ parametros: p });
    set({ datacategoria: response });
    set({ categoriaItemSelect: response[0] });
    return response;
  },
  selectCategoria: (p) => {
    set({ categoriaItemSelect: p });
  },
  insertarCategoria: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias } = get();
    const { parametros } = get();
    set(mostrarCategorias(parametros));
  },
  editarCategoria: async (p) => {
    await EditarCategoria(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  eliminarCategoria: async (p) => {
    await EliminarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  eliminarCategoriaTodas: async (p) => {
    await EliminarCategoriasTodas(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
}));
