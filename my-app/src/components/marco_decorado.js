import React from "react";

export default function MarcoDecorado({ color = "#095153", border = "var(--color-groc200)", children }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",      // ocupa tota l’amplada del grid parent
      aspectRatio: "4 / 1", // manté proporció visual, pots ajustar-la
    }}>
      <svg
        viewBox="0 0 400 100"
      
        style={{
          width: "100%",
          height: "100%",
          display: "block",
           filter: "drop-shadow(0px 4px 0 rgba(0, 0, 0, 0.25))",
        }}
      >
        <path
         d="M12 2h376v10h10v76h-10v10H12v-10H2V12h10z"
          fill={color}
          stroke={border}
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "20px",
           paddingRight: "20px",
          color: "white",
          fontFamily: "serif",
          fontSize: "1.2rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}
