import { useNavigate } from "react-router-dom";
import Text_Type from "../components/text_type";
import Icon_Button from "../components/icon_button";
import { useNivell } from "../context/nivellContext";
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';


import Nivell1 from '../components/nivells/nivell1';
import Nivell2 from '../components/nivells/nivell2';
import Nivell3 from '../components/nivells/nivell3';
import Nivell4 from '../components/nivells/nivell4';

function Enigma() {
    const navigate = useNavigate()
     const { nivellActual } = useNivell();
    const [resolta, setResolta] = useState(false);

// Quan canviem de nivell, carreguem si estava resolta
  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('endevinalles')) || {};
    setResolta(dades[`nivell${nivellActual}`]?.resolta || false);
  }, [nivellActual]);

  // Marcar nivell actual com resolt
  const marcaResolta = () => {
    const dades = JSON.parse(localStorage.getItem('endevinalles')) || {};
    dades[`nivell${nivellActual}`] = { resolta: true };
    localStorage.setItem('endevinalles', JSON.stringify(dades));
    setResolta(true);
  };

const propsComuns = { resolta, marcaResolta };

  let nivellComponent;
  switch (nivellActual) {
    case 1:
      nivellComponent = <Nivell1 {...propsComuns} />;
      break;
    case 2:
      nivellComponent = <Nivell2 {...propsComuns} />;
      break;
    case 3:
      nivellComponent = <Nivell3 {...propsComuns} />;
      break;
    case 4:
      nivellComponent = <Nivell4 {...propsComuns} />;
      break;
    default:
      nivellComponent = <p>Has completat tots els nivells!</p>;
  }


    return (
        <div style={{background: "var(--color-brown100)"}}>
            <div style={{ background: "var(--color-blue800)", color: "var(--color-white)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px" }}>

                <Icon_Button onClick={() => navigate(-1)} alt="tornar enrere" src="back.svg"></Icon_Button>

                <Text_Type>PLAÇA SANT JAUME (5KM)</Text_Type>
                <Icon_Button onClick={() => navigate("/map")} alt="tornar enrere" src="map.svg"></Icon_Button>
    
            </div>
            <Text_Type>Aquesta és la pàgina de enigma</Text_Type>
            <Text_Type>A la casa dels cent consellers</Text_Type>
              {nivellComponent}
        </div>
    );
}
export default Enigma;