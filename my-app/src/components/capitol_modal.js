// Modal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Board from "./board";
import { Col, Grid } from "./grid/grid";
import styles from '../styles/capitol_modal.module.css'
import Text_Type from "./text_type";
import Button from "./button";
import { useNivell } from "../context/nivellContext";


const Capitol_Modal = ({ isOpen, onClose, title, children }) => {
     const navigate = useNavigate();
     const { capitols, getCapitolsData} = useNivell();
      const { nivellActual} = useNivell();
      const actualData = getCapitolsData(nivellActual);
     
    if (!isOpen) return null; // Si no está abierto, no se renderiza

    return (
        <div className={styles.overlay} onClick={onClose}>
            <Grid>
                <Col span={8}>
                    <Board onClick={(e) => e.stopPropagation()}>
                        {children}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <Text_Type variant="h2">CAPÍTOL {nivellActual} </Text_Type>
                                <Text_Type variant="t2B">{actualData.titol}</Text_Type>
                            </div>
                            <img  src={`/imatges_capitols/${actualData?.imatgeGran}`} width={172}></img>
                            <Text_Type variant="bodyL">{actualData.missatge}</Text_Type>
                            <Button color="tertiary" onClick={() => navigate("/enigma")}>CONTINUAR</Button>
                        </div>

                    </Board>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl leading-none"
                        style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            margin: 0,
                            cursor: "pointer"
                        }}
                    >
                        <img src="/icones/close.svg" width={44}></img>

                    </button>


                </Col>
            </Grid>
        </div>


    );
};

export default Capitol_Modal;
