import { Grid } from '@mui/material';
import React from 'react';
import { RouterProvider } from "react-router-dom";
import './App.css'
import './assets/Font/FontsFree-Net-ir_sans (1).ttf'
import CoinProvider from './Context/CoinProvider';
import router from './router/router';

const App = () => {
  return (
    <Grid>
      <CoinProvider>
        <RouterProvider router={router} />
      </CoinProvider>
    </Grid>
  );
};

export default App;