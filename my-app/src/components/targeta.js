import styles from "../styles/biblioteca_screen.module.css";

export default function Targeta({
  imatge,
  id,
  nom,
  onClick,
  className = "",
  estado = "false",
}) {
  const renderTargeta = () => {
    switch (estado) {
      case "true":
        return (
          <div
            className={`${styles.targeta} ${className}`}
            onClick={onClick}
             style={{ width: 103.33,  filter: "drop-shadow(0px 4px 0 rgba(0, 0, 0, 0.25))",}}
          >
            <img
              src={`/imatges_targetes/${imatge}`}
              alt={nom}
              className={styles.imatge}
              width={103.33}
              height={142.76}

            />
          </div>
        );

      case "false":
        return (
          <div
            style={{
              width: 103.33,
              height: 142.76,
              background: "var(--color-blue700)",
              clipPath:
                "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
            }}
          ></div>
        );

      default:
        return null;
    }
  };

  return renderTargeta();
}
