import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Card, CardActions, CardContent, Checkbox, styled } from '@mui/material';
import { green, grey, indigo, red } from '@mui/material/colors';
import { Node } from '@tiptap/pm/model';
import { Editor, NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import CopyToClipboardButton from '../../Features/CopyToClipboardButton';
import { elementToJson } from '../../RefBotPage/OutputTab/xmlToJsonInputForCite';
import { FormFields } from '../../RefBotPage/RefInputDialog/RefInputDialog';
import safeHtmlFormatter from '../../../utils/safeHtmlFormatter';


const CustomCard = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[100]} !important`,
    position: 'relative',
    marginBottom: `30px`,
    boxShadow: theme.shadows['2'],
    borderLeft: `3px solid ${grey[600]} !important`,
    zIndex: 100,
    display: 'flex',
    '&:hover': {
        border: `1px solid ${theme.palette.grey[400]} !important`,
        borderLeft: `3px solid ${grey[600]} !important`,
        boxShadow: theme.shadows['2'],
    },
    "&:has([data-testid='ThumbUpAltIcon'])": {
        borderLeft: `3px solid ${green[500]} !important`,
    },
    "&:has([data-testid='ThumbDownAltIcon'])": {
        borderLeft: `3px solid ${red[500]} !important`,
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
        right: '0px',
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

    '& .MuiCardContent-root [data-testid="ContentCopyIcon"]': {
        visibility: 'hidden',
    },
    '& .MuiCardContent-root:hover [data-testid="ContentCopyIcon"]': {
        visibility: 'visible',
    },
    '& .MuiCardContent-root[data-label="Output"]:hover .MuiIconButton-root': {
        backgroundColor: theme.palette.grey[300]
    },
    '& .MuiCardContent-root': {
        position: 'relative',
        padding: '15px !important',
        fontFamily: 'monospace',
        backgroundColor: `${grey[200]} !important`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '& .MuiCardContent-root[data-show="false"]': {
        display: 'none',
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
        right: '0px',
        transition: `opacity .2s ease-in-out`,
        zIndex: 0,
    },

    "& .MuiCardActions-root": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 11px',
        gap: '5px',
    },

    "& .MuiCardActions-root .MuiButtonBase-root": {
        margin: '0',
    },

    "& .MuiBox-root": {
        width: `calc(100% - 58px)`,
    },
}));


type ReferenceViewProps = {
    node: Node,
    updateAttributes: (attribute: Record<string, any>) => void,
    editor: Editor
}

const ReferenceView = (props: ReferenceViewProps) => {
    const refVisibility = useMainTab(state => state.refVisibility);
    const style = useFormContext<FormFields>().watch('style');

    console.log(props);

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
            out = safeHtmlFormatter({format: 'SafeToNormal', value: out})
        } catch (error) {
            console.log(error);
        }
        console.log(out);
        setOutput(out);

        // props.editor.commands.updateAttributes('paragraph', { value: output, format: 'NormalToSafe' })

    }
    const likeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updateAttributes({
            likeStatus: e.target.value,
        })
    }

    useEffect(() => {
        updateCitation();
    }, [props.node.textContent, style]);

    const likeStatus = props.node.attrs.likeStatus;


    return (
        <NodeViewWrapper className="react-component">
            <CustomCard data-index={index} data-label={props.node.attrs.type}>
                <CardActions>
                    <Checkbox
                        value={'Like'}
                        checked={likeStatus == "Like"}
                        color='success'
                        icon={<ThumbUpOffAltIcon />}
                        checkedIcon={<ThumbUpAltIcon />}
                        onChange={likeChangeHandler}
                    />
                    <Checkbox
                        color='error'
                        value={'DisLike'}
                        checked={likeStatus == "DisLike"}
                        icon={<ThumbDownOffAltIcon />}
                        checkedIcon={<ThumbDownAltIcon />}
                        onChange={likeChangeHandler}
                    />
                </CardActions>
                <Box>
                    <CardContent data-show={refVisibility.input} data-label="Input">
                        {props.node.attrs.input}
                        <CopyToClipboardButton
                            toCopy={props.node.attrs.input}
                        />
                    </CardContent>
                    <CardContent data-show={refVisibility.annotation} data-label="Annotation">
                        <NodeViewContent className="content" />
                    </CardContent>
                    <CardContent data-show={refVisibility.output} data-label="Output">
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
                    </CardContent>
                </Box>
            </CustomCard>
        </NodeViewWrapper>
    )
}

export default ReferenceView