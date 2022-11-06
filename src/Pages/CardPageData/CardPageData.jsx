import { Grid, Typography } from '@mui/material';
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
                            <Typography>{item.name}</Typography>
                            <Typography>{item.symbol}</Typography>
                        </Grid>
                        <Typography>{item.price}</Typography>
                        <Typography>{item.marketCap}</Typography>
                        <Typography>{`${item.change} %`}</Typography>
                        <Grid onClick={() => handelCheck(item.uuid)}>
                            <Typography>{item.lVolume ? <StarIcon /> : <StarBorderIcon />}</Typography>
                        </Grid>
                    </Grid>
                )
            }

        </Grid>
    );
}

export default CardPageData;