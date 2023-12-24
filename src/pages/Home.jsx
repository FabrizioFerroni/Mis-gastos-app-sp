import styled from "styled-components";
import { useAuthStore } from "../store/AuthStore";
import { UserAuth } from "..";
export function Home() {
  const { signOut } = useAuthStore();
  const { user } = UserAuth();
  return (
    <Container>
      <h1>Bienvenido a Home {user.full_name} </h1>
      <img src={user.picture} />

      <button onClick={() => signOut()}>Cerrar sesión</button>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
