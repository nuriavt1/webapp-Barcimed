import { useNavigate } from "react-router-dom";
import Button from "./button";
import { Grid, Col } from "../components/grid/grid";
import Capitol_New from "./capitol_new";
import styles from "../styles/capitols_screen.module.css";
import { useState } from "react";
import Capitol_Modal from "./capitol_modal";
import { useNivell } from "../context/nivellContext";

export default function Capitols_Screen(estat) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { nivellActual } = useNivell();
  const navigate = useNavigate();

  // 🔹 Defineix els capítols en un array
  const capitols = [
    { id: 1, nombre: "EL CAVALLER", numero: "I", imatge: "cap_cavaller.svg" },
    { id: 2, nombre: "LA MONJA", numero: "II", imatge: "cap_monja.svg" },
    { id: 3, nombre: "EL COMERCIANT", numero: "III", imatge: "cap_comerciant.svg" },
    { id: 4, nombre: "ELS JUEUS", numero: "IV", imatge: "cap_jueus.svg" },
  ];

  // 🔹 Determina l’estat de cada capítol segons el nivell actual
  const obtenirEstatCapitol = (id) => {
    if (id < nivellActual) return "check"; // Ja superat
    if (id === nivellActual) return "progress"; // Nivell actual
    return "lock"; // Encara bloquejat
  };

  return (
    <div style={{ height: "100%", background: "var(--color-blue800)" }}>
      <div style={{ paddingTop: "20px" }}>
        <Grid>
          {/* 🗺️ Botó per tornar al mapa */}
          <Col span={4}>
            <Button
              color="secondary"
              version={2}
              icon="/icones/map.svg"
              onClick={() => navigate("/map")}
            >
              MAPA
            </Button>
          </Col>

          {/* 📜 Llista de capítols */}
          <Col span={8}>
            <div className={styles.capitulos_box}>
              {capitols.map((capitol) => (
                <Capitol_New
                  key={capitol.id}
                  estado={obtenirEstatCapitol(capitol.id)}
                  nombre={capitol.nombre}
                  numero={capitol.numero}
                  imatge={capitol.imatge}
                />
              ))}

              

              {/* 🔘 Botó per obrir modal del capítol actual */}
              <Button version={1} onClick={() => setIsModalOpen(true)}>
                CAPÍTOL {nivellActual}
              </Button>
            </div>

            {/* 🪄 Modal del capítol actual */}
            <Capitol_Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </Col>
        </Grid>
      </div>
    </div>
  );
}
