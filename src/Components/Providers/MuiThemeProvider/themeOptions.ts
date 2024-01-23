import { ThemeOptions, colors } from '@mui/material';


const defautlUISize = 'small';
export const primary = colors.indigo

export const hoverBgColor = primary[500];

const themeOptions: ThemeOptions = {
    palette: {
        primary,
        // mode: 'dark',
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: defautlUISize,
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                sx: {
                    padding: '10px',
                }
            }
        },
        MuiCardActionArea: {
            defaultProps: {
                sx: {
                    padding: '10px',
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '10px !important',
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: '10px !important', 
                }
            },
        },
        MuiIcon: {
            defaultProps: {
                fontSize: 'small',
            }
        },
        MuiIconButton: {
            defaultProps: {
                size: 'small',
            }
        },
        MuiTextField: {
            defaultProps: {
                size: defautlUISize,
                fullWidth: true,
                variant: 'outlined',
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                fullWidth: true,
                disablePortal: true,
            },
        },
        MuiCheckbox: {
            defaultProps: {
                size: defautlUISize,
            }
        },
        MuiSwitch: {
            defaultProps: {
                size: defautlUISize,

            }
        }
    },
}

export default themeOptions

