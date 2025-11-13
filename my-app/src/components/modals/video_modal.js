import styles from '../../styles/capitol_modal.module.css'
import Button from '../button';
import { Col, Grid } from '../grid/grid';
import Text_Type from '../text_type';
import Video_Card from '../video_card';
import { useNivell } from "../../context/nivellContext";

const Video_Modal = ({ onClose, onContinue }) => {
    const { videos, canviarVideoWatch, nivellActual, getVideoData } = useNivell();

    const videoData = getVideoData(nivellActual);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <Grid>
                <Col span={8}>
                    <Text_Type>NOU VIDEO DESBLOQUEJAT!</Text_Type>
                    <Text_Type>Reprodueix el video per continuar la historia.</Text_Type>
                    <Video_Card url={videoData.url} imatge={videoData.imatgeCaratula} nom={videoData}></Video_Card>
                    <Button onClick={onClose}>REPRODUEIX VIDEO</Button>
                </Col>
            </Grid>
        </div>
    );
}

export default Video_Modal;