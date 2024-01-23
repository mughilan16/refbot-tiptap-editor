import { Autocomplete, Box, Button, Stack, TextField, styled } from '@mui/material'
import LoadingButton from "@mui/lab/LoadingButton";
import React from 'react'
import { Controller, FormSubmitHandler, useForm } from 'react-hook-form';
import { useMainTab } from '../../hooks/zustand/useMainTab';
import axiosLaravel from '../../utils/axiosLaravel';
import { cslTemplated } from './cslTemplates';
import LoadingDialog from './LoadingDialog';
import { citationText } from '../../utils/faker/citaitonText';

type FormFields = {
  content: string,
  style: { label: string, value: string },
}

const CustomeStack = styled(Stack)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  borderRadius: '5px',
  padding: '15px',
  backgroundColor: 'white',
})
// gap={'10px'} bgcolor={'white'} padding={'15px'} alignItems={'center'} borderRadius={'5px'}
const InputTab = () => {

  const { register, handleSubmit, control, formState } = useForm<FormFields>({
    defaultValues: {
      content: citationText
    },
  });

  const { errors, isSubmitting } = formState;

  const dispatch = useMainTab(state => state.dispatch);
  const currentTab = useMainTab(state => state.currentTab);
  console.log({ currentTab });



  const onSubmit = (data: FormFields) => {
    return axiosLaravel.post('/ref-bot-styler', { text: data.content }).then(res => {
      dispatch({
        type: 'SetXmlData',
        payload: {
          data: res.data.data.out as string[],
        }
      })
      dispatch({
        type: 'ChangeTab',
        payload: {
          tab: 'Changes',
        }
      })
    }).catch(error => {
      console.log(error);

    })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <LoadingDialog open={true}/> */}
      <CustomeStack>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          <LoadingButton type='submit' loading={isSubmitting} variant='contained' style={{ maxWidth: '200px' }}>Submit</LoadingButton>
        </Box>
        <Controller
          name='content'
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({ field }) => (
            <TextField
              multiline
              fullWidth
              rows={15}
              label='Text'
              InputProps={{ ...field, }}
              value={'toLowerCase'}
              error={!!errors.content}
              helperText={errors.content?.message}
            />
          )}
        />
      </CustomeStack>
    </form>
  )
}

export default InputTab