import { useEditor } from '@tiptap/react';
import { RichTextEditorProvider } from 'mui-tiptap'
import React from 'react'
import useExtensions from '../../Editor/useExtensions';

const RefbotEditorProvider = ({ children }: { children: React.ReactNode }) => {
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });

  const editor = useEditor({
    extensions,
    content: '',
  })

  return (
    <RichTextEditorProvider editor={editor}>
      {children}
    </RichTextEditorProvider>
  )
}

export default RefbotEditorProvider
