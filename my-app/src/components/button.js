import { useState } from 'react';
import Text_Type from "../components/text_type";

const palettes = {
  primary: {
    base: 'var(--color-red500)',
    hover: 'var(--color-red600)',
    active: 'var(--color-red700)',
    text: 'var(--color-white)',
  },
  secondary: {
    base: 'var(--color-blue500)',
    hover: 'var(--color-blue600)',
    active: 'var(--color-blue700)',
    text: 'var(--color-white)',
  },
    tertiary: {
    base: 'var(--color-groc600)',
    hover: 'var(--color-groc700)',
    active: 'var(--color-groc800)',
    text: 'var(--color-white)',
  }
};

export default function Button({ children, onClick, color = 'primary', version = 1, icon }) {
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  const palette = palettes[color] || palettes.primary;

  const backgroundColor = isActive
    ? palette.active
    : isHovered
      ? palette.hover
      : palette.base;

  return (


    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        backgroundColor,
        color: palette.text,
        width: '100%',
        padding: '12px 0',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, transform 0.1s ease',
        clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
        fontFamily: 'inherit',
      }} >
      {version === 1 ? (
        <Text_Type variant="h3">{children}</Text_Type>
      ) : version === 2 ? (
       <div style={{display:'flex', flexDirection: 'row', gap: "12px", alignItems: "center", justifyContent: "center"}}>
       {icon && <img src={icon} alt="" />}
        <Text_Type variant="t2">{children}</Text_Type>
       </div>
        
      ) : (
        <Text_Type variant="bodyS">{children}</Text_Type>
      )}

    </button>
  );
}
