import Swal from "sweetalert2";
import { supabase } from "../index";

export async function MostrarCategorias(p) {
  try {
    const { data } = await supabase
      .from("categorias")
      .select()
      .eq("idusuario", p.idusuario)
      .eq("tipo", p.tipo)
      .order("id", { ascending: false });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function InsertarCategorias(p) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .insert(p)
      .select();

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Opsss...",
        text: "Ya existe un registro con " + p.descripcion,
        footer: '<a href="">Agregue una nueva descripcion</a>',
      });
    }

    if (data) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Datos guardados",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function EditarCategoria(p) {
  try {
    const { error } = await supabase
      .from("categorias")
      .update(p)
      .eq("idusuario", p.idusuario)
      .eq("id", p.id);

    if (error) {
      Swal.fire({
        position: "center",
        timer: 3000,
        icon: "error",
        title: "Opsss...",
        text: "No se pudo editar la categoría, intente mas tarde",
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function EliminarCategorias(p) {
  try {
    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", p.idusuario)
      .eq("id", p.id);

    if (error) {
      Swal.fire({
        position: "center",
        timer: 3000,
        icon: "error",
        title: "Opsss...",
        text: "No se pudo eliminar la categoría, intente mas tarde",
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function EliminarCategoriasTodas(p) {
  try {
    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", p.idusuario);

    if (error) {
      Swal.fire({
        position: "center",
        timer: 3000,
        icon: "error",
        title: "Opsss...",
        text: "No se pudieron eliminar todas las categorías, intente mas tarde",
      });
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Datos eliminados...",
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
