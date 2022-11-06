import { Grid } from '@mui/material';
import MobileHeader from './MobileHeader';
import DeaktopHeader from './DesktopHeader';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme,AppBar } from '@mui/material';
import React from 'react';

function Header() {
    const Theme = useTheme();
    const medeia = useMediaQuery(Theme.breakpoints.up("md"))
    return (
        <Grid>
            <AppBar
                sx={{
                    backgroundColor: "#fff", height: 'auto',boxShadow:0
                }}
            >
                <Container>
                    {
                        medeia ? <DeaktopHeader /> : <MobileHeader />
                    }
                </Container>
            </AppBar>
        </Grid>
    );
}

export default Header;