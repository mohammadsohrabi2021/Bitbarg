import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import options from '../../Api/Api';
import Filter from '../../Components/Filter/Filter';
import FilterPrice from '../FilterPrice/FilterPrice';
import HeaderSinglePage from '../HeaderSinglePage/HeaderSinglePage';
import DataTitle from '../DataTitle/DataTitle';
import CardPageData from '../CardPageData/CardPageData';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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
                <DataTitle dataCoins={dataCoins} />
                <Grid container item pt={5}>
                    <Grid item sx={{ border: '1px solid #727272 ', borderRadius: '10px' }} >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }}
                            placeholder="جستجو"
                            onChange={handleSearch}
                            value={search}
                            name='search'
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Grid>
                    <Grid mx={2}>
                        <Filter handleFilterBtn={handleFilterBtn} />
                    </Grid>
                    <FilterPrice dataCoins={dataCoins} />
                </Grid>
                <Grid mt={5}>
                    <HeaderSinglePage />
                    <Grid>
                        <CardPageData search={search} dataCoins={dataCoins} filter={filter} setDataCoins={setDataCoins} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default SinglePage;