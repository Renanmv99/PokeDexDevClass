import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import React, { useEffect } from "react";

const darkMode = true;

const lightTheme = createTheme({
    typography: {
        fontFamily: ["'Press Start 2P'", "'Roboto'", "sans-serif"].join(","),
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff4081', 
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#000000',
            secondary: '#757575',
        },
    },
});

const darkTheme = createTheme({
    typography: {
        fontFamily: ["'Press Start 2P'", "'Roboto'", "sans-serif"].join(","),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#bdbdbd',
        },
    },
});

const theme = darkMode ? darkTheme : lightTheme;

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};