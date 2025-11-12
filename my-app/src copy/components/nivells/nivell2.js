import { useState } from "react";
import styles from "../../styles/nivells.module.css";
import InputLletra from "../inputs/inputLletra";

import endevinalles from "../../data/endevinalles.json";
import Text_Type from "../text_type";

import { useNivell } from "../../context/nivellContext";



export default function Nivell2({ resolta, marcaResolta }) {
 
  return (
   <div>
     <Text_Type>Nivell 2</Text_Type>
   </div>
   
  );
}
