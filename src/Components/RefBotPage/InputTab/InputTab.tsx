import LoadingButton from "@mui/lab/LoadingButton";
import { Autocomplete, Box, Paper, Stack, TextField, styled } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import axiosLaravel from '../../../utils/axiosLaravel';
import { FormFields } from '../View';
import { cslTemplated } from '../cslTemplates';
import { useRichTextEditorContext } from "mui-tiptap";
import { useSnackbar } from "notistack";


const CustomePaper = styled(Paper)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  borderRadius: '5px',
  padding: '15px',
  backgroundColor: 'white',
  flexDirection: 'column',
})
// gap={'10px'} bgcolor={'white'} padding={'15px'} alignItems={'center'} borderRadius={'5px'}
const InputTab = () => {
  const editor = useRichTextEditorContext();

  const { register, handleSubmit, control, formState } = useFormContext<FormFields>();
  const { errors, isSubmitting } = formState;

  const dispatch = useMainTab(state => state.dispatch);
  const currentTab = useMainTab(state => state.currentTab);

  const { enqueueSnackbar } = useSnackbar();


  const onSubmit = (data: FormFields) => {
    return axiosLaravel.post('/ref-bot-styler', { text: data.content }).then(res => {
      const data = res.data.data.out as string[];
      dispatch({
        type: 'SetXmlData',
        payload: {
          data,
        }
      })
      dispatch({
        type: 'ChangeTab',
        payload: {
          tab: 'Changes',
        }
      })
      editor?.commands.setContent(data.join('').replaceAll('source', 'r-source'));
    }).catch(error => {
      enqueueSnackbar({
        message: 'Error',
        variant: 'error',
      })
    })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <LoadingDialog open={true}/> */}
      <CustomePaper elevation={2}>
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
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoadingButton type='submit' loading={isSubmitting} variant='contained' style={{ minWidth: '150px' }}>Submit</LoadingButton>
        </Box>
      </CustomePaper>
    </form>
  )
}

export default InputTab