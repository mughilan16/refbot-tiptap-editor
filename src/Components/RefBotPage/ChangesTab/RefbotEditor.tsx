import { Box, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import { RichTextField } from 'mui-tiptap';
import '../styles.css';
import EditorMenuControls from './EditorMenuControls';

const RefbotEditor = () => {
    // const editor = useRichTextEditorContext();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', height: `100vh`, backgroundColor: grey[50] }}>
            <EditorMenuControls />
            <Paper className='editor-container' sx={{ height: 'calc(100vh - 80px)', overflowY: 'scroll', margin: '10px', backgroundColor: grey[50] }}>
                <RichTextField
                    RichTextContentProps={{ className: 'editor-filed' }}
                />
            </Paper>
        </Box>
    )
}

export default RefbotEditor