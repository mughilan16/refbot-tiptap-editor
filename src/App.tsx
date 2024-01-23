import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
  type PaletteMode,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import MuiThemeProvider from "./Components/Providers/MuiThemeProvider/MuiThemeProvider";
import RefBotPage from "./Components/RefBotPage/View";

export default function App() {

  return (
    <MuiThemeProvider>
      <CssBaseline />
      <RefBotPage />

    </MuiThemeProvider>
  );
}
