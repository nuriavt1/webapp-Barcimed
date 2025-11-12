export default function Icon_Button({ src, alt, onClick }) {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <img src={`/icones/${src}`} alt={alt} />

    </button>
  );
}
