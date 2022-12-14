import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Image from '../../assets/img/banner.webp'
import React, { useState} from 'react';
import BoxDataModal from '../Box/BoxDataModal'
import Footer from '../Footer/Footer';
import ButtonsHome from '../ButtonsHome/ButtonsHome';
import Form from '../Form/Form';

function CardHome() {

    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        // name: 'Bitcoin',
        // tier: 1,
        // price: 21273.862578,
        name:'Bitcoin',tier: 1,price:"20443.399793940775",icon:"https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    })
 
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
                                <Form form={form} setForm={setForm} setOpen={setOpen} />
                            </Grid>
                            <Grid item>
                                <BoxDataModal open={open} setOpen={setOpen}  setForm={setForm} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item width='100%' sx={{ mx: 'auto' }}>
                        <ButtonsHome />
                    </Grid>
                    <Grid item my={2} mx={'auto'} container flexDirection={'column'} alignItems={'center'} justifyContent="center">
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default CardHome;