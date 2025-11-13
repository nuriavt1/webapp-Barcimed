//import { useNivell } from "../../context/nivellContext";
import styles from '../../styles/capitol_modal.module.css'
import Button from '../button';
import { Col, Grid } from '../grid/grid';
import Targeta from '../targeta';
import Text_Type from '../text_type';


const Targetes_Modal = ({onClose, onContinue, targetes}) => {
//const { getTargetaData } = useNivell();


    return(
        <div className={styles.overlay} onClick={onClose}>
<Grid>
    <Col span={8}>
   <div>
  {targetes.map((t) => (
    <Targeta 
      key={t.id}
      imatge={t.imatge}
      estado="true"
    />
  ))}
</div>

    <Text_Type>HAS DESBLOQUEJAT NOVES TARGETES!</Text_Type>
    <Text_Type>Afegeix-les a la teva col·lecció!. Pots consultar-les quan vulguis a la Biblioteca.</Text_Type>
    <Button onClick={onClose}>RECOLLIR</Button>
    </Col>
</Grid>
        </div>
    );
}

export default Targetes_Modal;