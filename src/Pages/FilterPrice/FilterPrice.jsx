import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button, Grid } from '@mui/material';
function FilterPrice({ setUnit,handleAscendingPrice }) {
    const [price, setPrice] = React.useState('');
    const handleChange = (event) => {
        setPrice(event.target.value);
    };
    return (
        <Grid container  sm={12} md={12} item sx={{ flexDirection: { xs: "column", md: "row" } ,width:{ lg: "100%", md: "100%" , xs:"100%" }}}>
            <Grid item sm={10} md={6}  display={'flex'} alignItems={"center"} justifyContent={'space-between'}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <FormControl px={2}>
                        <NativeSelect 
                            defaultValue={10}
                            inputProps={{
                                name: 'price',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option onClick={handleAscendingPrice} value={10}>{"ترتیب براساس"}</option>
                            <option value={20}>{"کم ترین قیمت"}</option>
                            <option value={30}>{"بیشترین قیمت"}</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item mt={2} sx={{ mx:{xs:'10px',sm:'50px',md:'0px'}}} display={"flex"}  sm={2} md={6} >
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