import { Grid } from '@mui/material';
import React from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/CardHome'
function HomePage() {
    return (
        <Grid>
            <Header/>
            <Card/>
        </Grid>
    );
}

export default HomePage;