import styles from '../../styles/capitol_modal.module.css'
import Board from '../board';
import Button from '../button';
import { Col, Grid } from '../grid/grid';
import Icon_Button from '../icon_button';
import Text_Type from '../text_type';


const Correct_Modal = ({ isOpen, onClose, title, children, onContinue }) => {

    return(
        <div className={styles.overlay} onClick={onClose}>
<Grid>
                <Col span={8}>
                    <Board onClick={(e) => e.stopPropagation()}>
                        {children}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <img src="/imatges_capitols/correct.svg" ></img>
                                <Text_Type variant="h2">FELICITATS!</Text_Type>
                                <Text_Type variant="t2B">HAS RESOLT L'ENDEVINALLA</Text_Type>
                            </div>
                            
                            <Button color="tertiary" onClick={onContinue}>CONTINUAR</Button>
                        </div>
                        

                    </Board>
                    <Icon_Button onClick={onContinue} src={"close.svg"} alt={"tancar"}></Icon_Button>

                </Col>
            </Grid>
        </div>
    );
}
export default Correct_Modal;