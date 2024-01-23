import { Button, styled } from '@mui/material'
import React from 'react'
import useReferenceElements from '../../../../hooks/useReferenceElements';
import { useRichTextEditorContext } from 'mui-tiptap';
import referenceElements from '../../../../utils/faker/referenceElements';

const CustomButton = styled(Button)({
    padding: `2px 4px`,
});

const RefbotButtons = () => {
    // return commands.setMark(this.name, attributes)
    const { data } = useReferenceElements();
    const editor = useRichTextEditorContext();
    // const editor = useRichTextEditorContext();

    const selectionHandler = ({ tag }: { tag: string }) => {
        if (editor) {
            editor.state.selection;
        }
    }
    const insertionHandler = ({ tag }: { tag: string }) => {
        if (editor) {
            editor.state.selection;
        }
    }

    


    const onClickHandler = (markName: string) => {
        if (!editor) return;

        const state = editor.state;
        const { from, to, empty } = state.selection;
        const tr = editor.state.tr;
        if (!empty) {
            const marks = state.doc.resolve(from).marks();
            marks.map(mark => {
                console.log(mark.type);
                tr.removeMark(from, to, mark.type);
            })
            tr.addMark(from, to, editor.schema.marks[markName].create())
            editor.view.dispatch(tr);
        }
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