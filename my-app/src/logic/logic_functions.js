
//FUNCIONS POGRÉS

//Llegeix progres actual del usuari. Mira su existeix un objecte progress al local storage i si no crea un estat inicial.
export function getProgress() {
    return JSON.parse(localStorage.getItem("progress")) || {
    nivellActual: 1,
    targetesDesbloquejades: [],
    videosDesbloquejats: [],
  };
}

//Desa l'estat actualitzat a localStorage
export function saveProgress(progress) {
    localStorage.setItem("progress", JSON.stringify(progress));
}

//Incrementa el nivell del jugador
export function pujarNivell() {
const progress = getProgress();
progress.nivellActual += 1;
saveProgress(progress);
return progress.nivellActual;
}

//FUNCIONS TARGETES

//Desbloqueja una targeta
export function desbloquejarTargeta(idTargeta) {
    const progress = getProgress();
     if (!progress.targetesDesbloquejades.includes(idTargeta)) {
    progress.targetesDesbloquejades.push(idTargeta);
    saveProgress(progress);
  }
  return progress.targetesDesbloquejades;

}

//Marca video com a desbloquejat 
export function desbloquejarVideo(idVideo) {
  const progress = getProgress();
  if (!progress.videosDesbloquejats.includes(idVideo)) {
    progress.videosDesbloquejats.push(idVideo);
    saveProgress(progress);
  }
  return progress.videosDesbloquejats;
}

//Comprova si una targeta està desbloquejada
export function esTargetaDesbloquejada(idTargeta) {
  const progress = getProgress();
  return progress.targetesDesbloquejades.includes(idTargeta);
}

//Comprova si un video està desbloquejat
export function esVideoDesbloquejat(idVideo) {
  const progress = getProgress();
  return progress.videosDesbloquejats.includes(idVideo);
}

//Esborra progrés per començar de zero
export function reiniciarProgressio() {
  localStorage.removeItem("progress");
}


