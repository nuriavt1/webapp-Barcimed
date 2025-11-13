import { useNavigate } from "react-router-dom";
import { Col, Grid } from "./grid/grid";
import styles from "../styles/biblioteca_screen.module.css";
import Text_Type from "./text_type";
import Targeta from "./targeta";

import { useNivell } from "../context/nivellContext";


export default function Biblioteca_Screen() {
  //const { esTargetaDesbloquejada } = useNivell();
  const { targetes, getTargetaData } = useNivell();
  const navigate = useNavigate();

  // Aplana totes les seccions del JSON en una sola llista
  /*const targetes = useMemo(() => {
  const sections = Object.values(targetesData || {});
  return sections.flat().map((t) => ({
  id: t.id,
  imatge: t.imatge,
  nom: t.nom,
  }));
  }, []);*/

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
{targetes.map((t) => {
console.log("TARGETA:", t.id, "DESBLOQUEJAT:", t.desbloquejat, "OBJ:", t);
return (
<Targeta
key={t.id}
estado={t.desbloquejat ? "true" : "false"}
imatge={t.imatge}
onClick={() =>
t.desbloquejat &&
navigate("/detail", {
state: {
id: t.id,
titol: t.titol,
descripcio: t.descripcio,
imatge: t.imatge,
},
})
}
/>
);
})}

          </div>
        </Col>
      </Grid>
    </div>
  );
}