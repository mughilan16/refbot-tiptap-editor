import { Autocomplete, Box, Button, Divider, TextField } from '@mui/material';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { FormFields } from '../View';
import { cslTemplated } from '../cslTemplates';

const ReferenceStyleInput = () => {
    const { register, handleSubmit, control, formState } = useFormContext<FormFields>();
    const { errors, isSubmitting } = formState;

    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 20px'}}>
                <Controller
                    name='style'
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'The style field is required.',
                        }
                    }}
                    render={({ field, formState }) => {
                        const { value, onChange, ref } = field;
                        return (
                            <Autocomplete
                                sx={{ width: '400px' }}
                                disablePortal
                                options={Object.keys(cslTemplated).map(key => ({ label: key, value: key }))}
                                onChange={(e, option) => {
                                    onChange(option);
                                    // setValue('macroIds', option?.macros ?? []);
                                }}
                                value={value ? value : null}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        helperText={errors.style?.message}
                                        error={!!errors.style?.message}
                                        label="Style"
                                    />
                                )}
                            />
                        )
                    }}
                />
                <Button>Convert</Button>
            </Box>
            <Divider style={{ marginTop: '5px' }} />
        </>
    )
}

export default ReferenceStyleInput