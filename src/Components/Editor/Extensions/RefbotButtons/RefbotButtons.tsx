import { Button, styled } from '@mui/material';
import { useRichTextEditorContext } from 'mui-tiptap';
import referenceElements from '../../../../utils/faker/referenceElements';
import ReferenceStyleInput from '../../../RefBotPage/OutputTab/ReferenceStyleInput';
import { useMainTab } from '../../../../hooks/zustand/useMainTab';

const CustomButton = styled(Button)({
    padding: `2px 4px`,
});

const refTags = referenceElements.map(refEl => refEl.name).filter(i => !['author'].includes(i));

const RefbotButtons = () => {
    // const { data } = useReferenceElements();
    const editor = useRichTextEditorContext();
    const dispatch = useMainTab(state => state.dispatch);


    const onClickHandler = (markName: string) => {
        if (!editor) return;

        const state = editor.state;
        const { from, to, empty, $from } = state.selection;
        editor.state.doc.nodesBetween(from, to, (node) => {
            const tr = editor.state.tr;
            const marks = node.marks;
            const targetMark = marks.find(mark => mark.type.name == markName)
            if (targetMark) {
                tr.removeMark(from, to, targetMark.type);
            } else {
                node.marks.forEach(mark => {
                    if (refTags.includes(mark.type.name)) {
                        tr.removeMark(from, to, mark.type);
                    }
                })
                tr.addMark(from, to, editor.schema.marks[markName].create());
            }
            editor.view.dispatch(tr);
        })
    }



    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5px' }}>
            {/* {data?.data.referenceStyles.map(item => ( */}
            {referenceElements.map((item, index) => (
                <CustomButton size="small"
                    key={index}
                    variant='contained'
                    onClick={() => onClickHandler(item.name)}
                    style={{ backgroundColor: item.color }}
                >{item.name}</CustomButton>
            ))}
            <CustomButton size="small"
                variant='contained'
                onClick={() => {
                    dispatch({
                        type: 'ChangeInputDailogVisibility',
                        payload: {
                            show: true,
                        }
                    })
                }}
            >Input</CustomButton>
            <ReferenceStyleInput />
        </div>
    )
}

export default RefbotButtons