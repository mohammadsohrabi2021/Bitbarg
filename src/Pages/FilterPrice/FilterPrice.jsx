import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Grid } from '@mui/material';
function FilterPrice({dataCoins}) {
    const [price, setPrice] = React.useState('');
    console.log(dataCoins);
    const handleChange = (event) => {
        setPrice(event.target.value);
    };
    return (
        <Grid>

            <Box sx={{ minWidth: 120 }}>
                <FormControl>
                    <NativeSelect
                        defaultValue={10}
                        inputProps={{
                            name: 'age',
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
    );
}

export default FilterPrice;