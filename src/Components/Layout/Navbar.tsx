import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
    AppBar,
    Box,
    Button,
    ButtonGroup,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { tabs, useMainTab } from "../../hooks/zustand/useMainTab";


const Navbar = () => {
    const currentTab = useMainTab(state => state.currentTab);
    const dispatch = useMainTab(state => state.dispatch);

    return (
        <AppBar color="default" position="fixed">
            <Toolbar>
                <ButtonGroup >
                    {tabs.map((item) => (
                        <Button variant={item == currentTab ? 'contained' : 'outlined'} onClick={() => dispatch({ type: 'ChangeTab', payload: { tab: item } })} sx={{ textAlign: 'center' }}>{item}</Button>
                    ))}
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar