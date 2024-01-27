import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const RefbotTabButtons = () => {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button size='small'>Input</Button>
            <Button size='small'>Changes</Button>
            <Button size='small'>Output</Button>
        </ButtonGroup>
    )
}

export default RefbotTabButtons