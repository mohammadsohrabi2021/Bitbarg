import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Grid, Paper } from "@mui/material";
import { Chart, Filler } from "chart.js";
import { month } from "../../../Data/dataChart";
import { useContext } from "react";
import { DataContext } from "../../../Context/CoinProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    line: {
      tension: 0.3,
    },
    point: {
      radius: 0,
    },
  },

  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const LineChart = ({ item }) => {
  const { dataCoins, setDataCoins } = useContext(DataContext);

  const labels = month.map((item) => item.id);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: item.sparkline,
        borderWidth: 1,
        borderColor: "rgb(66, 133, 242)",
        background: " linear-gradient(to right, #4ca1af, #c4e0e5)",
        fill: true,
      },
    ],
  };

  return (
    <Grid width={"100%"} height={"100%"} maxHeight={60} maxWidth={100}>
      <Line options={options} data={data} />
    </Grid>
  );
};

export default LineChart;
