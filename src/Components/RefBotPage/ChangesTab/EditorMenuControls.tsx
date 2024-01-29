import { Box, Paper, useTheme } from "@mui/material";
import {
  MenuButtonBold,
  MenuButtonHighlightColor,
  MenuButtonItalic,
  MenuButtonRedo,
  MenuButtonRemoveFormatting,
  MenuButtonStrikethrough,
  MenuButtonSubscript,
  MenuButtonSuperscript,
  MenuButtonTextColor,
  MenuButtonUnderline,
  MenuButtonUndo,
  MenuControlsContainer,
  MenuDivider
} from "mui-tiptap";
import RefbotButtons from "../../Editor/Extensions/RefbotButtons/RefbotButtons";
import RefbotTabButtons from "../../Editor/Extensions/RefbotTabButtons";
import RefInputDialog from "../RefInputDialog/RefInputDialog";
import { grey } from "@mui/material/colors";
import ReferenceStyleInput from "../OutputTab/ReferenceStyleInput";
import ElementNestingLevel from "../ElementNestingLevel";

export default function EditorMenuControls() {
  const theme = useTheme();




  return (
    <MenuControlsContainer>
      <Paper sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px',
        borderRadius: '5px',
        backgroundColor: grey[100],
        padding: '10px 10px 10px 10px',
        margin: '10px 10px 0 10px',
      }}>
        {/* <RefbotButtonOption /> */}
        <RefbotButtons />
        <RefInputDialog open />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <MenuButtonBold />

          <MenuButtonItalic />

          <MenuButtonUnderline />

          <MenuButtonStrikethrough />

          <MenuButtonSubscript />

          <MenuButtonSuperscript />

          <MenuDivider />

          <MenuButtonTextColor
            defaultTextColor={theme.palette.text.primary}
            swatchColors={[
              { value: "#000000", label: "Black" },
              { value: "#ffffff", label: "White" },
              { value: "#888888", label: "Grey" },
              { value: "#ff0000", label: "Red" },
              { value: "#ff9900", label: "Orange" },
              { value: "#ffff00", label: "Yellow" },
              { value: "#00d000", label: "Green" },
              { value: "#0000ff", label: "Blue" },
            ]}
          />

          <MenuButtonHighlightColor
            swatchColors={[
              { value: "#595959", label: "Dark grey" },
              { value: "#dddddd", label: "Light grey" },
              { value: "#ffa6a6", label: "Light red" },
              { value: "#ffd699", label: "Light orange" },
              // Plain yellow matches the browser default `mark` like when using Cmd+Shift+H
              { value: "#ffff00", label: "Yellow" },
              { value: "#99cc99", label: "Light green" },
              { value: "#90c6ff", label: "Light blue" },
              { value: "#8085e9", label: "Light purple" },
            ]}
          />

          <MenuDivider />

          <MenuButtonRemoveFormatting />


          <MenuButtonUndo />
          <MenuButtonRedo />
          <MenuDivider />

          <Box sx={{display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center'}}>
            <RefbotTabButtons />
            <ReferenceStyleInput />
            <ElementNestingLevel />
          </Box>

          {/* <ExtendRangeButton /> */}

        </Box>
      </Paper>
    </MenuControlsContainer>
  );
}
