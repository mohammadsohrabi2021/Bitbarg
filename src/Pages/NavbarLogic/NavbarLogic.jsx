import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Search from '../../Components/SearchHomePage/SearchHomePage';
import { useCallback } from "react"
import FilterPrice from '../FilterPrice/FilterPrice';
import { useEffect } from 'react';
function NavbarLogic({ setSearch, setUnit, setStatus, status, setFilterPrice, filterPrice }) {
  const [statusPrice,setStatusPrice]=useState('')
  const handleDescendingPrice = useCallback(() => {
    const coinData = [...filterPrice]
    if (statusPrice === 'ascending') {
      setFilterPrice(coinData.sort((a, b) => a.price - b.price));

    } else if (statusPrice === 'descending') {
      setFilterPrice(coinData.sort((a, b) => b.price - a.price));

    }
  }, [statusPrice])


  useEffect(() => {
    handleDescendingPrice();
  }, [ statusPrice]);

  return (
    <Grid xs={12} container item mt={3} display={'flex'} alignItems={"center"} justifyContent={'space-evenly'}  marginBottom={2} sx={{ flexDirection: { xs: "column", md: "row" } ,width:{ lg: "100%", md: "100%" , xs:"100%" }}}>
      <Grid container item xs={12}  md={4}>
        <Search setSearch={setSearch} />
      </Grid>
      <Grid item display={'flex'} alignItems={'center'} justifyContent={'center'} sm={6}  md={8}>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={<Switch onChange={() => setStatus(!status)} />}
            label="نشان شده ها"
            labelPlacement="Left"
          />
        </Grid>
        <Grid container item  xs={12} sm={6} md={8}>
          <FilterPrice setUnit={setUnit}  statusPrice={statusPrice} setStatusPrice={setStatusPrice}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavbarLogic;