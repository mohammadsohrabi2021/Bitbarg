import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
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
            <Header />
            <Card dataCoins={dataCoins}/>
            {
                dataCoins.map((item,index)=>
                    <Grid key={index}>
                    <img width={'100px'} src={item.iconUrl} />
                    <h3>{item.symbol}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    <h3>{item.change}</h3>
                    <h3>{item.marketCap}</h3>

                </Grid>
                    )
            }
        </Grid>
    );
}

export default HomePage;