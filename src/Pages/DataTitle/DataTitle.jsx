import { Grid, Typography } from '@mui/material';
import React from 'react';

function DataTitle({ dataCoins }) {
    return (
        <Grid>
            <Grid sx={{ display: 'flex', gap: 2 }} mt={15} pt={5}>
                <Typography variant='h2'>
                    {'قیمت لحظه ای '}
                </Typography>
                <Typography>
                    {`${dataCoins.length} ارز دیجیتال`}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default DataTitle;