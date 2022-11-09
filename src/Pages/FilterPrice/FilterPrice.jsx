import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
function FilterPrice({ setUnit, statusPrice, setStatusPrice }) {
    const handleChangeStatus = (e) => {
        setStatusPrice(e.target.value);
    };
    return (
        <Grid container sm={12} md={12} item sx={{ flexDirection: { xs: "column", md: "row" }, width: { lg: "100%", md: "100%", xs: "100%" } }}>
            <Grid px={2} item sm={10} md={6} display={'flex'} alignItems={"center"} justifyContent={'space-between'}>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label">{'قیمت بر اساس'}</InputLabel>
                        <Select
                            p={0}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={statusPrice}
                            label="قیمت بر اساس"
                            onChange={handleChangeStatus}
                        >
                            <MenuItem value={"ascending"}>
                                <Typography>{"کمترین قیمت"}</Typography>
                            </MenuItem>
                            <MenuItem value={"descending"}>
                                <Typography>{"بیشترین قیمت"}</Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
            </Grid>

        </Grid>
    );
}

export default FilterPrice;