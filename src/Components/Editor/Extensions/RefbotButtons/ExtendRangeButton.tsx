import SaveIcon from '@mui/icons-material/Save';
import { MenuButton, MenuButtonProps, useRichTextEditorContext } from 'mui-tiptap';

export type ExtendRangeButtonProps = Partial<MenuButtonProps>;

export function ExtendRangeButton(props: ExtendRangeButtonProps) {
    const editor = useRichTextEditorContext();
    // const fileSave = useSelector(state => state.fileSave);

    return (
        <MenuButton
            tooltipLabel="Extend mark selection"
            IconComponent={(props) => <SaveIcon {...props} />}
            // disabled={fileSave.isSaving}
            // selected={editor?.isActive("bold") ?? false}
            // disabled={!editor?.isEditable || !editor.can().toggleBold()}
            onClick={() => {
                const selecton = editor?.state.selection;
                editor?.commands.extendMarkRange('author');
            }}
            {...props}
        />
    );
}
