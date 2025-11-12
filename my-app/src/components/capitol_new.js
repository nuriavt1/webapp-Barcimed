import MarcoDecorado from "./marco_decorado";
import Text_Type from "./text_type";
import styles from '../styles/capitols_screen.module.css';

export default function Capitol_New({ estado="progress", nombre="NOMBRE", numero="X", imatge="cap_cavaller.svg", onClick }) {
  // selecciona qué versión mostrar
  const renderMarco = () => {
    switch (estado) {
      case "progress":
        return (
          <MarcoDecorado>
            <div className={styles.capitol_left} onClick={{onClick}}>
              <img src="/imatges_capitols/progress.svg" alt="progreso" />
              <div className={styles.capitol_text}>
                <Text_Type variant="t2">CAPÍTOL {numero}</Text_Type>
                <Text_Type variant="bodyS">{nombre}</Text_Type>
              </div>
            </div>
            <img src={`/imatges_capitols/${imatge}`} alt="capitol" />

          </MarcoDecorado>
        );

      case "check":
        return (
          <MarcoDecorado color="#095153" border="var(--color-blue600)">
            <div className={styles.capitol_left}>
              <img src="/imatges_capitols/check.svg" alt="completado" />
              <div className={styles.capitol_text}>
                <Text_Type variant="t2">CAPÍTOL {numero}</Text_Type>
                <Text_Type variant="bodyS">{nombre}</Text_Type>
              </div>
            </div>
            <img src={`/imatges_capitols/${imatge}`} alt="capitol" />
          </MarcoDecorado>
        );

      case "lock":
        return (
          <MarcoDecorado color="var(--color-neutrals500)" border="var(--color-neutrals600)">
            <div className={styles.capitol_left}>
              <img src={`/imatges_capitols/lock.svg`} alt="bloqueado" />
              <div className={styles.capitol_text}>
                <Text_Type variant="t2">CAPÍTOL {numero}</Text_Type>
              </div>
            </div>
          </MarcoDecorado>
        );

      default:
        return null;
    }
  };

  return <div className={styles.capitol_marco}>{renderMarco()}</div>;
}
