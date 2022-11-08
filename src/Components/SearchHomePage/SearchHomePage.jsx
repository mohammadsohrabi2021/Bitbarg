import { Grid, IconButton, InputBase } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
function SearchHomePage({setSearch,search}) {
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <Grid sx={{ border: '1px solid #727272 ', borderRadius: '10px' }} xs={12}>
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
    );
}

export default SearchHomePage;