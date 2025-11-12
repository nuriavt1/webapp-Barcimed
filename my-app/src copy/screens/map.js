import GoogleMap from "../components/googleMap";
import Icon_Button from "../components/icon_button";
import Text_Type from "../components/text_type";
import { useNavigate } from "react-router-dom";

function Map(){
    const navigate = useNavigate()
    return(

        <div >
            <div style={{background: "var(--color-blue700)", display: "flex", justifyContent: "space-around", alignItems: "center", color: "var(--color-white)"}}>
                <Icon_Button onClick={() => navigate(-1)} alt="tornar enrere" src="back.svg"></Icon_Button>
                 <Text_Type>DIRIGEIX-TE A</Text_Type>
                
                  
            </div>
            <Text_Type>Aquesta és la pàgina de mapa</Text_Type>
            <GoogleMap></GoogleMap>
        </div>
    );
}
export default Map;