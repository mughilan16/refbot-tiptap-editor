import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

import { useSnackbar } from 'notistack';
import axiosLaravel, { apiURL } from '../../../utils/axiosLaravel';
import { replaceSlashIntoPlus } from '../../../utils/string/replaceSlashIntoPlus';
import removeParentTags from '../../../utils/citation/removeParentTags';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import { useFormContext } from 'react-hook-form';
import { FormFields } from '../../RefBotPage/RefInputDialog/RefInputDialog';

const TextCompareButton = () => {

  const [state, setState] = useState({ isLoading: false });
  const { enqueueSnackbar } = useSnackbar();
  const getValues = useFormContext<FormFields>().getValues;
  const onClickHandler = async () => {

    let references = [...document.querySelectorAll(`[data-index]`)].map(refEl => {
      let inputText = refEl.querySelector(`[data-label="Input"]`)?.textContent || ''
      let convertedXml = removeParentTags({ parentEl: refEl.querySelector(`[data-label="Output"] #output-container`) })
        .replaceAll('<r-', '<')
        .replaceAll('page>', 'lable>')
        .replaceAll('</r-', '</')
        .replaceAll('&nbsp;', '');
      // let convertedXml = refEl.querySelector(`[data-label="Output"] #output-container`)?.innerHTML || ''
      return { inputText, convertedXml };
    })
    const { DisLike, Like, Total } = useMainTab.getState().feedBack;

    setState(pre => ({ ...pre, isLoading: true }));
    axiosLaravel.post('/ref-bot-to-word', {
      references,
      no_of_references: Total,
      no_of_likes: Like,
      no_of_dislikes: DisLike,
      bibliography_style: getValues('style.value'),
    })
      .then(res => {
        window.open(`${apiURL}/file-download/${replaceSlashIntoPlus(res.data.data.outputFile)}`, '_blank')
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