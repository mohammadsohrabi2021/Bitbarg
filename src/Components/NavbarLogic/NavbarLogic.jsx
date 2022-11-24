import React, { useState } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Grid from "@mui/material/Grid";
import Search from "../SearchHomePage/SearchHomePage";
import { useCallback } from "react";
import FilterPrice from "../FilterPrice/FilterPrice";
import { useEffect } from "react";
import ChangePrice from "../ChangePrice/ChangePrice";
import { Button } from "@mui/material";
function NavbarLogic({
  setSearch,
  setUnit,
  setStatus,
  status,
  setFilterPrice,
  filterPrice,
}) {
  const [statusPrice, setStatusPrice] = useState("");
  const handleDescendingPrice = useCallback(() => {
    const coinData = [...filterPrice];
    if (statusPrice === "ascending") {
      setFilterPrice(coinData.sort((a, b) => a.price - b.price));
    } else if (statusPrice === "descending") {
      setFilterPrice(coinData.sort((a, b) => b.price - a.price));
    }
  }, [statusPrice]);

  useEffect(() => {
    handleDescendingPrice();
  }, [statusPrice]);

  return (
    <Grid
      xs={12}
      container
      item
      mt={3}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginBottom={2}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        width: { lg: "100%", md: "100%", xs: "100%" },
      }}
    >
      <Grid
        container
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        xs={12}
      >
        <Grid container item xs={12} sm={5} md={4}>
          <Search setSearch={setSearch} />
        </Grid>
        <Grid pr={2}  mt={1} item xs={6} sm={3} md={2}>
          <Button variant="outlined" onClick={() => setStatus(!status)}> <StarOutlineIcon/> { " نشان شده ها"}</Button>
        </Grid>
        <Grid item mt={1} xs={6} sm={3} md={2}>
          <ChangePrice setUnit={setUnit} />
        </Grid>
      <Grid item container mt={2} xs={12} sm={12} md={4} >
        <FilterPrice
          statusPrice={statusPrice}
          setStatusPrice={setStatusPrice}
        />
      </Grid>
      </Grid>
    </Grid>
  );
}

export default NavbarLogic;
