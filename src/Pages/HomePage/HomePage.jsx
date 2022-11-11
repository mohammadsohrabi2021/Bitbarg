import { Grid } from '@mui/material';
import { useEffect } from 'react';
import Card from '../../Components/Card/CardHome'

function HomePage() {
    useEffect(() => {
        document.title = "بیت برگ |خرید بیت کوین , فروش بیت کوین , قیمت بیت کوین"
    }, [])
    return (
        <Grid>
            <Card/>
        </Grid>
    );
}

export default HomePage;