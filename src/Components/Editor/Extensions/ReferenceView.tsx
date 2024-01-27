import { Card, CardActionArea, CardActions, CardContent, Divider, Paper, TextField, styled } from '@mui/material';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import React, { useEffect, useState } from 'react'
import { elementToJson } from '../../RefBotPage/OutputTab/xmlToJsonInputForCite';
import { green, grey, indigo } from '@mui/material/colors';
import { useMainTab } from '../../../hooks/zustand/useMainTab';


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
        position: 'static',
        top: '100px',
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
    },
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
    position: 'relative',
    padding: '15px !important',
    fontFamily: 'monospace',
    "&:before": {
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
    },
}));

const ReferenceView = (props) => {
    const increase = () => {
        props.updateAttributes({
            count: props.node.attrs.count + 1,
        })
    }

    const refVisibility = useMainTab(state => state.refVisibility);

    const key = props.node.attrs.key;

    const [html, setHtml] = useState('');

    useEffect(() => {
        setHtml(() => {
            return elementToJson({
                el: document.querySelector(`div[index="${key}"]`),
                template: 'apa',
                type: 'html',
            })?.out || '';
        })
        // console.log(document.querySelector(`div[index="${key}"]`));
    }, [props.node.content.size]);
    console.log(props.node.content);


    return (
        <NodeViewWrapper className="react-component">
            <CustomCard data-empty="" data-label={props.node.attrs.type}>
                {refVisibility.input && <CustomCardContent data-empty="" data-label="Input">
                    {props.node.attrs.input}
                </CustomCardContent>}
                <CustomCardContent data-empty="" data-label="Annotation">
                    <NodeViewContent index={key} className="content" />
                </CustomCardContent>
                {refVisibility.output && <CustomCardContent data-empty="" data-label="Output">
                    <div dangerouslySetInnerHTML={{
                        __html: html
                    }}></div>
                </CustomCardContent>}
            </CustomCard>
        </NodeViewWrapper>
    )
}

export default ReferenceView