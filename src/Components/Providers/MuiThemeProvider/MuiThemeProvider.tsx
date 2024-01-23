import { ThemeProvider, createTheme } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import themeOptions from './themeOptions';

// const materialTheme = materialExtendTheme();

const theme = createTheme(themeOptions);

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ThemeProvider theme={theme}>
            {/* <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: {...materialTheme, ...theme,} }}>
                <JoyCssVarsProvider>
                    <CssBaseline enableColorScheme /> */}
            {children}
            {/* </JoyCssVarsProvider>
            </MaterialCssVarsProvider> */}
        </ThemeProvider>
    )
}



export default MuiThemeProvider