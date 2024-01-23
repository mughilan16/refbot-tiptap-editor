import { Button, styled } from '@mui/material'
import React from 'react'
import useReferenceElements from '../../../../hooks/useReferenceElements';
import { useRichTextEditorContext } from 'mui-tiptap';
import referenceElements from '../../../../utils/faker/referenceElements';

const CustomButton = styled(Button)({
    padding: `2px 4px`,
});

const refTags = referenceElements.map(refEl => refEl.name).filter(i => !['author'].includes(i));

const RefbotButtons = () => {
    // const { data } = useReferenceElements();
    const editor = useRichTextEditorContext();


    const onClickHandler = (markName: string) => {
        if (!editor) return;

        const state = editor.state;
        const { from, to, empty, $from } = state.selection;
        editor.state.doc.nodesBetween(from, to, (node) => {
            const tr = editor.state.tr;
            node.marks.forEach(mark => {
                if (refTags.includes(mark.type.name)) {
                    tr.removeMark(from, to, mark.type);
                }
            })
            tr.addMark(from, to, editor.schema.marks[markName].create());
            editor.view.dispatch(tr);
        })
    }

    return (
        <>
            {/* {data?.data.referenceStyles.map(item => ( */}
            {referenceElements.map((item, index) => (
                <CustomButton size="small"
                    key={index}
                    onClick={() => onClickHandler(item.name)}
                    style={{ backgroundColor: item.color }}>{item.name}</CustomButton>
            ))}
        </>
    )
}

export default RefbotButtons