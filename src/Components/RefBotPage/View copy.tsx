import { Box, Stack } from '@mui/material'
import React from 'react'
import ChangesTab from './ChangesTab'
import InputTab from './InputTab'
import OutputTab from './OutputTab'
import Navbar from '../Layout/Navbar'
import { MainTabState, useMainTab } from '../../hooks/zustand/useMainTab'

const TabContents: Record<MainTabState['currentTab'], React.ComponentType> = {
    'Changes': ChangesTab,
    'Input': InputTab,
    'Output': OutputTab,
}

const RefBotPage = () => {
    const currentTab = useMainTab(state => state.currentTab);
    const Content = TabContents[currentTab];

    return (
        <Stack>
            <Navbar />
            <Box sx={{ p: 3, maxWidth: 1207, minWidth: 1207, margin: '80px auto' }}>
                <Content />
            </Box>
        </Stack>
    )
}

export default RefBotPage