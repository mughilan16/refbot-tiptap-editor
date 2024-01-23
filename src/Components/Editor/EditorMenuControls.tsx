import { Box, Button, Divider, useTheme } from "@mui/material";
import {
  MenuButtonAddTable,
  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonCode,
  MenuButtonCodeBlock,
  MenuButtonEditLink,
  MenuButtonHighlightColor,
  MenuButtonHorizontalRule,
  MenuButtonImageUpload,
  MenuButtonIndent,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonRedo,
  MenuButtonRemoveFormatting,
  MenuButtonStrikethrough,
  MenuButtonSubscript,
  MenuButtonSuperscript,
  MenuButtonTaskList,
  MenuButtonTextColor,
  MenuButtonUnderline,
  MenuButtonUndo,
  MenuButtonUnindent,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectFontFamily,
  MenuSelectFontSize,
  MenuSelectHeading,
  MenuSelectTextAlign,
  isTouchDevice,
} from "mui-tiptap";
import useReferenceElements from "../../hooks/useReferenceElements";
import RefbotButtons from "./Extensions/RefbotButtons/RefbotButtons";
import { grey } from "@mui/material/colors";
import RefbotButtonOption from "./Extensions/RefbotButtons/RefbotButtonOption";

export default function EditorMenuControls() {
  const theme = useTheme();




  return (
    <MenuControlsContainer>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', borderBottom: `2px solid ${grey[300]} !important`, backgroundColor: grey[200], padding: '5px', borderRadius: '5px' }}>
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
        </Box>
      </Box>
    </MenuControlsContainer>
  );
}
