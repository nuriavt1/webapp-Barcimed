import { Col, Grid } from "./grid/grid";
import Text_Type from "./text_type";
import Video_Card from "./video_card";
import { useNivell } from "../context/nivellContext";
import { useMemo } from "react";
import { useComprovaUbicacio } from "../hooks/useComprovaUbicacio";
import videosData from "../data/videos.json";

export default function Videos_Screen() {
const { videos } = useNivell();
const { comprovaUbicacio } = useComprovaUbicacio();

// Fallback a JSON si el context encara no està carregat
const videosTots = useMemo(
() => (Array.isArray(videos) && videos.length ? videos : videosData),
[videos]
);

const getEstate = (v) => {
const locUnlocked =
v.ubicacioDesbloquejada ??
v["ubicacióDesbloquejada"] ??
v["ubicaci\u00F3Desbloquejada"]; // maneja accents/encoding

if (!v.debloquejat) return "locked";
return locUnlocked ? "watch" : "active";
};

const isLocUnlocked = (v) =>
v.ubicacioDesbloquejada ??
v["ubicacióDesbloquejada"] ??
v["ubicaci\u00F3Desbloquejada"];

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
{videosTots.map((video) => {
const estate = getEstate(video);
const locUnlocked = isLocUnlocked(video);

          return (
            <div key={video.idVideo}>
              <Video_Card
                estate={estate}
                id={video.idVideo}
                nom={video.titol}
                imatge={video.imatgeCaratula}
                url={video.url}
              />

              {!locUnlocked ? (
                <button onClick={() => comprovaUbicacio(video)}>
                  Comprova ubicació
                </button>
              ) : (
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  Veure vídeo
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Col>
  </Grid>
</div>
);
}