import { Box, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import { RichTextField, useRichTextEditorContext } from 'mui-tiptap';
import { FormProvider, useForm } from "react-hook-form";
import referenceElements from '../../../utils/faker/referenceElements';
import '../styles.css';
import EditorMenuControls from './EditorMenuControls';
import RefbotEditorProvider from './RefbotEditorProvider';
import { citationText } from '../../../utils/faker/citaitonText';
import { FormFields } from '../RefInputDialog/RefInputDialog';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosLaravel from '../../../utils/axiosLaravel';
import useReferenceElements from '../../../hooks/useReferenceElements';
import CommentView from '../../Comment/CommentView';

const RefbotEditor = () => {
  // const editor = useRichTextEditorContext();
  const methods = useForm<FormFields>({
    defaultValues: {
      // content: citationText,
      content: '',
      style: {
        "label": "APA",
        "value": "apa_custom"
      }
    },
  });

  // const [historyId, setHistoryId] = useState<null | string>(null);

  // const { data } = useQuery({
  //     queryKey: ['ref-bot-history', historyId],
  //     enabled: historyId != null,
  //     queryFn: async () => axiosLaravel.get('').then(res => res.data),
  // });

  // useEffect(() => {
  //     editor?.commands.setContent(data);
  // }, [data]);

  // useEffect(() => {
  //     const queryString = window.location.search;
  //     const parameters = new URLSearchParams(queryString);
  //     const value = parameters.get('history');
  //     setHistoryId(value);
  //     // console.log(editor?.isEditable, value);
  // }, []);

  const { data } = useReferenceElements();

  return (
    <FormProvider {...methods}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', height: `100vh`, backgroundColor: grey[50] }}>
        <style>{data?.map(refEl => {
          const originalname = refEl.name;
          let name = refEl.name;
          if (name == 'surname') {
            name = 'family';
          } else if (name == 'date-in-citation') {
            name = 'date-parts';
          } else if (name == 'pages') {
            name = 'page';
          }
          return `${name}, r-${name}, ${originalname}, r-${originalname}{background-color: ${refEl.color}}`
        })}</style>
        <EditorMenuControls />
        <Paper className='editor-container' sx={{ height: 'calc(100vh - 80px)', overflowY: 'scroll', margin: '10px', backgroundColor: grey[50] }}>
          <RichTextField
            RichTextContentProps={{ className: 'editor-filed' }}
          />
          <CommentView />
        </Paper>
      </Box>
    </FormProvider>
  )
}

export default RefbotEditor
