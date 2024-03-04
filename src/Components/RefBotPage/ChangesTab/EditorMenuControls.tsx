import { Box, Paper, useTheme } from "@mui/material";
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
import RefbotTabButtons from "../../Editor/Extensions/RefbotTabButtons";
import TextCompareButton from "../../Editor/Extensions/TextCompareButton";
import ElementNestingLevel from "../ElementNestingLevel";
import ReferenceStyleInput from "../OutputTab/ReferenceStyleInput";
import RefInputDialog from "../RefInputDialog/RefInputDialog";
import FeedBackCountButton from "../../Editor/Extensions/FeedBackCountButton";

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
          <FeedBackCountButton />
          <MenuButtonBold />
          <MenuButtonItalic />
          <MenuButtonSubscript />
          <MenuButtonSuperscript />
          <MenuDivider />
          <MenuButtonRemoveFormatting />
          <MenuButtonUndo />
          <MenuButtonRedo />
          <MenuDivider />
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
            <RefbotTabButtons />
            <ReferenceStyleInput />
            <TextCompareButton />
            <ElementNestingLevel />
          </Box>

          {/* <ExtendRangeButton /> */}

        </Box>
      </Paper>
    </MenuControlsContainer>
  );
}
