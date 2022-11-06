import { Button, Grid } from '@mui/material';
import React from 'react';

function Filter({handleFilterBtn}) {
   
    const filterData = [
        { id: 1, title: true, name: 'نشان شده ها' },
    ]
    return (
        <Grid>
             {filterData.map(filterBtn => (
                    <Grid key={filterBtn.id}>
                        <Button variant='contained' onClick={() => handleFilterBtn(filterBtn.title)}>
                            {filterBtn.name}
                        </Button>
                    </Grid>

                ))}
        </Grid>
    );
}

export default Filter;