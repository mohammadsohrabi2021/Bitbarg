import React from 'react';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
function NavbarDesktop({ item, handleStar, unit }) {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} >
      <TableCell sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handleStar(item.uuid)}>
          {item.star ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </TableCell>
      <TableCell
        sx={{ textAlign: "center", direction: "ltr" }}
      >{`${item.change}%`}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <Grid display={"flex"}>
          <Typography
            variant="title1"
            color={"rgba(0, 0, 0, 0.6)"}
            px={1}
          >
            {"تومان"}
          </Typography>
          <Typography variant="title1">
            {item.marketCap}
          </Typography>
        </Grid>
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <Grid display={"flex"}>
          <Typography variant="title1">
            {unit
              ? Math.ceil(item.price * 38000)
              : Math.ceil(item.price)}
          </Typography>
          <Typography
            variant="title1"
            color={"rgba(0, 0, 0, 0.6)"}
            px={1}
          >
            {unit ? "تومان" : "Tether"}
          </Typography>
        </Grid>
      </TableCell>
      <TableCell sx={{ textAlign: "left" }}>
        <Grid display={"flex"} justifyContent={"space-evenly"}>
          <Grid item>
            <Typography variant="title1" marginBottom={1}>
              {item.name}
            </Typography>
            <Grid display={"flex"}>
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
          <Grid item>
            <img
              width={"40px"}
              height={"40px"}
              src={item.iconUrl}
            />
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
}

export default NavbarDesktop;