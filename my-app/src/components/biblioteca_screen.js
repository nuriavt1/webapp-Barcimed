import { Col, Grid } from "./grid/grid";
import styles from "../styles/biblioteca_screen.module.css";
import Text_Type from "./text_type";
import Targeta from "./targeta";
import { useMemo } from "react";
import { useNivell } from "../context/nivellContext";
import targetesData from "../data/targetes.json";

export default function Biblioteca_Screen() {
const { esTargetaDesbloquejada } = useNivell();

// Aplana totes les seccions del JSON en una sola llista
const targetes = useMemo(() => {
const sections = Object.values(targetesData || {});
return sections.flat().map((t) => ({
id: t.id,
imatge: t.imatge,
nom: t.nom,
}));
}, []);

return (
<div
style={{
minHeight: "100%",
height: "fit-content",
background: "var(--color-blue800)",
color: "var(--color-white)",
paddingTop: "24px",
paddingBottom: "100px",
}}
>
<Grid>
<Col span={8}>
<Text_Type variant="h2">BIBLIOTECA</Text_Type>

      <div
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {targetes.map((t) => (
          <Targeta
            key={t.id}
            estado={esTargetaDesbloquejada(t.id) ? "card" : "lock"}
            imatge={t.imatge}
          />
        ))}
      </div>
    </Col>
  </Grid>
</div>
);
}