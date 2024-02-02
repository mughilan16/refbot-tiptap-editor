import { Button, ButtonGroup } from '@mui/material';
import { useMainTab } from '../../../hooks/zustand/useMainTab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const checks: { label: string, key: "input" | "annotation" | "output" }[] = [
    {
        label: `Input`,
        key: 'input',
    },
    {
        label: `Annotation`,
        key: 'annotation',
    },
    {
        label: `Output`,
        key: 'output',
    },
] as const;

const RefbotTabButtons = () => {

    const refVisibility = useMainTab(state => state.refVisibility);
    const dispatch = useMainTab(state => state.dispatch);

    return (
        <>
            {false ?
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => dispatch({
                        type: 'Function', set(state) {
                            state.refVisibility.input = !refVisibility.input;
                        },
                    })} variant={refVisibility.input ? 'contained' : 'outlined'} size='small'>Input</Button>
                    <Button onClick={() => dispatch({
                        type: 'Function', set(state) {
                            state.refVisibility.annotation = !refVisibility.annotation;
                        },
                    })} variant={refVisibility.annotation ? 'contained' : 'outlined'} size='small'>Annotation</Button>
                    <Button onClick={() => dispatch({
                        type: 'Function', set(state) {
                            state.refVisibility.output = !refVisibility.output;
                        },
                    })} variant={refVisibility.output ? 'contained' : 'outlined'} size='small'>Output</Button>
                </ButtonGroup>
                :
                <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                    {checks.map((check, index) => (
                        <FormControlLabel
                            key={index}
                            onChange={() => dispatch({
                                type: 'Function', set(state) {
                                    state.refVisibility[check.key] = !refVisibility[check.key];
                                },
                            })}
                            checked={refVisibility[check.key]}
                            control={<Checkbox size='small' />}
                            label={check.label}
                        />
                    ))}
                </FormGroup>
            }

        </>
    )
}

export default RefbotTabButtons