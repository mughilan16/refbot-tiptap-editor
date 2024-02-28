import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FormFields } from './RefInputDialog';

const TextInput = () => {
    const { register, handleSubmit, control, formState } = useFormContext<FormFields>();
    const { errors, isSubmitting } = formState;

    return (
        <Controller
            name='content'
            control={control}
            rules={{
                // required: 'This field is required',
            }}
            render={({ field }) => (
                <TextField
                    // style={{margin: '10px'}}
                    multiline
                    fullWidth
                    rows={5}
                    // label='Text'
                    InputProps={{ ...field, }}
                    value={'toLowerCase'}
                    error={!!errors.content}
                    helperText={errors.content?.message}
                />
            )}
        />
    )
}

export default TextInput