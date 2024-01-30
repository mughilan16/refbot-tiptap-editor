import { Autocomplete, Box, Button, TextField, styled } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import { cslTemplated } from '../cslTemplates';
import { FormFields } from '../RefInputDialog/RefInputDialog';

const options = cslTemplated.map(template => ({ label: template.name, value: template.key }));
const defaultOptions: { label: string, value: string }[] = [{ label: 'APA', value: 'apa' }]

const StyledBox = styled(Box)(({ theme }) => ({
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
        padding: '2px !important',
    },
    "& .MuiAutocomplete-option": {
        padding: '4px 6px',
        fontSize: '14px',
    },
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
}))

const ReferenceStyleInput = () => {
    const { register, handleSubmit, control, formState } = useFormContext<FormFields>();
    const { errors, isSubmitting } = formState;
    const dispatch = useMainTab(state => state.dispatch);

    return (
        <StyledBox>
            <Button size="small"
                variant='contained'
                disableElevation
                onClick={() => {
                    dispatch({
                        type: 'ChangeInputDailogVisibility',
                        payload: {
                            show: true,
                        }
                    })
                }}
            >Input</Button>
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
                            sx={{
                                width: '300px',
                                "& .MuiOutlinedInput-root": {
                                    padding: `0 important`,
                                }
                            }}
                            disablePortal
                            disableClearable
                            options={[...defaultOptions, ...options]}
                            onChange={(e, option) => {
                                onChange(option);
                                // setValue('macroIds', option?.macros ?? []);
                            }}
                            isOptionEqualToValue={(option, value) => {
                                // console.log({ option, value });
                                return option.value === value.value;
                            }}
                            size='small'
                            value={value ? value : undefined}
                            renderInput={(params) => (
                                <TextField
                                    // size='small'
                                    {...params}
                                    helperText={errors.style?.message}
                                    error={!!errors.style?.message}
                                    placeholder="Style"
                                />
                            )}
                        />
                    )
                }}
            />
        </StyledBox>

    )
}

export default ReferenceStyleInput