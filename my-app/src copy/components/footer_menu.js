import { useState } from "react";
import styles from "../styles/footer.module.css";
import Text_Type from "./text_type";

export default function Footer_Menu({active, onChange}) {
    //const [active, setActive] = useState("capitols"); // valor inicial seleccionat

    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <div
                    className={`${styles.footer_option} ${active === "biblioteca" ? styles.active : ""}`}
                    onClick={() => onChange('biblioteca')}
                >
                    <img src="/icones/bookmark-alt.svg" style={{ width: "32px" }} />
                    <Text_Type>Biblioteca</Text_Type>
                </div>

                <div
                    className={`${styles.footer_option} ${active === "capitols" ? styles.active : ""}`}
                    onClick={() => onChange('capitols')}
                >
                    <img src="/icones/play.svg" style={{ width: "32px" }} />
                    <Text_Type>Capítols</Text_Type>
                </div>

                <div
                    className={`${styles.footer_option} ${active === "video" ? styles.active : ""}`}
                    onClick={() => onChange('video')}
                >
                    <img src="/icones/play.svg" style={{ width: "32px" }} />
                    <Text_Type>Vídeo</Text_Type>
                </div>
            </footer>
        </div>
    );
}
