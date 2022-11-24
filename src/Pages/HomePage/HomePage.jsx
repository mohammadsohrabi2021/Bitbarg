import { Grid ,CircularProgress} from "@mui/material";
import { useContext, useEffect } from "react";
import Card from "../../Components/Card/CardHome";
import options from "../../Api/Api";
import { DataContext } from "../../Context/CoinProvider";
import { useState } from "react";
import { Container } from "@mui/system";

function HomePage() {
  const { dataCoins, setDataCoins } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const handleData = async () => {
    const data = await options("/coins").then((res) => res.data.data.coins);
    setDataCoins(data);
    setLoading(false);
  };
  useEffect(() => {
    document.title = "بیت برگ |خرید بیت کوین , فروش بیت کوین , قیمت بیت کوین";
    handleData();
   
  }, []);

  return (
    <Grid>
      <Container>
        {loading ? (
          <Grid
            display={"flex"}
            justifyContent={"center"}
            sx={{ marginTop: 10 }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <Card />
        )}
      </Container>
    </Grid>
  );
}

export default HomePage;
