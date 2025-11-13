import Icon_Button from "../components/icon_button";
import Text_Type from "../components/text_type";
import { useNavigate } from "react-router-dom";
import { useNivell } from "../context/nivellContext";
import Board2 from "../components/board2";
import { Col, Grid } from "../components/grid/grid";
import Button from "../components/button";
import InputString from "../components/inputs/inputString";
import { useState } from "react";
import Correct_Modal from "../components/modals/correct_modal";
import Targetes_Modal from "../components/modals/targetes_modal";
import Missatge_Modal from "../components/modals/missatge_modal";

function Enigma() {
  const navigate = useNavigate();
  const { endevinalles, marcaComResolta, getEndevinallaData, nivellActual, targetes, desbloquejarTargeta, canviarPart, esPartDos } = useNivell();
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isTargetesModalOpen, setIsTargetesModalOpen] = useState(false);
  const [isMissatgeModalOpen, setIsMissatgeModalOpen] = useState(false);



  const endevinallaData = getEndevinallaData(nivellActual)

  const handleCorrecte = () => {
    marcaComResolta(nivellActual);  // marca endevinalla resolta
    setIsCorrectModalOpen(true);    // obre primer modal
  };

  const tancarCorrectModal = () => {
    setIsCorrectModalOpen(false);
    setIsTargetesModalOpen(true);   // obre automàticament les targetes
  };

  const tancarTargetesModal = () => {
    setIsTargetesModalOpen(false);
    // Obtenir del context les targetes desbloquejades del nivell actual
    endevinallaData.targetesDesbloquejades.forEach((id) => {
      desbloquejarTargeta(id);
      setIsMissatgeModalOpen(true)
    });
  };

  const tancarMissatgeModal = () => {
    setIsMissatgeModalOpen(false);
    canviarPart();
  }


  return (
    <div style={{
      background: "var(--color-brown100)",
      height: "100%"
    }}>
      <div
        style={{
          background: "var(--color-blue800)",
          color: "var(--color-white)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px",
        }}
      >
        <Icon_Button onClick={() => navigate(-1)} alt="tornar enrere" src="back.svg" />
        <Text_Type>PLAÇA SANT JAUME (5KM)</Text_Type>
        <Icon_Button onClick={() => navigate("/map")} alt="veure mapa" src="map.svg" />
      </div>
      {!esPartDos ? (
        <div className="part1">

          <Grid>
            <Col span={8}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px" }}>
                <Text_Type variant="t2B">{endevinallaData.title}</Text_Type>

                <Board2 color="var(--color-brown200)" border="var(--color-brown50)"> <Text_Type style={{ textAlign: "left" }}>{endevinallaData.pregunta}</Text_Type></Board2>


                <InputString resposta={endevinallaData?.resposta_correcta} onCorrecte={handleCorrecte} />
              </div>

            </Col>
          </Grid>
        </div>
      ) : (
        <div className="part2">
          <Text_Type>Dirigeix-te a la Ubicació per poder desbloquejar el següent frasgment de la història.</Text_Type>
          <Button
            color="secondary"
            version={2}
            icon="/icones/map.svg"
            onClick={() => navigate("/map")}
          >
            MAPA
          </Button>
          <Button onClick={canviarPart}>Canviar Part</Button>

        </div>
      )

      }





      {/* MODAL 1: Correcte */}
      {isCorrectModalOpen && (
        <Correct_Modal onClose={tancarCorrectModal} />
      )}

      {/* MODAL 2: Targetes desbloquejades */}
      {isTargetesModalOpen && (
        <Targetes_Modal
          targetes={endevinallaData.targetesDesbloquejades}
          onClose={tancarTargetesModal}
        />
      )}

      {isMissatgeModalOpen && (
        <Missatge_Modal onClose={tancarMissatgeModal}></Missatge_Modal>
      )}
    </div>
  );
}
export default Enigma;