import { Box, Paper } from '@mui/material';
import { RichTextField } from 'mui-tiptap';
import EditorMenuControls from './EditorMenuControls';

const RefbotEditor = () => {
    // const editor = useRichTextEditorContext();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <EditorMenuControls />
            <RichTextField
                RichTextContentProps={{ className: 'editor-field' }}
            />
        </Box>
    )
}

export default RefbotEditor