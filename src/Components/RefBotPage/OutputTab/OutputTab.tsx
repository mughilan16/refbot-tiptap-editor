import { Box, Button, Divider, List, ListItem, ListItemText, Paper, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useMainTab } from '../../../hooks/zustand/useMainTab'
import CopyToClipboardButton from '../../Features/CopyToClipboardButton'
import ReferenceStyleInput from './ReferenceStyleInput'
import { useRichTextEditorContext } from 'mui-tiptap'
import xmlToJsonInputForCite from './xmlToJsonInputForCite'
import YourComponent from './Citation'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormFields } from '../View'

const CustomList = styled(List)({
  '&:hover': {
    backgroundColor: grey[200],
  },
  '& button:has([data-testid="ContentCopyIcon"])': {
    visibility: 'hidden',
  },
  '&:hover button:has([data-testid="ContentCopyIcon"])': {
    visibility: 'visible',
  }
})

const OutputTab = () => {
  // const xmlData = useMainTab(state => state.xmlData);
  const currentTab = useMainTab(state => state.currentTab);
  const editor = useRichTextEditorContext();

  const template = useFormContext<FormFields>().watch('style');

  const outs: { res: Record<string, any>, out: string }[] = useMemo(() => {
    if (!template) return [];
    return xmlToJsonInputForCite({ xml: editor?.getHTML() || '', template: template.value })
  }, [currentTab == 'Output', template])

  return (
    <Paper elevation={2} sx={{ height: 'calc(100vh - 100px)', backgroundColor: 'white', padding: '5px', borderRadius: '5px', }}>
      <ReferenceStyleInput />
      {/* 
      <Button
        onClick={() => {
          if (!editor) return;
          ;
        }}
      >Click</Button>
      <YourComponent /> */}
      <Box sx={{ height: 'calc(100% - 75px)', overflowY: 'auto' }}>
        {outs.map((item, index) => {
          console.log(item.res);
          return (
            <CustomList key={index}>
              <ListItem >
                <ListItemText id={`ref-${index}`} primary={<span dangerouslySetInnerHTML={{ __html: item.out }}></span>} />
                <CopyToClipboardButton toCopy={() => document.querySelector(`#ref-${index}`)?.textContent || ''} />
              </ListItem>
            </CustomList>
          )
        })}
      </Box>
    </Paper>
  )
}

export default OutputTab