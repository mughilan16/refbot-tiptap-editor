import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useMainTab } from '../../../hooks/zustand/useMainTab';

const RefbotTabButtons = () => {

    const refVisibility = useMainTab(state => state.refVisibility);
    const dispatch = useMainTab(state => state.dispatch);

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => dispatch({type: 'Functon', set(state) {
                state.refVisibility.input = !refVisibility.input;
            },})} variant={refVisibility.input ? 'contained' : 'outlined'} size='small'>Input</Button>
            {/* <Button onClick={() => dispatch({type: 'Functon', set(state) {
                state.refVisibility.input = !refVisibility.input;
            },})} variant={refVisibility.input ? 'contained' : 'outlined'} size='small'>Changes</Button> */}
            <Button onClick={() => dispatch({type: 'Functon', set(state) {
                state.refVisibility.output = !refVisibility.output;
            },})} variant={refVisibility.output ? 'contained' : 'outlined'} size='small'>Output</Button>
        </ButtonGroup>
    )
}

export default RefbotTabButtons