import { createContext, useState } from "react";
import { Light, Dark, AuthContextProvider, MyRoutes } from "./index";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  /*   const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }; */

  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <ThemeContext.Provider value={{ setTheme, theme }}>
          <ThemeProvider theme={themeStyle}>
            <AuthContextProvider>
              <MyRoutes />
              <ReactQueryDevtools initialIsOpen={false} />
            </AuthContextProvider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
