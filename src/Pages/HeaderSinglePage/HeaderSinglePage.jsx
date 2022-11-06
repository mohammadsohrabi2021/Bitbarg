import { Grid ,Typography } from '@mui/material';
import React from 'react';
import HeaderTitle from '../../Data/DataSinglePage';
function HeaderSinglePage() {
    return (
        <Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {HeaderTitle.map(item => <Typography>{item.name}</Typography>)}
            </Grid>
        </Grid>
    );
}

export default HeaderSinglePage;