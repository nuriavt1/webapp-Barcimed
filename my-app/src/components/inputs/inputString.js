import { useRef, useState } from "react";
import InputLletra from "./inputLletra";
import Button from "../button";
import Text_Type from "../text_type";
import Correct_Modal from "../modals/correct_modal";


export default function InputString({ resposta, onCorrecte }) {


    const correcta = resposta.flat();
    const totalLletres = correcta.length;
    const [letters, setLetters] = useState(Array(totalLletres).fill(""));
    const [letterStates, setLetterStates] = useState(Array(totalLletres).fill(null));
    const inputsRef = useRef([]);
 

    const handleChange = (index, char) => {
        const newLetters = [...letters];
        newLetters[index] = char.toUpperCase();
        setLetters(newLetters);
    };

    const focusInput = (index) => {
        if (inputsRef.current[index]) {
            inputsRef.current[index].focus();
        }
    };

    const handleBackspace = (index) => {
        if (index >= 0) focusInput(index);
    };


    const handleNext = (index) => {
        if (index < totalLletres) focusInput(index);
    };

    const comprovarResposta = () => {
 const novaComparacio = letters.map(
      (lletra, i) => lletra.toUpperCase() === correcta[i]
    );
    setLetterStates(novaComparacio);

    const esCorrecte = novaComparacio.every(Boolean);
if (esCorrecte && onCorrecte) onCorrecte();

    };


    return (
        <div>

            {resposta.map((word, wordIndex) => {
                const offset = resposta.slice(0, wordIndex).flat().length;
                return (
                    <div key={wordIndex} style={{ display: "flex", gap: "4px" }}>
                        {word.map((_, i) => {
                            const globalIndex = offset + i;
                            return (

                                <InputLletra
                                    key={globalIndex}
                                    value={letters[globalIndex]}
                                    index={globalIndex}
                                    onChange={handleChange}
                                    onBackspace={handleBackspace}
                                    onNext={handleNext}
                                    ref={(el) => (inputsRef.current[globalIndex] = el)}
                                    correct={letterStates[globalIndex]}
                                />

                            );
                        })}
                    </div>
                );
            })}

            <Button onClick={comprovarResposta}>ENVIAR</Button>

             {/*     {respostaCorrecta && (
        <Text_Type variant="success"> Correcte! Has resolt l’endevinalla.</Text_Type>
      )}

      {isModalOpen && <Correct_Modal onClose={tancarModal} />}*/} 

        </div>
    );
}
