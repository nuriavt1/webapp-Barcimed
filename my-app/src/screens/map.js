import { useState } from "react";
import Button from "../components/button";
import GoogleMap from "../components/googleMap";
import Icon_Button from "../components/icon_button";
import Text_Type from "../components/text_type";
import { useNavigate } from "react-router-dom";
import { useNivell } from "../context/nivellContext";
import Video_Modal from "../components/modals/video_modal";
import Targetes_Modal from "../components/modals/targetes_modal";

function Map() {
    const navigate = useNavigate()
    const { canviarPart, esPartDos, pujarNivell, canviaVideoWatch, nivellActual } = useNivell();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isTargetesModalOpen, setIsTargetesModalOpen] = useState(false);

    const arribadaUbicacio = () => {
        if (!esPartDos) {
            // si ES PART 2 → mostrem modal de vídeo
            canviaVideoWatch(nivellActual)
            setIsVideoModalOpen(true);

        } else {
            // si ES PART 1 → tornem a Enigma
            navigate("/enigma");
        }
    };

    const tancarVideoModal = () => {
        setIsVideoModalOpen(false);
        setIsTargetesModalOpen(true);
    };

const tancarTargetesModal = () => {
    setIsTargetesModalOpen(false);
    pujarNivell();
}

    return (

        <div >
            <div style={{ background: "var(--color-blue700)", display: "flex", justifyContent: "space-around", alignItems: "center", color: "var(--color-white)" }}>
                <Icon_Button onClick={() => navigate(-1)} alt="tornar enrere" src="back.svg"></Icon_Button>
                <Text_Type>DIRIGEIX-TE A</Text_Type>


            </div>
            <Text_Type>Aquesta és la pàgina de mapa</Text_Type>
            <GoogleMap></GoogleMap>
            <Button color="secondary" version={2} onClick={arribadaUbicacio}> JA HE ARRIBAT!</Button>

            {isVideoModalOpen && (
                <Video_Modal onClose={tancarVideoModal} />

            )}
            {/* MODAL 2: Targetes desbloquejades */}
            {isTargetesModalOpen && (
                <Targetes_Modal
                    //   targetes={endevinallaData.targetesDesbloquejades}
                    onClose={tancarTargetesModal}
                />
               
            )}

        </div>
    );
}
export default Map;