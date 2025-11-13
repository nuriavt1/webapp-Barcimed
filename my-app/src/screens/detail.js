import { useNavigate } from "react-router-dom";
import Text_Type from "../components/text_type";
import Icon_Button from "../components/icon_button";

function Detail(imatge, titol, text) {
      const navigate = useNavigate();
return(
  <div>
<div>
      <Icon_Button onClick={() => navigate(-1)} alt="tornar enrere" src="back.svg"></Icon_Button>
            <img src={imatge}></img>
            <Text_Type>{titol}</Text_Type>
            <Text_Type>{text}</Text_Type>
           

        </div>
  </div>
);
}
export default Detail;