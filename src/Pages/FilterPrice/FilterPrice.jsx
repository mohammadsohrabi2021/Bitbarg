import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button, Grid } from '@mui/material';
function FilterPrice({ setUnit }) {
    const [price, setPrice] = React.useState('');
    const handleChange = (event) => {
        setPrice(event.target.value);
    };
    return (
        <Grid container >
            <Grid item >
                <Box  sx={{ minWidth: 120 }}>
                    <FormControl px={2}>
                        <NativeSelect
                            defaultValue={10}
                            inputProps={{
                                name: 'price',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>{"ترتیب براساس"}</option>
                            <option value={20}>{"کم ترین قیمت"}</option>
                            <option value={30}>{"بیشترین قیمت"}</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item mx={5} display={"flex"} xs={6} md={3} >
                <Button variant='contained' mx={1} onClick={() => setUnit(true)} >
                    {"تومان"}
                </Button>
                <Button variant='contained' onClick={() => setUnit(false)} >
                    {"تتر"}
                </Button>
            </Grid>

        </Grid>
    );
}

export default FilterPrice;