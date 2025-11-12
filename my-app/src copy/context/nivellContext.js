import { createContext, useContext, useState, useEffect } from "react";
import {
  getProgress,
  saveProgress,
  desbloquejarTargeta,
  reiniciarProgressio,
} from "../logic/logic_functions";
import { useVideos } from "./videoContext"; // 🔹 Importa el context de vídeos

const NivellContext = createContext();

export function NivellProvider({ children }) {
  // 🔹 Estat de nivell i targetes
  const [nivellActual, setNivellActual] = useState(1);
  const [targetesDesbloquejades, setTargetesDesbloquejades] = useState([]);

  // 🔹 Funcions i dades del context de vídeos
  const {
    videos,
    desbloquejaVideo,
    desbloquejaUbicacio,
    getVideoPerId,
    getVideosActius,
  } = useVideos();

  // 🔹 Carrega progrés inicial del localStorage
  useEffect(() => {
    const data = getProgress();
    setNivellActual(data.nivellActual);
    setTargetesDesbloquejades(data.targetesDesbloquejades || []);
  }, []);

  // 🔹 Desa canvis automàticament quan hi ha actualitzacions
  useEffect(() => {
    saveProgress({
      nivellActual,
      targetesDesbloquejades,
      videosDesbloquejats: getVideosActius().map((v) => v.idVideo),
    });
  }, [nivellActual, targetesDesbloquejades, videos]);

  // 🔸 Funcions principals
  const pujarNivell = () => {
    setNivellActual((n) => n + 1);
  };

  const desbloquejarT = (id) => {
    if (!targetesDesbloquejades.includes(id)) {
      setTargetesDesbloquejades([...targetesDesbloquejades, id]);
      desbloquejarTargeta(id);
    }
  };

  // 🔸 NOVA: desbloquejar vídeo a través del context de vídeos
  const desbloquejarV = (id) => {
    const video = getVideoPerId(id);
    if (video && !video.debloquejat) {
      desbloquejaVideo(id);
    }
  };

  // 🔸 NOVA: desbloquejar ubicació del vídeo
  const desbloquejarUbicacioV = (id) => {
    const video = getVideoPerId(id);
    if (video && !video.ubicacióDesbloquejada) {
      desbloquejaUbicacio(id);
    }
  };

  // 🔸 Reiniciar tot el progrés
  const reiniciar = () => {
    reiniciarProgressio();
    setNivellActual(1);
    setTargetesDesbloquejades([]);
    localStorage.removeItem("videos"); // 🔹 Esborra vídeos desbloquejats
  };

  // 🔸 Comprovacions ràpides
  const esTargetaDesbloquejada = (id) => targetesDesbloquejades.includes(id);
  const esVideoDesbloquejat = (id) => {
    const video = getVideoPerId(id);
    return video ? video.debloquejat : false;
  };

  return (
    <NivellContext.Provider
value={{
nivellActual,
targetesDesbloquejades,
pujarNivell,
desbloquejarT,
reiniciar,
// video state + ops
videos,
desbloquejaVideo,
desbloquejaUbicacio, // alias below
getVideoPerId,
getVideosActius,
esTargetaDesbloquejada,
esVideoDesbloquejat,
desbloquejarV, 
desbloquejarUbicacioV, 
}}
    >
      {children}
    </NivellContext.Provider>
  );
}

export function useNivell() {
  return useContext(NivellContext);
}
