import { Grid, TextField, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from '../../assets/img/banner.webp'
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import BoxDataModal from '../Box/BoxDataModal'
function CardHome() {
    const [open, setOpen] = useState(false)
    const handleShow = () => {
        setOpen(true)
    }
    return (
        <Grid>
            <Container>
                <Grid container m={2} 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                    <Grid item mt={12}
                        maxWidth={{
                            xs: "150px",
                            md: "270px"
                        }}
                    >
                        <img src={Image} alt='logoSite' width={'100%'} />
                    </Grid>
                    <Grid item>
                        <Grid item container spacing={{ xs: 1.5, md: 0.5 }} flexDirection={{ xs: 'column', md: 'row' }} mb={2}>
                            <Grid item>
                                <TextField
                                    id="outlined"
                                    label="تومان"
                                    defaultValue='0'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="outlined"
                                    label="واحد"
                                    defaultValue='0'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    onClick={handleShow}
                                    id="outlined-read-only-input"
                                    label="انتخاب ارز"
                                    defaultValue="تتر"
                                    sx={{ cursor: "pointer" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <BoxDataModal open={open} setOpen={setOpen} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item width='100%' sx={{ mx: 'auto' }}>
                        <Grid item container spacing={2} justifyContent={'center'} width='50%' sx={{ mx: 'auto' }} className="flexDir" alignItems={'center'}>
                            <Grid item xs={12} md={4} >
                                <Button variant="mainButton" item sx={{ minWidth: '125px', mx: 'auto' }} >{"درخواست خرید"}</Button>
                            </Grid>
                            <Grid item xs={12} md={4}  >
                                <Button variant="secondaryButton" item sx={{ backgroundColor: 'secondary.main', width: '100%', minWidth: '125px' }} >{"فروش"}</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item my={2} mx={'auto'} container flexDirection={'column'} alignItems={'center'} justifyContent="center">
                        <Grid item>
                            <Typography variant="title1">
                                پشتیبانــی ۲۴ ساعتـه
                                <br />
                                حتی در روزهای تعطیل
                            </Typography>
                        </Grid>
                        <Button item sx={{ textAlign: 'center' }}>
                            <Typography p={1} variant="title1">
                                {"021-91079677"}
                            </Typography>
                            <PhoneIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default CardHome;