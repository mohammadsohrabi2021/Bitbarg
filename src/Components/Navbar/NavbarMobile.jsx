import React from 'react';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import { Divider } from '@mui/material';
function NavbarMobile({ item, handleStar, unit }) {

    return (
        <>
        <Grid width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'space-between'} display={'flex'} my={1}>
          <Grid>
            <IconButton onClick={() => handleStar(item.uuid)} sx={{ "&.MuiButtonBase-root": { padding: 0 } }}>
              {item.star ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Grid>
          <Grid>
            <Grid display={"flex"} alignItems={'center'} justifyContent={"flex-end"} >
              <Typography
                variant="title1"
                color={"rgba(0, 0, 0, 0.6)"}
                px={1}
              >
                {'خرید'}
              </Typography>
              <Typography variant="title1">
                {unit
                  ? Math.ceil(item.price * 34000)
                  : Math.ceil(item.price)}
              </Typography>
              <Typography
                variant="title1"
                color={"rgba(0, 0, 0, 0.6)"}
                px={1}
              >
                {unit  ? "تومان" : "Tether"}
              </Typography>
            </Grid>
  
          </Grid>
          <Grid display={"flex"} justifyContent={'flex-start'}>
            <Grid item>
              <Typography variant="title1" marginBottom={1} sx={{ direction: "ltr" }}>
                {item.name}
              </Typography>
              <Grid display={"flex"}>
                <Typography
                  variant="title1"
  
                  sx={{
                    direction: "ltr",
                    marginLeft: 1
  
                  }}
                >
                  {`${item.change}%`}
                </Typography>
                <Typography
                  variant="title1"
                  color={"rgba(0, 0, 0, 0.6)"}
                >
                  {item.symbol}
                </Typography>
                <Typography
                  variant="title1"
                  color={"rgba(0, 0, 0, 0.6)"}
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "15px",
                    textAlign: "center",
                    marginRight: 1,
                    borderRadius: 1,
                  }}
                >
                  {item.rank}
                </Typography>
  
              </Grid>
            </Grid>
            <Grid item marginRight={1}>
              <img
                width={"40px"}
                height={"40px"}
                src={item.iconUrl}
              />
            </Grid>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
  
      </>
    );
}

export default NavbarMobile;