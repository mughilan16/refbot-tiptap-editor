import { Button } from '@mui/material'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab';

import { useMainTab } from '../../../hooks/zustand/useMainTab';
import axiosLaravel from '../../../utils/axiosLaravel';
import { useSnackbar } from 'notistack';

const TextCompareButton = () => {

  const dispatch = useMainTab(state => state.dispatch);
  const [state, setState] = useState({ isLoading: false });
  const { enqueueSnackbar } = useSnackbar();

  const onClickHandler = async () => {

    await dispatch({
      type: 'Functon', set(state) {
        state.refVisibility.annotation = true;
        state.refVisibility.input = true;
        state.refVisibility.output = true;
      },
    })

    let references = [...document.querySelectorAll(`[data-index]`)].map(refEl => {
      let inputText = refEl.querySelector(`[data-label="Input"]`)?.textContent || ''
      let convertedXml = refEl.querySelector(`[data-label="Output"] #output-container`)?.innerHTML || ''
      let annotationXml = refEl.querySelector(`[data-label="Annotation"]`)?.innerHTML || ''
      return { inputText, convertedXml, annotationXml };
    })
    setState(pre => ({ ...pre, isLoading: true }));
    axiosLaravel.post('/ref-bot-to-word', { references: JSON.stringify(references) })
      .then(res => {
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