import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Typography } from '@mui/material';
function BoxItemModal({ dataCoins,search }) {

    return (
        <ListItem component="div" disablePadding sx={{ padding: 1 }}>
            <ListItemButton>
                <ListItemText sx={{ display:'flex' }}>
                    {
                        dataCoins.filter(item => item.name.toUpperCase().includes(search.toUpperCase())).map(item => <Grid>
                            <img width={'100px'} src={item.iconUrl} />
                            <Typography>{item.name}</Typography>
                            <Typography>{item.price}</Typography>
                        </Grid>)
                    }
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default BoxItemModal;