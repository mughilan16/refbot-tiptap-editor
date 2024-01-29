import { Card, CardActionArea, CardActions, CardContent, Divider, Paper, TextField, styled } from '@mui/material';
import { Editor, NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import React, { useEffect, useState } from 'react'
import { elementToJson } from '../../RefBotPage/OutputTab/xmlToJsonInputForCite';
import { green, grey, indigo } from '@mui/material/colors';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import { useFormContext } from 'react-hook-form';
import { Node } from '@tiptap/pm/model';
import safeHtmlFormatter from '../../../utils/safeHtmlFormatter';
import { useRichTextEditorContext } from 'mui-tiptap';
import { FormFields } from '../../RefBotPage/RefInputDialog/RefInputDialog';
import CopyToClipboardButton from '../../Features/CopyToClipboardButton';


const CustomCard = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[100]} !important`,
    position: 'relative',
    marginBottom: `30px`,
    boxShadow: theme.shadows['2'],
    zIndex: 100,
    '&:hover': {
        border: `1px solid ${theme.palette.grey[400]} !important`,
        boxShadow: theme.shadows['2'],
    },
    "& .MuiDivider-root": {
        borderColor: `${theme.palette.grey[300]} !important`,
    },
    "&:before": {
        color: grey[100],
        backgroundColor: green[400],
        fontSize: '8px',
        padding: '0px 6px',
        borderRadius: '2px',
        minWidth: `60px`,
        textAlign: 'center',
        content: 'attr(data-label)',
        position: 'absolute',
        top: '0px',
        fontWeight: 800,
        left: '0px',
        zIndex: 101,
    },
    "&:hover .MuiCardContent-root:before": {
        color: grey[100],
        opacity: 1,
        zIndex: 102,
    },
    '& .MuiCardContent-root[data-label="Annotation"]': {
        backgroundColor: `${grey[50]} !important`,
    },
    '& .MuiCardContent-root[data-label="Input"]': {
        backgroundColor: `${grey[200]} !important`,
    },
    '& .MuiCardContent-root[data-label="Output"]': {
        backgroundColor: `${grey[200]} !important`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '& .MuiCardContent-root[data-label="Output"] [data-testid="ContentCopyIcon"]': {
        visibility: 'hidden',
    },
    '& .MuiCardContent-root[data-label="Output"]:hover [data-testid="ContentCopyIcon"]': {
        visibility: 'visible',
    },
    '& .MuiCardContent-root[data-label="Output"]:hover .MuiIconButton-root': {
        backgroundColor: theme.palette.grey[300]
    },
    '& .MuiCardContent-root': {
        position: 'relative',
        padding: '15px !important',
        fontFamily: 'monospace',
    },

    '& .MuiCardContent-root:before': {
        color: grey[400],
        backgroundColor: indigo[400],
        fontSize: '8px',
        padding: '0px 6px',
        borderRadius: '2px',
        minWidth: `60px`,
        textAlign: 'center',
        content: 'attr(data-label)',
        opacity: 0,
        position: 'absolute',
        top: '0px',
        fontWeight: 800,
        left: '0px',
        transition: `opacity .2s ease-in-out`,
        zIndex: 0,
    }

}));


type ReferenceViewProps = {
    node: Node,
    updateAttributes: (attribute: Record<string, any>) => void,
    editor: Editor
}

const ReferenceView = (props: ReferenceViewProps) => {
    const refVisibility = useMainTab(state => state.refVisibility);
    const style = useFormContext<FormFields>().watch('style');

    const index = props.node.attrs.index;

    const [output, setOutput] = useState('');

    const updateCitation = () => {
        let out = ''
        try {
            out = elementToJson({
                el: document.querySelector(`[data-index="${index}"] .content`),
                template: style?.value ?? 'apa',
                type: 'article',
            })?.out || '';
        } catch (error) {
            console.log(error);
        }
        console.log(out);
        setOutput(out);

        // props.editor.commands.updateAttributes('paragraph', { value: output, format: 'NormalToSafe' })

    }


    useEffect(() => {
        updateCitation();
    }, [props.node.textContent, style]);


    return (
        <NodeViewWrapper className="react-component">
            <CustomCard data-index={index} data-label={props.node.attrs.type}>
                {refVisibility.input && <CardContent data-label="Input">
                    {props.node.attrs.input}
                </CardContent>}
                {refVisibility.annotation && <CardContent data-label="Annotation">
                    <NodeViewContent className="content" />
                </CardContent>}
                {refVisibility.output && <CardContent data-label="Output">
                    <div id='output-container' dangerouslySetInnerHTML={{
                        __html: output
                    }}></div>
                    <CopyToClipboardButton
                        toCopy={() => {
                            const el = document.querySelector(`[data-index="${index}"] #output-container`);
                            console.log(el);
                            return el?.textContent?.trim() || ''
                        }}
                    />
                </CardContent>}
            </CustomCard>
        </NodeViewWrapper>
    )
}

export default ReferenceView