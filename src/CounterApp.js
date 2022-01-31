import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const handleAdd= (e) => {
        console.log(e);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>

            <button onClick= {handleAdd}>+1</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;

// onClick= {(e) => {handleAdd(e)}}, onClick recibe un evento como argumento que luego es el argumento de la función, se simplifica 