import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index";

export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").insert(p).select();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const MostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase
      .from("usuarios")
      .select()
      .eq("idauth_supabase", idAuthSupabase)
      .maybeSingle();

    if (error) throw new Error("MostrarUsuario try: " + error.message);

    if (data) {
      return data;
    }
  } catch (error) {
    throw new Error("MostrarUsuario catch: " + error.message);
  }
};

export const EditarTemaMonedaUser = async (p) => {
  try {
    // const idAuthSupabase = await ObtenerIdAuthSupabase();

    const { error } = await supabase.from("usuarios").update(p).eq("id", p.id);

    if (error) throw new Error("EditarTemaMonedaUser try: " + error.message);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Datos modificados correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    throw new Error("EditarTemaMonedaUser catch: " + error.message);
  }
};
