import React, { useState, useContext, useEffect } from 'react';
import { Container, FormControlLabel, Grid, Switch } from '@mui/material';
// import Filter from '../../Components/Filter/Filter';
import FilterPrice from '../FilterPrice/FilterPrice';
import HeaderSinglePage from '../HeaderSinglePage/HeaderSinglePage';
import DataTitle from '../DataTitle/DataTitle';
import CardPageData from '../CardPageData/CardPageData';
import { DataContext } from '../../Context/CoinProvider';
import SearchHomePage from '../../Components/SearchHomePage/SearchHomePage';
function SinglePage() {

    const [search, setSearch] = useState('')
    const [unit, setUnit] = useState(true);
    const { dataCoins, setDataCoins } = useContext(DataContext)
    const [status, setStatus] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const handleStar = (id) => {
        setDataCoins(
            dataCoins.map((coin) =>
                coin.uuid === id ? { ...coin, star: !coin.star } : coin
            )
        );
    };
    const handleStatus = () => {
        if (status) {
            setFiltered(dataCoins.filter((coin) => coin.star === true));
        } else {
            setFiltered(dataCoins);
        }
    };
    useEffect(() => {
        handleStatus();
    }, [status, dataCoins, filtered]);
    return (
        <Grid>
            <Container sx={{ background: '#fff', boxShadow: 2, borderRadius: 3 }}>
                <DataTitle dataCoins={dataCoins} />
                <Grid container item pt={5}>
                    <Grid>
                        <SearchHomePage search={search} setSearch={setSearch} />
                    </Grid>
                    <Grid mx={2}>
                        <FormControlLabel
                            control={<Switch onChange={() => setStatus(!status)} />}
                            label="نشان شده ها"
                            labelPlacement="Left"
                        />
                        {/* <Filter handleFilterBtn={handleFilterBtn} /> */}
                    </Grid>
                    <FilterPrice />
                </Grid>
                <Grid mt={5}>
                    <HeaderSinglePage />
                    <Grid>
                        <CardPageData search={search} dataCoins={dataCoins} status={status} setDataCoins={setDataCoins} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default SinglePage;