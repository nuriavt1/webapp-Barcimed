import { useNavigate } from "react-router-dom";
import Text_Type from "../components/text_type";
import Icon_Button from "../components/icon_button";
import { useNivell } from "../context/nivellContext";
import React, { useState, useEffect } from "react";
import endevinalles from "../data/endevinalles.json";
import Nivell_Component from "../components/nivells/nivell_component";

function Enigma() {
  const navigate = useNavigate();
  const { nivellActual } = useNivell();
  const [resolta, setResolta] = useState(false);

  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem("endevinalles")) || {};
    setResolta(dades[`nivell${nivellActual}`]?.resolta || false);
  }, [nivellActual]);

  const marcaResolta = () => {
    const dades = JSON.parse(localStorage.getItem("endevinalles")) || {};
    dades[`nivell${nivellActual}`] = { resolta: true };
    localStorage.setItem("endevinalles", JSON.stringify(dades));
    setResolta(true);
  };

  const propsComuns = { resolta, marcaResolta };

   const nivellData = endevinalles.find((nivell) => nivell.id === nivellActual);

 let nivellComponent;
  if (nivellData) {
    nivellComponent = (
      <Nivell_Component
        key={nivellData.id}
        title={nivellData.title}
        enigma_ubication={nivellData.enigma_ubication}
        enigma={nivellData.enigma}
        resposta_correcta={nivellData.resposta_correcta}
        {...propsComuns}
      />
    );
  } else {
    nivellComponent = <p>Has completat tots els nivells!</p>;
  }

  return (
    <div style={{ background: "var(--color-brown100)" }}>
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

      <Text_Type>Aquesta és la pàgina de l'enigma</Text_Type>
      <Text_Type>A la casa dels cent consellers</Text_Type>

      {nivellComponent}
    </div>
  );
}

export default Enigma;