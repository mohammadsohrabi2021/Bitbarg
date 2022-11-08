import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Search from '../../Components/SearchHomePage/SearchHomePage';
import { useCallback } from "react"
import FilterPrice from '../FilterPrice/FilterPrice';
function NavbarLogic({ setSearch, setUnit, setStatus, status, setFiltered, filtered }) {
  const handleDescendingPrice = useCallback(() => {
    setFiltered(filtered.sort((a, b) => b.price - a.price))
  }, [filtered])
  const handleAscendingPrice = useCallback(() => {
    setFiltered(filtered.sort((a, b) => a.price - b.price))
  }, [filtered])
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
          <FilterPrice setUnit={setUnit} handleAscendingPrice={handleAscendingPrice} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavbarLogic;