import { Box, Stack, Typography, styled } from '@mui/material'
import { useMainTab } from '../../../hooks/zustand/useMainTab'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { green, grey, red } from '@mui/material/colors';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const StyledStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'center',
    margin: '0 5px',
    "& .MuiBox-root:has([data-testid='ThumbUpAltIcon'])": {
        color: green[700],
        backgroundColor: green[100],
    },
    "& .MuiBox-root:has([data-testid='ThumbDownAltIcon'])": {
        backgroundColor: red[100],
        color: red[700],
    },
    "& .MuiBox-root:has([data-testid='FormatListBulletedIcon'])": {
        backgroundColor: grey[300],
        color: grey[700],
    },
    "& .MuiBox-root": {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'cetner',
        gap: '4px',
        padding: '0px 4px',
        borderRadius: '2px',
        minWidth: '50px',
    },
    "& .MuiSvgIcon-root":{
        fontSize: '18px',
    }
}));

const BeedBackCountButton = () => {

    const feedBack = useMainTab(state => state.feedBack);

    return (
        <StyledStack>
            <Box>
                <FormatListBulletedIcon />
                <Typography variant='subtitle2'>{feedBack.Total}</Typography>
            </Box>
            <Box>
                <ThumbUpAltIcon />
                <Typography variant='subtitle2'>{feedBack.Like}</Typography>
            </Box>
            <Box>
                <ThumbDownAltIcon />
                <Typography variant='subtitle2'>{feedBack.DisLike}</Typography>
            </Box>
        </StyledStack>
    )
}

export default BeedBackCountButton