import { Container, Paper } from '@mui/material';
import NavbarPrice from '../Navbar/NavbarPrice';
function SinglePage() {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${"../../assets/images/backgroundPrice.png"})`
        }
    };

    return ( 
        <Paper style={styles.paperContainer}>
            <Container>
               <NavbarPrice/>
            </Container>
        </Paper>
     );
}

export default SinglePage;