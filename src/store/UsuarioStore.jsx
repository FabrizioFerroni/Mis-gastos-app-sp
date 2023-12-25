import { create } from "zustand";
import { EditarTemaMonedaUser, MostrarUsuarios } from "../index";

export const useUsuarioStore = create((set, get) => ({
  datausuarios: [],

  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ datausuarios: response });
    if (response) {
      return response;
    } else {
      return [];
    }
  },

  editarTemaMonedaUser: async (p) => {
    await EditarTemaMonedaUser(p);
    const { mostrarUsuarios } = get();

    set(mostrarUsuarios);
  },
}));
