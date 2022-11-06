import React, { useState } from 'react';
import { Grid, IconButton, List, Box, Modal, Typography, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ModalItem from './BoxItem/BoxItemModal';
import style from './Style'
function BoxDataModal({ open, setOpen, dataCoins ,setForm}) {
    const handleClose = () => {
        setOpen(false)
    }
    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container  >
                        <Grid item conatainer display={'flex'} alignItems={'center'} justifyContent={'space-between'} xs={12} marginBottom={1}>
                            <Grid item>
                                <Typography variant='h2' >{"قیمت ارز"}</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={handleClose} >
                                    <CloseIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ border: '1px solid #727272 ', borderRadius: '10px' }} xs={12}>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase sx={{ ml: 1, flex: 1 }}
                                placeholder="جستجو"
                                onChange={handleSearch}
                                value={search}
                                name='search'
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Grid>

                        <Grid item xs={12} marginTop={2}>
                            <Grid sx={{ maxHeight: '400px', height: '100%', overflowY: 'auto' }}>
                                <List>
                                    {
                                        <>
                                            <ModalItem dataCoins={dataCoins} search={search} setForm={setForm} setOpen={setOpen} />
                                            <Divider variant="middle" />
                                        </>

                                    }
                                </List>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Grid>
    );
}

export default BoxDataModal;