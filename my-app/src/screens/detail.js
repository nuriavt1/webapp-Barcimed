import Text_Type from "./text_type";
function Detail(imatge, titol, text) {
return(
  <div>
<div>
            <img src={imatge}></img>
            <Text_Type>{titol}</Text_Type>
            <Text_Type>{text}</Text_Type>

        </div>
  </div>
);
}
export default Detail;