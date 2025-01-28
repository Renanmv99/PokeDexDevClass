import { memo } from "react";
import { AppBar, Box, Button, Toolbar, Typography, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme";
import { DarkModeOutlined } from "@mui/icons-material";

type Props = {
  showHomeBtn?: boolean;
  title: string;
  next?: JSX.Element;
  previus?: JSX.Element;
};

const Component = (props: Props) => {
  const navigate = useNavigate();
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="error">
        <Toolbar>
          {props.showHomeBtn && (
            <Button color="inherit" onClick={() => navigate("/")} variant="text">
              HOME
            </Button>
          )}
          <Box display="flex" justifyContent="space-evenly" flexGrow={1}>
            {props.previus}
            <Typography variant="h4" component="h1" align="center">
              {props.title}
            </Typography>
            {props.next}
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
    <DarkModeOutlined sx={{ fontSize: 22 }} /> 
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      color="default"
      inputProps={{ "aria-label": "dark mode toggle" }}
    />
  </Box>
        </Toolbar>
      </AppBar>
      {}
      <Box sx={{ height: 64 }} />
    </Box>
  );
};

const propsAreEqual = (prevProps: Readonly<Props>, nextProps: Readonly<Props>) => {
  return prevProps.title === nextProps.title;
};

export const Header = memo(Component, propsAreEqual);
