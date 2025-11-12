import React, { useEffect, useRef, useState } from "react";

export default function GoogleMap() {
  const API_KEY = "AIzaSyDjd6_cWoVzsLayPAa9rZpOjd6jB9l2H1w";
  const mapRef = useRef(null);
  const [mapa, setMapa] = useState(null);

  useEffect(() => {
    // Cargar script de Google Maps si no está cargado
    const existingScript = document.getElementById("google-maps-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      // Si ya está cargado, inicializamos directamente
      if (window.google) initMap();
      else existingScript.addEventListener("load", initMap);
    }

    function initMap() {
      if (!mapRef.current || mapa) return;

      const barcelona = { lat: 41.3851, lng: 2.1734 };
      const map = new window.google.maps.Map(mapRef.current, {
        center: barcelona,
        zoom: 13,
        mapId: "DEMO_MAP_ID", // opcional si usas estilos
      });

      // Ejemplo de marcador
      new window.google.maps.Marker({
        position: barcelona,
        map,
        title: "Barcelona Medieval",
      });

      setMapa(map);
    }

    return () => {
      // Limpieza si desmontas el componente
      if (existingScript) {
        existingScript.removeEventListener("load", initMap);
      }
    };
  }, [API_KEY, mapa]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100vh",
        background: "var(--color-red500)",
      }}
    />
  );
}
