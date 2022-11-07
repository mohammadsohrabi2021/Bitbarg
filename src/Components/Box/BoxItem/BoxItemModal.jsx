import React, { useEffect, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Typography } from '@mui/material';
import { DataContext } from '../../../Context/CoinProvider';

function BoxItemModal({ search, setForm, setOpen }) {
    const { dataCoins, handleData } = useContext(DataContext)
    useEffect(() => {
        handleData()
    }, [])

    const handleInput = item => {
        setForm(item)
        handleClose()
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Grid>
            <ListItem component="div" sx={{ padding: 1 }}>
                <ListItemButton>
                    <ListItemText sx={{ textAlign: 'right' }} >
                        {
                            dataCoins.filter(item => item.name.toUpperCase().includes(search.toUpperCase())).map(item =>
                                <Grid container paddingLeft={1} onClick={() => handleInput(item)} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottom: '.1px solid gray',
                                    
                                }}
                                >
                                    <Grid item display={'flex'} justifyContent={'space-between'}>
                                        <Grid item><img width={'40px'} height={'40px'} src={item.iconUrl} /></Grid>
                                        <Grid container flexDirection={'column'} item>
                                            <Typography variant='title1' marginBottom={1} >{item.name}</Typography>
                                            <Typography variant='title1' color={'rgba(0, 0, 0, 0.6)'}>{item.symbol}</Typography>
                                        </Grid>
                                        <Grid container item display={'flex'} justifyContent={'flex-end'} paddingRight={'80px'}>
                                            <Typography variant='title1' marginBottom={1}>{'قیمت خرید'}</Typography>
                                            <Grid display={'flex'}>
                                                <Typography variant='title1' marginBottom={1}>{Math.floor(item.price)}</Typography>
                                                <Typography variant='title1' color={'rgba(0, 0, 0, 0.6)'} px={1}>{'تومان'}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>)
                        }
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </Grid>
    );
}

export default BoxItemModal;