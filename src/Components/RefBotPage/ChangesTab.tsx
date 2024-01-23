import { Box, Breadcrumbs, Divider } from '@mui/material'
import React from 'react'
import Editor from '../Editor/Editor'
import { useMainTab } from '../../hooks/zustand/useMainTab';
import referenceElements from '../../utils/faker/referenceElements';

const HoverdElement = [...referenceElements, {name: 'p', color: '#22222'}].reduce((acc, element) => {
    acc[`r-${element.name}`.toLocaleUpperCase()] = <span style={{ backgroundColor: element.color, padding: '2px 10px', borderRadius: '4px', }}>{element.name}</span>;
    return acc;
}, {} as Record<string, React.ReactElement>);

const BottonMenu = () => {
    const hoverElements = useMainTab(state => state.editor.hoverElements);
    return (
        <Box height={'50px'} padding={'10px'}>
            <Breadcrumbs separator=">" >
            {hoverElements.map(el => HoverdElement[el])}
            </Breadcrumbs>
        </Box>
    )
}

const ChangesTab = () => {

    return (
        <Box sx={{ backgroundColor: 'white', borderRadius: '5px' }} bgcolor={'white'}>
            <Editor />
            <Divider />
            <BottonMenu />
        </Box>
    )
}

export default ChangesTab