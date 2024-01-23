import { Box, Breadcrumbs, Divider, Paper } from '@mui/material'
import React from 'react'
import RefbotEditor from './RefbotEditor';
import { grey } from '@mui/material/colors';
import referenceElements from '../../../utils/faker/referenceElements';
import { useMainTab } from '../../../hooks/zustand/useMainTab';

const HoverdElement = [...referenceElements, { name: 'p', color: '#22222', id: 12345 }].reduce((acc, element) => {
    acc[`r-${element.name}`.toLocaleUpperCase()] = <span key={element.id} style={{ backgroundColor: element.color, padding: '2px 10px', borderRadius: '4px', }}>{element.name}</span>;
    return acc;
}, {} as Record<string, React.ReactElement>);

const BottonMenu = () => {
    const hoverElements = useMainTab(state => state.editor.hoverElements);
    // console.log(hoverElements);
    
    return (
        <Box sx={{ height: '50px', padding: '10px', border: `2px solid ${grey[300]} !important`, marginTop: '10px', borderRadius: '4px' }}>
            <Breadcrumbs separator=">" >
                {hoverElements.map(el => HoverdElement[el])}
            </Breadcrumbs>
        </Box>
    )
}

const ChangesTab = () => {

    return (
        <Paper elevation={2} id="editor-body" sx={{ padding: '10px' }}>
            <RefbotEditor />
            <Divider />
            <BottonMenu />
        </Paper>
    )
}

export default ChangesTab