import { Autocomplete, Box, Button, Divider, TextField } from '@mui/material';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { FormFields } from '../View';
import { cslTemplated } from '../cslTemplates';

const options = cslTemplated.map(template => ({ label: template.name, value: template.key }));
// .sort((a, b) => a.label.localeCompare(b.label))

const ReferenceStyleInput = () => {
    const { register, handleSubmit, control, formState } = useFormContext<FormFields>();
    const { errors, isSubmitting } = formState;

    return (
        <Controller
            name='style'
            control={control}
            // rules={{
            //     required: {
            //         value: true,
            //         message: 'The style field is required.',
            //     }
            // }}
            render={({ field, formState }) => {
                const { value, onChange, ref } = field;
                return (
                    <Autocomplete
                        sx={{ width: '400px' }}
                        disablePortal
                        options={options}
                        onChange={(e, option) => {
                            onChange(option);
                            // setValue('macroIds', option?.macros ?? []);
                        }}
                        isOptionEqualToValue={(option, value) => {
                            // console.log({ option, value });
                            return option.value === value.value;
                        }}
                        size='small'
                        value={value ? value : null}
                        renderInput={(params) => (
                            <TextField
                                // size='small'
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
    )
}

export default ReferenceStyleInput