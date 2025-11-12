import Button from "../components/button";
import Text_Type from "../components/text_type";
import { Grid, Col } from '../components/grid/grid';
import styles from '../styles/home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        
        <div className={styles.home}>
            
            <Grid>
                <Col span={8} className={styles.home_titols}>
                    <img src="/imatges_generals/Logotip.svg" className={styles.logo} alt="Logo Barcimed" />

                    <Text_Type variant="t2">Benvingut a Barcimed, una experiència immersiva.</Text_Type>
                    <Button color="primary"  onClick={() => navigate('/main')}>COMENÇAR</Button>

                </Col>
            </Grid>
            <div className={styles.home_fons}>
                <img src="/imatges_generals/apotecaBenvinguda.svg" className={styles.apoteca}
          alt="Apoteca Benvinguda"/>

            </div>
        </div>

    );
}

export default Home;