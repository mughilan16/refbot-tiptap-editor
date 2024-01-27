import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useRichTextEditorContext } from "mui-tiptap";
import { useSnackbar } from "notistack";
import { Controller, useFormContext } from 'react-hook-form';
import { FormFields } from './View';
import { useMainTab } from '../../hooks/zustand/useMainTab';
import axiosLaravel from '../../utils/axiosLaravel';
import serverXmlResponseSanitize from './OutputTab/serverXmlResponseSanitize';
import { Box, DialogActions, Paper, TextField, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { v4 as uuidv4 } from 'uuid';

export default function RefInputDialog({ open }: { open: boolean }) {

    const editor = useRichTextEditorContext();

    const { register, handleSubmit, control, formState } = useFormContext<FormFields>();
    const { errors, isSubmitting } = formState;

    const dispatch = useMainTab(state => state.dispatch);
    const inputDailogShow = useMainTab(state => state.inputDailogShow);

    const { enqueueSnackbar } = useSnackbar();

    const closeDialog = () => {
        dispatch({
            type: 'ChangeInputDailogVisibility',
            payload: {
                show: false,
            }
        })
    }
    
    const onSubmit = (data: FormFields) => {
        return axiosLaravel.post('/ref-bot-styler', { text: data.content, parentFolder: `ref-bot/${uuidv4()}` }).then(res => {
            const data = res.data.data.out as string[];
            dispatch({
                type: 'SetXmlData',
                payload: {
                    data,
                }
            })
            closeDialog();
        }).catch(error => {
            enqueueSnackbar({
                message: 'Error',
                variant: 'error',
            })
        })
    }


    return (
        <Dialog
            open={inputDailogShow}
            onClose={() => {
                if (!isSubmitting) {
                    closeDialog()
                }
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle sx={{ margin: '10px 50px', textAlign: 'center' }} id="alert-dialog-title">
                    Reference input
                </DialogTitle>
                <DialogContent>
                    {/* <LoadingDialog open={true}/> */}
                    <Controller
                        name='content'
                        control={control}
                        rules={{
                            required: 'This field is required',
                        }}
                        render={({ field }) => (
                            <TextField
                                // style={{margin: '10px'}}
                                multiline
                                fullWidth
                                rows={15}
                                // label='Text'
                                InputProps={{ ...field, }}
                                value={'toLowerCase'}
                                error={!!errors.content}
                                helperText={errors.content?.message}
                            />
                        )}
                    />
                </DialogContent>
                <DialogActions sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LoadingButton type='submit' loading={isSubmitting} variant='contained' style={{ minWidth: '150px' }}>Submit</LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    );
}