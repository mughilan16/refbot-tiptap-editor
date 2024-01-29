import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';

type CopyToClipboardButtonProps = {
    toCopy: string | (() => string),
}

type CopyState = { icon: 'copy' | 'tick' | 'wrong' }

const Icons: Record<CopyState['icon'], React.ReactElement> = {
    copy: <ContentCopyIcon color='primary' fontSize='small' />,
    tick: <CheckCircleIcon color='success' fontSize='small' />,
    wrong: <CancelIcon color='error' fontSize='small' />,
}


const CopyToClipboardButton = ({ toCopy }: CopyToClipboardButtonProps) => {

    const [state, setState] = useState<CopyState>({
        icon: 'copy',
    });

    const onClickHandler = async () => {
        let text = '';
        if (typeof toCopy == 'function') {
            text = toCopy();
        } else if (typeof toCopy == 'string') {
            text = toCopy;
        }
        try {
            await navigator.clipboard.writeText(text);
            setState(pre => ({ ...pre, icon: 'tick' }))
        } catch (error) {
            setState(pre => ({ ...pre, icon: 'wrong' }))
        } finally {
            setTimeout(() => {
                setState(pre => ({ ...pre, icon: 'copy' }))
            }, 1500);
        }
    }

    return (
        <Tooltip
            placement='top'
            title="Copy"
        >
            <IconButton
                onClick={onClickHandler}
            >
                {Icons[state.icon]}
            </IconButton>
        </Tooltip>
    )
}

export default CopyToClipboardButton