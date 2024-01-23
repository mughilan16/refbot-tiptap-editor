import { Box, Button, Divider, List, ListItem, ListItemText, Paper, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useMainTab } from '../../../hooks/zustand/useMainTab'
import CopyToClipboardButton from '../../Features/CopyToClipboardButton'
import ReferenceStyleInput from './ReferenceStyleInput'
import { useRichTextEditorContext } from 'mui-tiptap'
import xmlToJsonInputForCite from './xmlToJsonInputForCite'
import YourComponent from './Citation'
import { useMemo } from 'react'

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

  const outs: string[] = useMemo(() => {
    return xmlToJsonInputForCite({ xml: editor?.getHTML() || '' })
  }, [currentTab == 'Output'])

  return (
    <Paper elevation={2} sx={{ height: 'calc(100vh - 90px)', backgroundColor: 'white', padding: '5px', borderRadius: '5px', }}>
      <ReferenceStyleInput />
      {/* 
      <Button
        onClick={() => {
          if (!editor) return;
          ;
        }}
      >Click</Button>
      <YourComponent /> */}
      <Box sx={{ height: 'calc(100% - 65px)', overflowY: 'auto' }}>
        {outs.map((item, index) => (
          <CustomList key={index}>
            <ListItem >
              <ListItemText primary={<span dangerouslySetInnerHTML={{ __html: item }}></span>} />
              <CopyToClipboardButton toCopy={item} />
            </ListItem>
          </CustomList>
        ))}
      </Box>
    </Paper>
  )
}

export default OutputTab