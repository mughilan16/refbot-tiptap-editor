import { Button, Tooltip, TooltipProps } from '@mui/material'
import React from 'react'

type WpsTooltipProps = Omit<TooltipProps, 'children'> & {
    children: JSX.Element,
    xAxis?: number,
    yAxis?: number, 
}

const WpsTooltip = ({ children, xAxis = 0, yAxis = 12, ...rest }: WpsTooltipProps) => {
    return (
        <Tooltip
            placement='top-end'
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [xAxis, yAxis],
                            },
                        },
                    ],
                },
            }}
            {...rest}
        >
            {children}
        </Tooltip>
    )
}

export default WpsTooltip