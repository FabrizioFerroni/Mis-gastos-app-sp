import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth } from "../index";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<ProtectedRoute user={user} redirectTo={"/iniciarsesion"} />}
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/iniciarsesion" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
