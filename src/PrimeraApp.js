import React from "react";
import PropTypes from "prop-types";

// Functional Components - Componentes basados en constantes

// Normalmente se desestructuran las props para utilizarlas

const PrimeraApp = ({ parentProp, propDefault = 'Default Value'}) => {
    
    const texto = 'Etiqueta h2 desde una constante'

    return (
        <>
        <h1> Etiqueta h1 desde una Functional Component </h1>
        <h2> {texto} </h2>
        <p> Parrafo incluido en un fragment</p>
        <p>Aquí se muestra el valor obtenido desde: " {parentProp} "</p>
        <p>En este parrafo se puede ver el valor por defecto de una propiedad del componente PrimeraApp incluida en la desestructuración de sus props: " {propDefault} " </p>
        </>
    );
}

PrimeraApp.propTypes = {
    parentProp: PropTypes.string.isRequired,
    propDefault: PropTypes.string,
} 

export default PrimeraApp;