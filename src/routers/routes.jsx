import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth, Configuracion } from "../index";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route
        element={<ProtectedRoute user={user} redirectTo={"/iniciarsesion"} />}
      >
        <Route path="/" element={<Home />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Route>
      <Route path="/iniciarsesion" element={<Login />} />
    </Routes>
  );
}
