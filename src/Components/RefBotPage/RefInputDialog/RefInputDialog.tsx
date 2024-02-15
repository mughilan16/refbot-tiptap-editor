import { LoadingButton } from '@mui/lab';
import { DialogActions, Divider, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useRichTextEditorContext } from "mui-tiptap";
import { useSnackbar } from "notistack";
import { useFormContext } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import axiosLaravel from '../../../utils/axiosLaravel';
import serverXmlResponseSanitize from '../OutputTab/serverXmlResponseSanitize';
import TextInput from './TextInput';
import FileInput from './FileInput';

export type FormFields = {
    content: string,
    style: { label: string, value: string },
    docxFile: FileList | null
}

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
        return axiosLaravel.postForm('/ref-bot-styler', { text: data.content, docxFile: data.docxFile, parentFolder: `ref-bot/${uuidv4()}` }).then(res => {
            const replaceSlashIntoPlus = (segment: string) => segment.replace(/[\/\\]/g, '+')
            // let data = res.data.data.out as string[];
            axiosLaravel.get(`/file-download/${replaceSlashIntoPlus(res.data.data.resultPath)}`).then(res => {
                let data: string = res.data;
                console.log(res);
                dispatch({
                    type: 'SetXmlData',
                    payload: {
                        data: data.split('\n'),
                    }
                })
                editor?.commands.setContent(serverXmlResponseSanitize(data));
                closeDialog();
            })
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
                <Divider/>
                <DialogContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '10px'}}>
                    {/* <LoadingDialog open={true}/> */}
                    <TextInput/>
                    <Typography>(or)</Typography>
                    <FileInput/> 
                </DialogContent>
                <Divider/>
                <DialogActions sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LoadingButton type='submit' loading={isSubmitting} variant='contained' style={{ minWidth: '150px' }}>Submit</LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    );
}