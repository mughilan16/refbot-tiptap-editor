import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';
import { FormFields } from './RefInputDialog';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const FileInput = () => {
    const { formState, setValue } = useFormContext<FormFields>();
    const { errors, isSubmitting } = formState;

    return (
        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput
            onChange={(e) => {
                setValue("docxFile", e.target.files)
            }}
             accept='.docx' type="file" />
        </Button>
    )
}

export default FileInput