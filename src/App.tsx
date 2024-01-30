import {
  CssBaseline
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import MuiSnakbarProvider from "./Components/Providers/MuiSnakbarProvider";
import MuiThemeProvider from "./Components/Providers/MuiThemeProvider/MuiThemeProvider";
import RefbotEditor from "./Components/RefBotPage/ChangesTab/RefbotEditor";
import RefbotEditorProvider from "./Components/RefBotPage/ChangesTab/RefbotEditorProvider";
import { FormFields } from "./Components/RefBotPage/RefInputDialog/RefInputDialog";
import { citationText } from "./utils/faker/citaitonText";
import referenceElements from "./utils/faker/referenceElements";

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
            <style>{referenceElements.map(refEl => {
              let name = refEl.name;
              if(name == 'surname'){
                name = 'family';
              }else if(name == 'label'){
                name = 'r-label';
              }
              return `${name}{background-color: ${refEl.color}}`
            })}</style>
            <RefbotEditor />
          </RefbotEditorProvider>
        </FormProvider>
      </MuiSnakbarProvider>
    </MuiThemeProvider >
  );
}
