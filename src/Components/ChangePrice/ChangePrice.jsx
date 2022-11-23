import { Button, Grid } from '@mui/material';
import React from 'react';

function ChangePrice({ setUnit}) {
    return (
        <Grid item sx={{ mx: { xs: '10px', sm: '50px', md: '0px' } }} display={"flex"} sm={2} md={6} >
            <Button variant='contained' mx={1} onClick={() => setUnit(true)} >
                {"تومان"}
            </Button>
            <Button variant='contained' onClick={() => setUnit(false)} >
                {"تتر"}
            </Button>
        </Grid>
    );
}

export default ChangePrice;