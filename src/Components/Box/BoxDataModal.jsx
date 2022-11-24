import React, { useEffect, useContext, useState } from 'react';
import { Grid, List, Box, Modal, Divider } from '@mui/material';
import ModalItem from './BoxItem/BoxItemModal';
import style from './Style'
import SearchHomePage from '../SearchHomePage/SearchHomePage';
import HeaderModal from '../HeaderModal/HeaderModal';
import { DataContext } from '../../Context/CoinProvider';
function BoxDataModal({ open, setOpen, setForm }) {
    const [search, setSearch] = useState('')

    const { dataCoins } = useContext(DataContext)

    const handleInput = item => {
        setForm(item)
        handleClose()
    }
    const handleClose = () => {
        setOpen(false)
        setSearch('')
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container  >
                    <HeaderModal handleClose={handleClose} />
                    <SearchHomePage search={search} setSearch={setSearch} />
                    <Grid item xs={12} marginTop={2}>
                        <Grid sx={{ height: '100%', maxHeight: '400px', overflowY: 'auto' }}>
                            <List>
                                {
                                    dataCoins.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map((item) => (
                                        <Grid key={item.uuid} onClick={() => handleInput(item)}>
                                            <ModalItem coin={item} setForm={setForm} setOpen={setOpen} key={item.uuid} />
                                            <Divider variant="middle" />
                                        </Grid>
                                    ))
                                }
                            </List>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Modal>
    );
}

export default BoxDataModal;