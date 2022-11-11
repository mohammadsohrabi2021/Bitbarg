import { Container, Paper } from '@mui/material';
import NavbarPrice from '../Navbar/NavbarPrice';
import {styles} from'./BackGround'
import { useEffect } from 'react';
function SinglePage() {
  useEffect(()=>{
    document.title="قیمت لحظه ای | بیت برگ"
  })
    return ( 
        <Paper style={styles.paperContainer}>
            <Container>
               <NavbarPrice/>
            </Container>
        </Paper>
     );
}

export default SinglePage;