import { createContext, useContext, useState, useEffect } from "react";
import targetesData from "../data/targetes.json";
import videosData from "../data/videos.json";
import endevinallesData from "../data/endevinalles.json";
import capitolsData from "../data/capitol.json";
const NivellContext = createContext();

export function NivellProvider({ children }) {

  const [capitols, setCapitols] = useState(() => {
    const guardats = JSON.parse(localStorage.getItem("capitols"));
    return guardats || capitolsData;
  });

  const [videos, setVideos] = useState(() => {
    const guardats = JSON.parse(localStorage.getItem("videos"));
    return guardats || videosData;
  });


  const [targetes, setTargetes] = useState(() => {
    const guardades = JSON.parse(localStorage.getItem("targetes"));
    return guardades || targetesData;
  });

  const [esPartDos, setEsPartDos] = useState(() => {
  const guardat = localStorage.getItem("esPartDos");
  return guardat ? JSON.parse(guardat) : false;
});


const [nivellActual, setNivellActual] = useState(() => {
  const guardat = localStorage.getItem("nivellActual");
  return guardat ? JSON.parse(guardat) : 1;
});

  const [endevinalles, setEndevinalles] = useState(() => {
    const guardades = JSON.parse(localStorage.getItem("endevinalles"));
    return guardades || endevinallesData;
  });

  //Guardar videos al local Storage cada cop que canvii
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  //Guardar endevinalles al local Storage cada cop que canvii
  useEffect(() => {
    localStorage.setItem("endevinalles", JSON.stringify(endevinalles));
  }, [endevinalles]);

  //Guardar targetes al local Storage cada cop que canvii
  useEffect(() => {
    localStorage.setItem("targetes", JSON.stringify(targetes));
  }, [targetes]);


  // Carregar progrés inicial
  // Guardar progrés cada cop que canvia

  //PROGRES/NIVELLS

  //Coneixer quin és el progres actual
  const getProgress = () => {
    return JSON.parse(localStorage.getItem("progress")) || {
      nivellActual: 1,
      // targetesDesbloquejades: [],
      // videosDesbloquejats: [],
    };
  }

  // Coneixer si és el primer cop o no (nivell 0)
  const esPrimerCop = () => localStorage.getItem("progress") === null;


  //Pujar nivell
  const pujarNivell = () => { setNivellActual((n) => n + 1); }

  //Canviar part 1 per part 2 o a la inversa
  const canviarPart = () => {
    setEsPartDos((prev) => !prev);
  };

  //ENDEVINALLES
  //Marcar com a endevinalla resolta
  const marcaComResolta = (id) => {
    const novesEndevinalles = endevinalles.map((e) =>
      e.id === id ? { ...e, resolta: true } : e
    );
    setEndevinalles(novesEndevinalles);
  };

  const getEndevinallaData = (id) => {
    return endevinalles.find((t) => t.id === id);
  }
  //Guardar la endevinalla resolta (perque es visualitzi)

  //CAPITOLS
  //Obtenir les dades d'un capitol per id
  const getCapitolsData = (id) => {
    return capitols.find((t) => t.numero === id);
  }

  //UBICACIÓ
  //Saber la ubicació actual correcta
  //Saber si esta en la ubicació correcta
  //Saber a cuanta distancia esta de la ubicació correcta

  //TARGETES
  //Llista de totes les targetes actualitzada

  //Llista de targetes desbloquejades
  //Desbloquejar Targeta desde el id
  const desbloquejarTargeta = (id) => {
    let haCanviat = false;

    setTargetes((prev) => {
      const next = prev.map((t) => {
        if (t.id === id) {
          if (!t.desbloquejat) {
            haCanviat = true;
            return { ...t, desbloquejat: true };
          }
          return t; // ja estava desbloquejada
        }
        return t;
      });

      if (haCanviat) localStorage.setItem("targetes", JSON.stringify(next));
      return next;
    });

    return haCanviat; // si vols saber fora si va canviar
  };


  //Rebre dades de una targeta per id
  const getTargetaData = (idTargeta) => {
    return targetes.find((t) => t.id === idTargeta);
  };
  //Coneixer si la targeta esta desbloquejada per id


  //VIDEOS

  //Obtenir dades d'un video per id
  const getVideoData = (idVideo) => {
    return videos.find((v) => v.idVideo === idVideo);
  };

  //Obtenir llista de tots els videos actualitzada
  //Saber estat del video (watch, lock, active)
  const getEstatVideo = (idVideo) => {
    const video = videos.find((v) => v.idVideo === idVideo);
    return video ? video.estat : "lock";
  }
  //Cambiar estat del video a active
  // Canviar l'estat d'un vídeo a "active"
  const canviaVideoActive = (idVideo) => {
    setVideos((prevVideos) => {
      // Generem una nova llista de vídeos
      const actualitzats = prevVideos.map((v) =>
        v.idVideo === idVideo ? { ...v, estat: "active" } : v
      );

      // Guardem al localStorage (si vols persistència)
      localStorage.setItem("videos", JSON.stringify(actualitzats));

      // Retornem la nova llista perquè React actualitzi l’estat
      return actualitzats;
    });
  };

  //Cambiar estat del video a watch
  const canviaVideoWatch = (idVideo) => {
    setVideos((prevVideos) => {
      const actualitzats = prevVideos.map((v) =>
        v.idVideo === idVideo ? { ...v, estat: "watch" } : v
      );
      localStorage.setItem("videos", JSON.stringify(actualitzats));
      return actualitzats;
    });
  };

  return (
    <NivellContext.Provider
      value={{
        nivellActual,
        getProgress,
        esPrimerCop,
        pujarNivell,

        targetes,
        desbloquejarTargeta,
        getTargetaData,

        videos,
        getVideoData,
        getEstatVideo,
        canviaVideoActive,
        canviaVideoWatch,

        endevinalles,
        marcaComResolta,
        getEndevinallaData,

        capitols,
        getCapitolsData,

        esPartDos,
        canviarPart
      }}
    >
      {children}
    </NivellContext.Provider>
  );

}

export function useNivell() {
  return useContext(NivellContext);
}
