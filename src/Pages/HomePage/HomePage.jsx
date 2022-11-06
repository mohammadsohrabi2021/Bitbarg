import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/CardHome'
import options from '../../Api/Api';

function HomePage() {
    const [dataCoins, setDataCoins] = useState([])
    const handleData = async () => {
        const data = await options('/coins').then(res => res.data.data.coins)
        setDataCoins(data)
        // console.log(data);
    }
    // console.log(dataCoins);
    useEffect(() => {
        handleData()
    }, [])
   

    return (
        <Grid>
            <Card dataCoins={dataCoins} />
        </Grid>
    );
}

export default HomePage;