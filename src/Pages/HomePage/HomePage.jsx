import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/CardHome'
import options from '../../Api/Api';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
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
    const handelCheck = uuid => {
        setDataCoins(dataCoins.map(coin => coin.uuid === uuid ? { ...coin, lVolume: !coin.lVolume } : coin))
    }
    return (
        <Grid>
            <Header />
            <Card dataCoins={dataCoins} />
            {
                dataCoins.map((item, index) =>
                    <Grid key={index}>
                        <img width={'100px'} src={item.iconUrl} />
                        <h3>{item.symbol}</h3>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.change}</h3>
                        <h3>{item.marketCap}</h3>
                        <Grid onClick={() => handelCheck(item.uuid)}>
                            <h3>{item.lVolume ? <StarIcon /> : <StarBorderIcon />}</h3>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    );
}

export default HomePage;