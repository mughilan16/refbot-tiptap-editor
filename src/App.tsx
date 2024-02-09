import {
  CssBaseline
} from "@mui/material";
import { BrowserRouter, Route } from 'react-router-dom';
import MuiSnakbarProvider from "./Components/Providers/MuiSnakbarProvider";
import MuiThemeProvider from "./Components/Providers/MuiThemeProvider/MuiThemeProvider";
import RefbotEditor from "./Components/RefBotPage/ChangesTab/RefbotEditor";
import RefbotEditorProvider from "./Components/RefBotPage/ChangesTab/RefbotEditorProvider";

export default function App() {




  return (
    <MuiThemeProvider>
      <CssBaseline />
      <MuiSnakbarProvider>
        <RefbotEditorProvider>
          <RefbotEditor />
        </RefbotEditorProvider>
      </MuiSnakbarProvider>
    </MuiThemeProvider >
  );
}
