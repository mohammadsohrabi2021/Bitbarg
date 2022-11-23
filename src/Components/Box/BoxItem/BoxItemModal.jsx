import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Typography } from '@mui/material';


function BoxItemModal({coin }) {

    return (
        <ListItem disablePadding sx={{ padding: 1 }}>
            <ListItemButton >
                <ListItemText sx={{ textAlign: 'right' }} >
                    <Grid container item justifyContent={'space-between'} paddingLeft={5}>
                        <Grid item display={'flex'}>
                            <Grid item><img width={'40px'} height={'40px'} src={coin.iconUrl} /></Grid>
                            <Grid item container display={'flex'}flexDirection={'column'}>
                                <Typography variant='title1' mb={2}>{coin.name}</Typography>
                                <Typography variant='title1' color={'#909090'}>{coin.symbol}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant='title1' marginBottom={1}>{'قیمت خرید'}</Typography>
                            <Grid display={'flex'}>
                                <Typography variant='title1'>{Number(coin.price).toFixed(3)}</Typography>
                                <Typography variant='title1' color={'rgba(0, 0, 0, 0.6)'} px={1}>{'تومان'}</Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default BoxItemModal;