import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import React from 'react'
import CopyToClipboardButton from '../Features/CopyToClipboardButton'
import { useMainTab } from '../../hooks/zustand/useMainTab'
import { grey } from '@mui/material/colors'

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
  const xmlData = useMainTab(state => state.xmlData);

  return (
    <Box sx={{ height: '83vh', backgroundColor: 'white', padding: '5px', borderRadius: '5px', overflowY: 'auto' }}>
      {xmlData.map(item => (
        <CustomList>
          <ListItem >
            <ListItemText primary={<span dangerouslySetInnerHTML={{ __html: item }}></span>} />
            <CopyToClipboardButton toCopy={item} />
          </ListItem>
        </CustomList>
      ))}
    </Box>
  )
}

export default OutputTab