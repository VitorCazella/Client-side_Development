import React from 'react';
import '../style/calc.css'

const name = "Calculator";

function Calculator() {
    return (
    <div className="calculator-grid">
        <div className="output">
            <div data-previous-operand className="previous-operand"></div>
            <div data-current-operand className="current-operand"></div>
        </div>
        <button data-all-clear className="span-two clear">AC</button>
        <button data-delete className="delete">DEL</button>
        <button data-operation className="operation">÷</button>
        <button data-number className="number">1</button>
        <button data-number className="number">2</button>
        <button data-number className="number">3</button>
        <button data-operation className="operation">*</button>
        <button data-number className="number">4</button>
        <button data-number className="number">5</button>
        <button data-number className="number">6</button>
        <button data-operation className="operation">+</button>
        <button data-number className="number">7</button>
        <button data-number className="number">8</button>
        <button data-number className="number">9</button>
        <button data-operation className="operation">-</button>
        <button data-number className="number">.</button>
        <button data-number className="number">0</button>
        <button data-equals className="span-two equals">=</button>
    </div>
    );
}

export default Calculator;