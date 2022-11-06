import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import options from '../../Api/Api';
import Filter from '../../Components/Filter/Filter';
import FilterPrice from '../FilterPrice/FilterPrice';
import HeaderSinglePage from '../HeaderSinglePage/HeaderSinglePage';
import DataTitle from '../DataTitle/DataTitle';
function SinglePage() {
    const [dataCoins, setDataCoins] = useState([])
    const [filter, setFilter] = useState('favoriteData')
    const handleData = async () => {
        const data = await options('/coins').then(res => res.data.data.coins)
        setDataCoins(data)
    }
    useEffect(() => {
        handleData()
    }, [])
    const handelCheck = uuid => {
        setDataCoins(dataCoins.map(coin => coin.uuid === uuid ? { ...coin, lVolume: !coin.lVolume } : coin))
    }

    const handleFilterBtn = title => {
        setFilter(title)
    }
    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <Grid>
            <Container sx={{ background: '#fff', boxShadow: 2, borderRadius: 3 }}>
                <DataTitle dataCoins={dataCoins}/>
                <Grid container item pt={5}>
                    <input value={search} onChange={handleSearch} placeholder='جستجو' />
                    <Filter handleFilterBtn={handleFilterBtn} />
                    <FilterPrice dataCoins={dataCoins} />
                </Grid>
                <Grid mt={5}>
                    <HeaderSinglePage />
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
                </Grid>
            </Container>
        </Grid>
    );
}

export default SinglePage;