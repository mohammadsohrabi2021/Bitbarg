import { Grid, Button, Typography  } from '@mui/material';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
    return (
        <Grid>
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
    );
}

export default Footer;