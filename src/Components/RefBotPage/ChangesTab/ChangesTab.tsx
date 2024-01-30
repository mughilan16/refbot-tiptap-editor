import { Divider, Paper } from '@mui/material';
import ElementNestingLevel from '../ElementNestingLevel';
import RefbotEditor from './RefbotEditor';



const ChangesTab = () => {

    return (
        <Paper elevation={2} id="editor-body" sx={{ padding: '10px' }}>
            <RefbotEditor />
            <Divider />
            <ElementNestingLevel />
        </Paper>
    )
}

export default ChangesTab