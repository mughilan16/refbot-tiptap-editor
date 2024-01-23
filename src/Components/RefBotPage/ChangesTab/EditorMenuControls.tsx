import { Box, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
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
import { ExtendRangeButton } from "../../Editor/Extensions/RefbotButtons/ExtendRangeButton";

export default function EditorMenuControls() {
  const theme = useTheme();




  return (
    <MenuControlsContainer>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', border: `2px solid ${grey[300]} !important`, padding: '5px', borderRadius: '5px' }}>
        {/* <RefbotButtonOption /> */}
        <RefbotButtons />
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

          {/* <ExtendRangeButton /> */}

        </Box>
      </Box>
    </MenuControlsContainer>
  );
}
