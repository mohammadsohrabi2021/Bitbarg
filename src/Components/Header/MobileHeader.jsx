import React from 'react';
import { Grid } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import  Support  from "@mui/icons-material/HeadsetMicOutlined"
import { Stack } from '@mui/system';
import {ReactComponent as Logo } from '../../assets/img/headerLogo.svg'
function MobileHeader() {
    return (
        <Grid>
            <Toolbar sx={{ justifyContent: "space-between" ,alignItems:'center'}}>
                <Box sx={{ width: "20%" }}>
                    <Logo />
                </Box>
                <Stack  spacing={2}>
                    <Button
                        variant="contained"
                        startIcon={<Support />}
                        sx={{
                            borderRadius: "25px",
                            padding: "3px",
                            backgroundColor: "rgba(0,0,0,.08)",
                            color: "black",
                            cursor:'pointer'
                        }}
                    >
                        <Typography variant='button' sx={{px:1}}>
                            {'آیا نیاز به کمک دارید؟'}
                        </Typography>
                    </Button>
                </Stack>
            </Toolbar>
        </Grid>
    );
}

export default MobileHeader;