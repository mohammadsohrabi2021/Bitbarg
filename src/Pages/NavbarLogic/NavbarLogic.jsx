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
    <Grid mt={3} display={'flex'}  alignItems={"center"} justifyContent={'space-between'} spacing={1} marginBottom={2}  >

      <Grid item xs={12} md={4} mx={2} >
        <Search setSearch={setSearch} />
      </Grid>
      <Grid item  xs={12} md={4}>
        <FormControlLabel
          control={<Switch onChange={() => setStatus(!status)} />}
          label="نشان شده ها"
          labelPlacement="Left"
        />
      </Grid>
     <Grid item px={10} xs={12} md={4}>
       <FilterPrice setUnit={setUnit} />
     </Grid>
    </Grid>
  );
}

export default NavbarLogic;