import React from "react";

// Functional Components - Componentes basados en constantes

const PrimeraApp = () => {
    
    const texto = 'Etiqueta h2 desde una constante'

    return (
        <>
        <h1> Etiqueta h1 desde una Functional Component </h1>
        <h2> {texto} </h2>
        <p> Parrafo incluido en un fragment</p>
        </>
    );
}

export default PrimeraApp;