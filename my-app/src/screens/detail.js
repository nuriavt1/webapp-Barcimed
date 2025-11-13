import { useNavigate, useLocation } from "react-router-dom";
import Text_Type from "../components/text_type";
import Icon_Button from "../components/icon_button";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();

  const { imatge, titol, descripcio } = location.state || {};

  return (
    <div style={{ background: "var(--color-brown100)", height: "100%" }}>
      <Icon_Button
        onClick={() => navigate(-1)}
        alt="tornar enrere"
        src="back.svg"
      />

      <img
        src={`/imatgesDetall/${imatge}`}
        alt={titol}
        style={{ width: "100%", objectFit: "cover" }}
      />

      <Text_Type>{titol}</Text_Type>
      <Text_Type>{descripcio}</Text_Type>
    </div>
  );
}

export default Detail;
