import { Col, Grid } from "./grid/grid";
import Text_Type from "./text_type";
import Video_Card from "./video_card";
import { useNivell } from "../context/nivellContext";
import { useComprovaUbicacio } from "../hooks/useComprovaUbicacio";

export default function Videos_Screen() {
  const { videos, getEstatVideo, canviaVideoActive, canviaVideoWatch } = useNivell();
  const { comprovaUbicacio } = useComprovaUbicacio();

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
          <Text_Type variant="h2">VÍDEOS</Text_Type>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {videos.map((video) => {
              // 🔹 Obtenim l’estat real des del context
              const estat = getEstatVideo(video.idVideo);
               console.log("VIDEO:", video.idVideo, "ESTAT:", estat, "OBJ:", video);

              return (
                <div key={video.idVideo}>
                  <Video_Card
                    estate={estat} // ara sí: el valor ("lock" | "active" | "watch")
                    id={video.idVideo}
                    nom={video.titol}
                    imatge={video.imatgeCaratula}
                    url={video.url}
                  />

                  {/* 🔸 Mostrem accions segons l'estat 
                  {estat === "lock" && (
                    <button onClick={() => canviaVideoActive(video.idVideo)}>
                      Activar
                    </button>
                  )}

                  {estat === "active" && (
                    <button onClick={() => comprovaUbicacio(video)}>
                      Comprova ubicació
                    </button>
                  )}

                  {estat === "watch" && (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => canviaVideoWatch(video.idVideo)}
                    >
                      Veure vídeo
                    </a>
                  )}*/}
                </div>
              );
            })}
          </div>
        </Col>
      </Grid>
    </div>
  );
}
