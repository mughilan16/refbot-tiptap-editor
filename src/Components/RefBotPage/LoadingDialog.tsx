import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, CircularProgress } from '@mui/material';

export default function LoadingDialog({ open }: { open: boolean }) {

    return (
        <Dialog
            open={open}
            onClose={() => { }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{margin: '10px 50px'}} id="alert-dialog-title">
                Analysing text....
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            </DialogContent>
        </Dialog>
    );
}