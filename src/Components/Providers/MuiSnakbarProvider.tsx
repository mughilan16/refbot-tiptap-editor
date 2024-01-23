import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

const MuiSnakbarProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SnackbarProvider maxSnack={5} anchorOrigin={{ horizontal: "right", vertical: "top" }}>
            {children}
        </SnackbarProvider>
    )
}

export default MuiSnakbarProvider