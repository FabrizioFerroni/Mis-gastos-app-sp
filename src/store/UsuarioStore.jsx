import { create } from "zustand";
import { EditarTemaMonedaUser, MostrarUsuarios } from "../index";

export const useUsuarioStore = create((set, get) => ({
  idusuario: 0,
  datausuarios: [],

  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ datausuarios: response });
    if (response) {
      set({ idusuario: response.id });
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
