import React, { useContext } from "react";
import TemaContext from "./TemaContext";
import './style.css'

const Tema = () => {

    const { Tema, toggleTema } = useContext(TemaContext);

    return (
        <div className={`container ${Tema}`}>
            <h1>Componente</h1>
            <button onClick={toggleTema}>Alterar tema</button>
        </div>
    );

}

export default Tema;