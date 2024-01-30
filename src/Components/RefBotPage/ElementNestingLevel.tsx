import React from 'react'
import { useMainTab } from '../../hooks/zustand/useMainTab';
import { Box } from '@mui/system';
import { Breadcrumbs } from '@mui/material';
import referenceElements from '../../utils/faker/referenceElements';
import { grey } from '@mui/material/colors';

const HoverdElement = [...referenceElements, { name: 'p', color: '#22222', id: 12345 }].reduce((acc, element) => {
    acc[`r-${element.name}`.toLocaleUpperCase()] = <span key={element.id} style={{ backgroundColor: element.color, padding: '2px 10px', borderRadius: '4px', }}>{element.name}</span>;
    return acc;
}, {} as Record<string, React.ReactElement>);


const ElementNestingLevel = () => {
    const hoverElements = useMainTab(state => state.editor.hoverElements);
    // console.log(hoverElements);

    return (
        <Box sx={{ height: '26px', padding: '0px', borderRadius: '4px', width: 'auto', margin: '0 5px', backgroundColor: grey[100] }}>
            <Breadcrumbs separator=">" >
                {hoverElements.map(el => HoverdElement[el])}
            </Breadcrumbs>
        </Box>
    )
}


export default ElementNestingLevel