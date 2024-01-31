import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

import { useSnackbar } from 'notistack';
import axiosLaravel, { apiURL } from '../../../utils/axiosLaravel';
import { replaceSlashIntoPlus } from '../../../utils/string/replaceSlashIntoPlus';

const TextCompareButton = () => {
  
  const [state, setState] = useState({ isLoading: false });
  const { enqueueSnackbar } = useSnackbar();

  const onClickHandler = async () => {

    let references = [...document.querySelectorAll(`[data-index]`)].map(refEl => {
      let inputText = refEl.querySelector(`[data-label="Input"]`)?.textContent || ''
      let convertedXml = refEl.querySelector(`[data-label="Output"] #output-container`)?.innerHTML || ''
      // let annotationXml = refEl.querySelector(`[data-label="Annotation"]`)?.innerHTML || ''
      return { inputText, convertedXml };
    })
    setState(pre => ({ ...pre, isLoading: true }));
    axiosLaravel.post('/ref-bot-to-word', { references })
      .then(res => {
        window.open(`${apiURL}/file-download/${replaceSlashIntoPlus(res.data.data.outputFile)}`, '_blank')
        enqueueSnackbar({
          message: 'Success',
          variant: 'success',
          
        });
        console.log(res);
      }).catch(err => {
        enqueueSnackbar({
          message: 'Error',
          variant: 'error',
        });
      }).finally(() => {
        setState(pre => ({ ...pre, isLoading: false }));
      })

  }


  return (
    <LoadingButton
      variant='contained'
      disableElevation
      loading={state.isLoading}
      sx={{ margin: '0 10px' }}
      onClick={onClickHandler}
    >Convert to docx</LoadingButton>
  )
}

export default TextCompareButton