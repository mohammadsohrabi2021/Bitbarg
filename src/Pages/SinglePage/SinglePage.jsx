import { Container, Paper } from '@mui/material';
import NavbarPrice from '../Navbar/NavbarPrice';
import {styles} from'./BackGround'
function SinglePage() {
   

    return ( 
        <Paper style={styles.paperContainer}>
            <Container>
               <NavbarPrice/>
            </Container>
        </Paper>
     );
}

export default SinglePage;