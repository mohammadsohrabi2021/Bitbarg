import React, { useState, useEffect,useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Typography } from '@mui/material';
import { DataContext } from '../../../Context/CoinProvider'; 

function BoxItemModal({  search, setForm, setOpen }) {
    const {dataCoins, handleData } =useContext(DataContext)
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
        <ListItem component="div" sx={{ padding: 1 }}>
            <ListItemButton>
                <ListItemText >
                    {
                        dataCoins.filter(item => item.name.toUpperCase().includes(search.toUpperCase())).map(item =>
                            <Grid onClick={() => handleInput(item)} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: '.1px solid gray'

                            }}
                            >
                                <img width={'50px'} src={item.iconUrl} />
                                <Typography my={3} >{item.symbol} - {item.name}</Typography>
                                <Typography>
                                    <Typography>{'قیمت خرید'}</Typography>
                                    <Typography>{item.price}تومان</Typography>
                                </Typography>
                            </Grid>)
                    }
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default BoxItemModal;