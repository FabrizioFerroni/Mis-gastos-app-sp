import { create } from "zustand";
import { v } from "../index";

export const useOperaciones = create((set) => ({
  tipo: "i",
  tituloBtnDes: "Categoria ingresos",
  tituloBtnDesMovimientos: "Ingresos",
  colorCategoria: () => v.colorIngresos,
  bgCategoria: () => v.colorbgingresos,
  año: null,
  mes: null,
  setMes: (p) => {
    set({ mes: p });
  },
  setAño: (p) => {
    set({ año: p });
  },
  setTipo: (p) => {
    set({ tipo: p.tipo });
    set({
      tituloBtnDes: p.text,
      tituloBtnDesMovimientos: p.text,
    });
    set({
      colorCategoria: p.color,
    });
    set({
      bgCategoria: p.bgcolor,
    });
  },
}));
