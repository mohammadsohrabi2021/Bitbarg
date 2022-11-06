import { Grid } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
function CardPageData({dataCoins,search,filter,setDataCoins}) {
    const handelCheck = uuid => {
        setDataCoins(dataCoins.map(coin => coin.uuid === uuid ? { ...coin, lVolume: !coin.lVolume } : coin))
    }
    return (
        <Grid>
            {
                dataCoins.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'favoriteData' ? true : todo.lVolume === filter)).map((item, index) =>
                    <Grid key={index} item mt={10} sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-around',

                    }}>
                        <img width={'50px'} src={item.iconUrl} />
                        <Grid>
                            <h3>{item.name}</h3>
                            <h3>{item.symbol}</h3>
                        </Grid>
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

export default CardPageData;