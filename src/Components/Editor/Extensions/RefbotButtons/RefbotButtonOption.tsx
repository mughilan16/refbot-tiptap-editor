import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const RefbotButtonOption = () => {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button size='small'>Select</Button>
            <Button variant='contained' size='small'>Insert</Button>
            <Button size='small'>Remove</Button>
        </ButtonGroup>
    )
}

export default RefbotButtonOption