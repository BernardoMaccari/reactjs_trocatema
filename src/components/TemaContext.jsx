import React, { createContext, useState } from "react";

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
    const [Tema, setTema] = useState('light');

    const toggleTema = () => {
            setTema(Tema === 'light' ? 'dark' : 'light');
        }

    return(
        <TemaContext.Provider value={{ Tema, toggleTema }}>
            { children }
        </TemaContext.Provider>
    );
}  

export default TemaContext;