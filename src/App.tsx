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
import RefBotPage, { FormFields } from "./Components/RefBotPage/View";
import MuiSnakbarProvider from "./Components/Providers/MuiSnakbarProvider";
import RefbotEditor from "./Components/RefBotPage/ChangesTab/RefbotEditor";
import RefbotEditorProvider from "./Components/RefBotPage/ChangesTab/RefbotEditorProvider";
import { citationText } from "./utils/faker/citaitonText";
import { FormProvider, useForm } from "react-hook-form";

export default function App() {

  const methods = useForm<FormFields>({
    defaultValues: {
      content: citationText
    },
  });

  return (
    <MuiThemeProvider>
      <CssBaseline />
      <MuiSnakbarProvider>
        <FormProvider {...methods}>
          <RefbotEditorProvider>
            <RefbotEditor />
          </RefbotEditorProvider>
        </FormProvider>
      </MuiSnakbarProvider>
    </MuiThemeProvider >
  );
}
