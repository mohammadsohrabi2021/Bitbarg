import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Menu from '@mui/icons-material/SegmentRounded';
import Data from '../../Data/Data'
import Divider from '@mui/material/Divider';
import { ReactComponent as Logo } from '../../assets/img/headerLogo.svg'

function DeaktopHeader() {
    return (
        <Grid container
            sx={{
                color: '#000',
                width: '100%',
                height: '70px',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Grid item
                sx={{
                    display: 'flex',
                    width: '45%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    pr: '0'
                }}
            >
                <Button variant='secondaryButton' sx={{ color: '#000' }}>
                    <Menu />
                    <Typography>
                        {'منو'}
                    </Typography>
                </Button>
                {
                    Data.map((item, index) =>
                        <Button variant='secondaryButton contained'>
                            <Typography variant='button' key={index}>
                                {item}
                            </Typography>
                        </Button>
                    )
                }
            </Grid>
            <Grid item
                sx={{
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <Grid>
                    <Button variant="mainButton">
                        {'ورود | ثبت نام'}
                    </Button>
                </Grid>
                <Divider orientation="vertical" variant="middle" sx={{ mx: 1 }} />
                <Grid
                    sx={{
                        width: '120px',
                        height: '48px'
                    }}
                >
                    <Logo sx={{
                        width: '100%'
                    }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DeaktopHeader;