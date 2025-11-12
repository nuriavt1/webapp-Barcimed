import styles from '../../styles/capitol_modal.module.css'
import Button from '../button';
import { Col, Grid } from '../grid/grid';
import Text_Type from '../text_type';

const Missatge_Modal = ({onClose, onContinue}) => {
    return(
        <div className={styles.overlay} onClick={onClose}>
<Grid>
    <Col span={8}>
    <Text_Type>HTENS UN NOU MISSATGE</Text_Type>
    <Text_Type>PERE DE VALLDONA</Text_Type>
    <Button onClick={onContinue}>MAPA</Button>
    </Col>
</Grid>
        </div>
    );
}

export default Missatge_Modal;