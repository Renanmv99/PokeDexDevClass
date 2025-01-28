import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React, { createContext, useState, useContext, useMemo } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: {main: "#d1001f"},
    error: { main: "#d32f2f" },
  },
  typography: {
    fontFamily: ["'Press Start 2P'", "'Roboto'", "sans-serif"].join(","),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: {main: "#22313d"},
    error: { main: "#f44336" },
  },
  typography: {
    fontFamily: ["'Press Start 2P'", "'Roboto'", "sans-serif"].join(","),
  },
});

type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
