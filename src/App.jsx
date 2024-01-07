import { createContext, useState } from "react";
import {
  Light,
  Dark,
  AuthContextProvider,
  MyRoutes,
  Sidebar,
  Device,
  MenuMovil,
  useUsuarioStore,
  Login,
  SpinnerLoader,
} from "./index";
import { useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";

export const ThemeContext = createContext(null);

function App() {
  const { mostrarUsuarios, datausuarios } = useUsuarioStore();
  const { pathname } = useLocation();
  const theme = datausuarios?.tema === "0" ? "claro" : "oscuro";
  const themeStyle = theme === "claro" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: () => mostrarUsuarios(),
  });

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {pathname != "/iniciarsesion" ? (
              <Container className={sidebarOpen ? "active" : ""}>
                <div className="ContentSidebar">
                  <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                </div>
                <div className="ContentMenu">
                  <MenuMovil />
                </div>
                <ContainerBody>
                  <MyRoutes />
                </ContainerBody>
              </Container>
            ) : (
              <Login />
            )}

            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
  transition: 0.3s ease-in-out;

  .ContentSidebar {
    display: none;
  }

  .ContentMenu {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    &.active {
      grid-template-columns: 220px 1fr;
    }
    grid-template-columns: 65px 1fr;
    .ContentSidebar {
      display: initial;
    }
    .ContentMenu {
      display: none;
    }
  }
`;

const ContainerBody = styled.div`
  width: 100%;
  grid-column: 1;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
