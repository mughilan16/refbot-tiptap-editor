import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MainTabState, tabs, useMainTab } from '../../hooks/zustand/useMainTab';
import ChangesTab from './ChangesTab';
import InputTab from './InputTab';
import OutputTab from './OutputTab';
import { grey } from '@mui/material/colors';
import { Container } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: MainTabState['currentTab'];
    value: MainTabState['currentTab'];
}

const TabContents: Record<MainTabState['currentTab'], React.ReactElement> = {
    'Changes': <ChangesTab />,
    'Input': <InputTab />,
    'Output': <OutputTab />,
}

export default function BasicTabs() {
    const currentTab = useMainTab(state => state.currentTab);
    const dispatch = useMainTab(state => state.dispatch);


    const handleChange = (event: React.SyntheticEvent, newValue: MainTabState['currentTab']) => {
        dispatch({ type: 'ChangeTab', payload: { tab: newValue } })
    };

    console.log(currentTab);

    //     background-color: #85FFBD;
    // background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);


    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: `#85FFBD`, backgroundImage: ` linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)` }}>
                <Tabs value={currentTab} centered onChange={handleChange} aria-label="basic tabs example">
                    {tabs.map((tab, i) => <Tab key={i} value={tab} label={tab} />)}
                </Tabs>
            </Box>
            <Box sx={{ padding: '30px 50px', height: 'calc(100vh - 49px)', width: '80%', margin: 'auto', }}>
                {TabContents[currentTab]}
            </Box>
        </Box>
    );
}