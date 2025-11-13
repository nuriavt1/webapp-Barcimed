import styles from "../styles/video_screen.module.css";
import Text_Type from "./text_type";
import { useNavigate } from "react-router-dom";

export default function Video_Card({ estate = "watch", id, nom, imatge, url }) {
  const navigate = useNavigate();
  const video_state = () => {
    switch (estate) {
      case "lock":
        return (
          <div className={styles.container_locked}>
            <img src="/imatges_capitols/lock.svg" alt="Candado" />
            <div className={styles.container_locked_text}>
              <Text_Type>DESBLOQUEJA EN</Text_Type>
              <Text_Type>CAPÍTOL {id}</Text_Type>
            </div>

          </div>
        );

      case "watch":
        return (
           <div className={styles.container} 
           onClick={() => (window.location.href = url)}
           >
            <img
              src={`/imatges_caratules/${imatge}`}
              alt="video thumbnail"
              className={styles.image}
            />

            <img
              src="/imatges_generals/video_play.svg"
              alt="Play"
              className={styles.play}
            />
            <span className={styles.shine}></span>
          </div>
        );

      case "active":
        return (
          <div className={styles.container} onClick={() => console.log("Actiu però encara bloquejat")}>
            <img
              src={`/imatges_caratules/${imatge}`}
              alt="video thumbnail"
              className={styles.image}
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{video_state()}</div>;
}
