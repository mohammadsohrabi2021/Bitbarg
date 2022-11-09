import { useTheme, useMediaQuery, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataContext } from "../../Context/CoinProvider";
import { useState, useEffect, useContext } from "react";
import NavbarLogic from "../NavbarLogic/NavbarLogic";
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import columns from "../../Data/DataSinglePage";
import DataTitle from "../DataTitle/DataTitle";
function NavbarPrice() {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { dataCoins, setDataCoins } = useContext(DataContext)
  const [unit, setUnit] = useState(true);
  const [status, setStatus] = useState(false);
  const [filterPrice, setFilterPrice] = useState([]);
  console.log(dataCoins);

  const handleStar = (id) => {
    setDataCoins(
      dataCoins.map(item =>
        item.uuid === id ? { ...item, star: !item.star } : item
      )
    );
  };

  const handleStatus = () => {
    if (status) {
      setFilterPrice(dataCoins.filter(item => item.star === true));
    } else {
      setFilterPrice(dataCoins);
    }
  };

  useEffect(() => {
    handleStatus();
  }, [status, dataCoins]);
  return (
    <Grid container>
      <Paper sx={{ flexDirection: { xs: "column", md: "row" }, width: '100%' }}>
        <Grid item mx={2}>
          <DataTitle dataCoins={dataCoins} />
        </Grid>
        <Grid item>
          <NavbarLogic setSearch={setSearch} setUnit={setUnit} setStatus={setStatus} status={status} setFilterPrice={setFilterPrice} filterPrice={filterPrice} />
        </Grid>
        <Table stickyHeader aria-label="sticky table">
          {isDesktop ?
            <TableHead >
              <TableRow >
                {columns.map((col, index) => (
                  <TableCell
                    sx={{
                      border: "none",
                      textAlign: "center",
                      backgroundColor: "secondary.main",
                    }}
                    key={index}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            : null}
          <TableBody>
            {filterPrice.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map((item) => (
              (isDesktop ?
                (<NavbarDesktop item={item} key={item.uuid} handleStar={handleStar} unit={unit} />) :
                (<NavbarMobile item={item} key={item.uuid} handleStar={handleStar} unit={unit} />)

              )
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}

export default NavbarPrice;