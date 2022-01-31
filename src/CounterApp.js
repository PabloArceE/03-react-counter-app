import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value); 
    // hook que retorna un valor y la función para modificarlo; con esta desestructuración del arreglo que retorna el hook se obtienen dos constantes para trabajar con el valor y la función que lo modifica.

    const handleAdd= () => setCounter(counter + 1);        

    const handleReset = () => setCounter(value);

    const handleSub = () => setCounter(counter - 1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick= {handleAdd}>+1</button>
            <button onClick= {handleReset}>Reset</button>
            <button onClick= {handleSub}>-1</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;

// onClick= {(e) => {handleAdd(e)}}, onClick recibe un evento como argumento que luego es el argumento de la función, se simplifica 