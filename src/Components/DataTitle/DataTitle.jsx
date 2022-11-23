import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function DataTitle({ dataCoins }) {
    return (
        <Grid mt={10} xs={12}>
            <Grid sx={{ direction: 'ltr' }} display={{md:'none'}}>
                <Link to={'/'}>
                    <Button variant='outlined'>
                        <KeyboardBackspaceIcon />  Home
                    </Button>
                </Link>
            </Grid>
            <Grid sx={{ display: 'flex', gap: 2 }} pt={5}>
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