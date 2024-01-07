import { Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  ProtectedRoute,
  UserAuth,
  Configuracion,
  Categorias,
  Movimientos,
  Informe,
} from "../index";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route
        element={<ProtectedRoute user={user} redirectTo={"/iniciarsesion"} />}
      >
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/informes" element={<Informe />} />
        <Route path="/movimientos" element={<Movimientos />} />
      </Route>
      <Route path="/iniciarsesion" element={<Login />} />
    </Routes>
  );
}
