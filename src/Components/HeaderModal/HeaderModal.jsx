import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
function HeaderModal({handleClose}) {
    return (
        <Grid item conatainer display={'flex'} alignItems={'center'} justifyContent={'space-between'} xs={12} marginBottom={1}>
            <Grid item>
                <Typography variant='h2' >{"قیمت ارز"}</Typography>
            </Grid>
            <Grid item>
                <IconButton onClick={handleClose} >
                    <CloseIcon sx={{ color: 'black' }} />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default HeaderModal;